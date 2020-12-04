import _ from 'lodash';
import { fetchAuthor, fetchAuthorBookList, fromEnv, Config } from './api';
import { Author, Book } from './types';

const config: Config = fromEnv();

export const resolvers = {
  Query: {
    author_show: async (_: any, args: any) => {
      const { id } = args;
      return await fetchAuthor(id, config.goodreadsToken);
    },
    author_book_list: async (_: any, args: any) => {
      const { id } = args;
      return await fetchAuthorBookList(id, config.goodreadsToken);
    },
  },
  Author: {
    link: async (author: Author) => {
      return author.link._cdata;
    },
    large_image_url: async (author: Author) => {
      return author.large_image_url._cdata;
    },
    image_url: async (author: Author) => {
      return author.image_url._cdata;
    },
    small_image_url: async (author: Author) => {
      return author.small_image_url._cdata;
    },
    about: async (author: Author) => {
      // Some authors don't have about section - manually resolving
      return author.about ? author.about._cdata : null;
    },
    influences: async (author: Author) => {
      // Some authors don't have influences section - manually resolving
      return author.influences ? author.influences._cdata : null;
    },
    books: async (author: Author) => {
      // Creating an array of Books to match type specified in schema
      const parsedBooks = _.values(author.books.book);
      return parsedBooks;
    },
  },
  Book: {
    // Note did not need to manually resolve image_url, small_image_url & link like in 'Author' or 'BookAuthor'
    // as no _.cdata field existed
    authors: async (book: Book) => {
      const parsedBooks = _.values(book.authors);
      return parsedBooks;
    },
  },
};
