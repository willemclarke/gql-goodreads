import axios from 'axios';
import _ from 'lodash';
import { Author } from './types';
import { parseGoodreadsResponse } from './utils';
import { config } from 'dotenv';

export interface Config {
  goodreadsToken: string;
}

config();

const getEnv = (value: string): string => {
  const env = process.env[value];
  if (!env) {
    throw new Error(`Unable to get ${value} from environment variables`);
  } else {
    return env;
  }
};

export const fromEnv = (): Config => {
  return {
    goodreadsToken: getEnv('GOODREADS_TOKEN'),
  };
};

export const fetchAuthor = async (id: string, key: string): Promise<Author> => {
  const resp = await axios.get(`https://www.goodreads.com/author/show/${id}?format=xml&key=${key}`);
  const parsed = parseGoodreadsResponse(resp.data);
  return parsed.author;
};
