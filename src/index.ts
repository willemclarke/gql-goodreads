import axios from 'axios';
import _ from 'lodash';
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
  console.log('Individual book authors: ', parsed.author.books.book);
  return parsed.author;
};

fetchAuthor('18541');
const typeDefs = gql`
  type Author {
    id: String!
    name: String
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
    books: [Book]!
  }

  type Book {
    id: Int
    isbn: Float
    isbn13: Float
    text_reviews_count: Int
    uri: String
    title: String
    title_without_series: String
    image_url: String
    small_image_url: String
    link: String
    num_pages: Int
    format: String
    edition_information: String
    publisher: String
    publication_day: Int
    publication_year: Int
    publication_month: Int
    published: Int
    average_rating: Float
    ratings_count: Int
    description: String
    authors: [BookAuthor]
  }

  type BookAuthor {
    image_url: String
    small_image_url: String
    link: String
    id: Int
    name: String
    average_rating: Float
    ratings_count: Int
    text_reviews_count: Int
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
    books: async (author: LooseObject) => {
      // Creating an array of Books to match type specified type
      const parsedBooks = _.values(author.books.book);
      return parsedBooks;
    },
  },
  Book: {
    // Note did not need to manually resolve image_url, small_image_url & link like in 'Author' or 'BookAuthor'
    // as no _.cdata field existed
    authors: async (book: LooseObject) => {
      const parsedBooks = _.values(book.authors);
      return parsedBooks;
    },
  },
  BookAuthor: {
    image_url: async (author: LooseObject) => {
      return author.image_url._cdata;
    },
    small_image_url: async (author: LooseObject) => {
      return author.small_image_url._cdata;
    },
    link: async (author: LooseObject) => {
      return author.link._cdata;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
