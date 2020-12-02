import axios from 'axios';
import { config } from 'dotenv';
import { ApolloServer, gql } from 'apollo-server';
import { LooseObject, parseGoodreadsResponse } from './utils';

config();

const goodreadsKey = process.env.GOODREADS_KEY;

const fetchAuthor = async (id: string): Promise<LooseObject> => {
  const resp = await axios.get(
    `https://www.goodreads.com/author/show/${id}?format=xml&key=${goodreadsKey}`,
  );
  const parsed = parseGoodreadsResponse(resp.data);
  console.log('Author response: ', parsed.author);
  return parsed.author;
};

fetchAuthor('18541');

const typeDefs = gql`
  type Author {
    id: String!
    name: String!
    link: String
    fans_count: Int
    author_followers_count: Int
    large_image_url: String
    image_url: String
    small_image_url: String
    about: String
    influences: String
    works_count: Int
    gender: String
    hometown: String
    bornAt: String
    diedAt: String
    goodreads_author: Boolean
    # books: [Book]!
  }

  type Book {
    id: Int
    isbn: Int
    isbn13: Int
    textReviewsCount: Int
    uri: String
    title: String
    titleWithoutSeries: String
    imageUrl: String
    smallImageUrl: String
    largeImageUrl: String
    link: String
    numPages: Int
    format: String
    editionInformation: String
    publisher: String
    publicationDay: Int
    publicationYear: Int
    publicationMonth: Int
    published: Int
    averageRating: Int
    ratingsCount: Int
    description: String
    authors: [Author]
  }

  type Query {
    author: Author
  }
`;

const resolvers = {
  Query: {
    author: async () => await fetchAuthor('18541'),
  },
  Author: {
    // books: async (author: LooseObject) => {
    //   return author.books.book;
    // },
    link: async (author: LooseObject) => {
      return author.link._cdata;
    },
    large_image_url: async (author: LooseObject) => {
      return author.large_image_url._cdata;
    },
    image_url: async (author: LooseObject) => {
      return author.image_url._cdata;
    },
    small_image_url: async (author: LooseObject) => {
      return author.small_image_url._cdata;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
