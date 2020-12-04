import axios from 'axios';
import _ from 'lodash';
import { config } from 'dotenv';
import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import { Author, AuthorBookList } from './types';
import { parseGoodreadsResponse } from './utils';

config();

const goodreadsKey = process.env.GOODREADS_KEY;

export const fetchAuthor = async (id: string): Promise<Author> => {
  const resp = await axios.get(
    `https://www.goodreads.com/author/show/${id}?format=xml&key=${goodreadsKey}`,
  );
  const parsed = parseGoodreadsResponse(resp.data);
  return parsed.author;
};

export const fetchAuthorBookList = async (id: string): Promise<AuthorBookList> => {
  const resp = await axios.get(
    `https://www.goodreads.com/author/list/${id}?format=xml&key=${goodreadsKey}`,
  );
  const parsed = parseGoodreadsResponse(resp.data);
  return parsed.author;
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
