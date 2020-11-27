import axios from 'axios';
import xml2j from 'xml2js';
import { config } from 'dotenv';
import { ApolloServer, gql } from 'apollo-server';
import { Author } from './types';

config();

const goodreadsKey = process.env.GOODREADS_KEY;

const fetchAuthor = async (id: string): Promise<void> => {
  const data = (await axios.get(`https://www.goodreads.com/author/show/${id}?format=xml&key=${goodreadsKey}`))
    .data;
  return xml2j.parseString(data, (err, result) => {
    const goodReadsResponse = result['GoodreadsResponse'];
    const authorInfo: Author = goodReadsResponse['author'][0];
    console.log(authorInfo);
    return authorInfo;
  });
};

const typeDefs = gql`
  type Author {
    id: String!
    name: String!
    link: String!
    fansCount: Int!
    authorFollowersCount: Int!
    largeImageUrl: String!
    imageUrl: String!
    smallImageUrl: String!
    about: String!
    influences: String!
    worksCount: String!
    gender: String!
    hometown: String!
    bornAt: String!
    diedAt: String!
    goodreadsAuthor: Boolean!
    books: [Book!]!
  }

  type Book {
    id: Int!
    isbn: String!
    isbn13: String!
    textReviewsCount: Int!
    uri: String!
    title: String!
    titleWithoutSeries: String!
    imageUrl: String!
    smallImageUrl: String!
    largeImageUrl: String!
    link: String!
    numPages: String!
    format: String!
    editionInformation: String!
    publisher: String!
    publicationDay: String!
    publicationYear: String!
    publicationMonth: String!
    averageRating: String!
    ratingsCount: String!
    description: String!
    authors: [Author!]!
  }

  type Query {
    author: Author
  }
`;

const resolvers = {
  Query: {
    author: () => fetchAuthor('18541'),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
