## gql-goodreads

- [Goodreads](https://www.goodreads.com/api) graphql api wrapper
- Simple project to learn about GraphQL
- **Note**: *Only wraps the authors endpoint: author/show & author/books (author/list)*
- Interesting project as goodreads api returns xml, which required extra parsing to shape data to schema
- Developed with Typescript and Apollo (apollo-server)

### Usage:

- clone repository
- `npm install`
- Create .env file with `GOODREADS_KEY=your_goodreads_api_key`
- `npm run start`

### Example of query:
