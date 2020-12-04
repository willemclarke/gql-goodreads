## gql-goodreads

- [Goodreads](https://www.goodreads.com/api) graphql api wrapper
- Simple project to learn about GraphQL
- **Note**: _Only wraps the authors endpoint: author.show & author.books (author/list in docs)_
- Interesting project as goodreads api returns xml, which required extra parsing to shape data to schema
- Developed with Typescript and Apollo (apollo-server)

### Usage:

- clone repository
- `npm install`
- Create .env file with `GOODREADS_TOKEN=your_goodreads_api_key`
- `npm run start`

### Example of queries

- author(id: ID!) query:
![author_show query](https://i.gyazo.com/b38011ab16db80e148005c6df51cb5a7.png)

