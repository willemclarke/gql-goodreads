import { ApolloServer, gql } from 'apollo-server';

export const typeDefs = gql`
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
    id: Int
    name: String
    role: String
    image_url: String
    small_image_url: String
    link: String
    average_rating: Float
    ratings_count: Int
    text_reviews_count: Int
  }

  type Query {
    author(id: ID!): Author
    book: [Book]
  }
`;