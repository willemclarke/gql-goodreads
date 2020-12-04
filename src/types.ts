export interface Author {
  id: string;
  name: string;
  fans_count: string;
  author_followers_count: string;
  link: { _cdata: string };
  image_url: { _cdata: string };
  large_image_url: { _cdata: string };
  small_image_url: { _cdata: string };
  about: { _cdata: string };
  influences: { _cdata: string };
  worksCount: string;
  gender: string;
  hometown: string;
  born_at: string;
  died_at: string;
  goodreads_author: boolean;
  books: { book: [Book] };
}

export interface AuthorBookList {
  id: string;
  name: string;
  link: { _cdata: string };
  books: [Book];
}

export interface Book {
  id: string;
  isbn: string;
  isbn13: string;
  text_reviews_count: string;
  uri: string;
  title: string;
  title_without_series: string;
  image_url: string;
  small_image_url: string;
  link: string;
  num_pages: string;
  format: string;
  edition_information: string;
  publisher: string;
  publication_day: string;
  publication_year: string;
  publication_month: string;
  average_rating: string;
  ratings_count: string;
  description: string;
  authors: [BookAuthor];
}

export interface BookAuthor {
  id: string;
  name: string;
  role: string;
  image_url: { _cdata: string };
  small_image_url: { _cdata: string };
  link: { _cdata: string };
  average_rating: string;
  ratings_count: string;
  text_reviews_count: string;
}
