export interface Author {
  id: string;
  name: string;
  link: string;
  fans_count: string;
  author_followers_count: string;
  large_image_url: string;
  image_url: string;
  small_image_url: string;
  about: string;
  influences: string;
  worksCount: string;
  gender: string;
  hometown: string;
  born_at: string;
  died_at: string;
  goodreads_author: boolean;
  books: [Book];
}

interface Book {
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
  authors: [Author];
}
