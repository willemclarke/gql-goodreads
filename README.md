## gql-goodreads

- [Goodreads](https://www.goodreads.com/api) graphql api wrapper
- Simple project to learn about GraphQL
- **Note**: _Only wraps the authors endpoint: author/show & author/books (author/list)_
- Interesting project as goodreads api returns xml, which required extra parsing to shape data to schema
- Developed with Typescript and Apollo (apollo-server)

### Usage:

- clone repository
- `npm install`
- Create .env file with `GOODREADS_TOKEN=your_goodreads_api_key`
- `npm run start`

### Example of queries

![author_show query](https://i.gyazo.com/89efddd835449cae66fc78b0602fb0dc.png)
![author_book_list query](https://i.gyazo.com/3b70d3f503bb8c2563dd4b5e1b20390b.png)
