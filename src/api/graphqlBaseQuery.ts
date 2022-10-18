import request, { ClientError, Variables } from 'graphql-request';

export const graphqlBaseQuery =
  ({ baseUrl }: { baseUrl: string }) =>
  async ({ body, variables }: { body: string; variables?: Variables }) => {
    try {
      const result = await request(baseUrl, body, variables);
      console.log('FETCHED');
      return { data: result };
    } catch (error) {
      if (error instanceof ClientError) {
        return { error: { status: error.response.status, data: error } };
      }
      return { error: { status: 500, data: error } };
    }
  };
