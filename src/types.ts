export interface Author {
  id: string;
  name: string;
  link: string;
  fansCount: number;
  authorFollowersCount: number;
  largeImageUrl: string;
  imageUrl: string;
  smallImageUrl: string;
  about: string;
  influences: string;
  worksCount: string;
  gender: string;
  hometown: string;
  bornAt: string;
  diedAt: string;
  goodreadsAuthor: boolean;
  books: [Book];
}

interface Book {
  id: number;
  isbn: string;
  isbn13: string;
  textReviewsCount: number;
  uri: string;
  title: string;
  titleWithoutSeries: string;
  imageUrl: string;
  smallImageUrl: string;
  largeImageUrl: string;
  link: string;
  numPages: string;
  format: string;
  editionInformation: string;
  publisher: string;
  publicationDay: string;
  publicationYear: string;
  publicationMonth: string;
  averageRating: string;
  ratingsCount: string;
  description: string;
  authors: [Author];
}
