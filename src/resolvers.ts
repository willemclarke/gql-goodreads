import _ from 'lodash';
import { fetchAuthor, fetchBook } from './index';
import { LooseObject } from './utils';

export const resolvers = {
  Query: {
    author_show: async (parent: any, args: any) => {
      const { id } = args;
      return await fetchAuthor(id);
    },
    author_list: async (parent: any, args: any) => {
      const { id } = args;
      return await fetchBook(id);
    },
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
  AuthorBooksList: {
    link: async (parent: LooseObject) => {
      return parent.link._cdata;
    },
    books: async (parent: LooseObject) => {
      // Creating an array of Books to match type specified type
      const parsedBooks = _.values(parent.books.book);
      return parsedBooks;
    },
  },
  Book: {
    // toString isbn as it can be both Int and String
    // isbn: async (book: LooseObject) => {
    //   const isbnToString = book.isbn.toString();
    //   return isbnToString;
    // },
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
