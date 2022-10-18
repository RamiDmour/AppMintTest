export interface GetPostsResponse {
  posts: {
    data: {
      id: string;
      title: string;
    }[];
  };
}

export interface GetPostResponse {
  post: {
    id: string;
    title: string;
  };
}
