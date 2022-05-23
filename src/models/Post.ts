export interface Post {
  id: number;
  title: string;
  content?: string;
  published: boolean;
  authorId: number;
  author?: {
    name: string;
    email: string;
  };
}
