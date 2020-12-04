import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    author(id: ID!): Author
  }

  type Author {
    id: String!
    name: String
    link: String
    fans_count: String
    author_followers_count: String
    large_image_url: String
    image_url: String
    small_image_url: String
    about: String
    influences: String
    works_count: String
    gender: String
    hometown: String
    born_at: String
    died_at: String
    goodreads_author: Boolean
    average_rating: String
    ratings_count: String
    text_reviews_count: String
    role: String
    books: [Book]
  }

  type Book {
    id: String!
    isbn: String
    isbn13: String
    text_reviews_count: String
    uri: String
    title: String
    title_without_series: String
    image_url: String
    small_image_url: String
    link: String
    num_pages: String
    format: String
    edition_information: String
    publisher: String
    publication_day: String
    publication_year: String
    publication_month: String
    published: String
    average_rating: String
    ratings_count: String
    description: String
    authors: [Author]
  }
`;
