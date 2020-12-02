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
  worksCount: number;
  gender: string;
  hometown: string;
  bornAt: string;
  diedAt: string;
  goodreadsAuthor: boolean;
  books: Book[];
}

interface Book {
  id: number;
  isbn: number;
  isbn13: number;
  textReviewsCount: number;
  uri: string;
  title: string;
  titleWithoutSeries: string;
  imageUrl: string;
  smallImageUrl: string;
  largeImageUrl: string;
  link: string;
  numPages: number;
  format: string;
  editionInformation: string;
  publisher: string;
  publicationDay: number;
  publicationYear: number;
  publicationMonth: number;
  published: number;
  averageRating: string;
  ratingsCount: string;
  description: string;
  authors: [Author];
}
