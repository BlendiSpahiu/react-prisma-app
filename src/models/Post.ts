export interface Post {
  id: number;
  title: string;
  content?: string;
  published: boolean;
  authorName: string;
  authorEmail: string;
}
