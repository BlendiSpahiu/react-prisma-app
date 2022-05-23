import { Author } from '../../models/Author';
import { Post } from '../../models/Post';

export interface PostProps {
  post: Post;
}

export interface PostViewProps extends PostProps {
  author: Author;
}
