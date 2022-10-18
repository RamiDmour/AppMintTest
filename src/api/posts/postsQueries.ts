import { gql } from 'graphql-request';

export const getPostsQuery = gql`
  query {
    posts {
      data {
        id
        title
      }
    }
  }
`;

export const getPostQuery = gql`
  query getPost($id: ID!) {
    post(id: $id) {
      id
      title
      body
    }
  }
`;
