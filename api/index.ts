import { GraphQLClient } from "graphql-request";

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}`;
const token = process.env.REACT_APP_TOKEN;

export const client = new GraphQLClient(endpoint, {
  headers: { authorization: `Bearer ${token}` },
});
