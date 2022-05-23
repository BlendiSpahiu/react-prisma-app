import { ReactElement } from 'react';
import { PostForm } from '../../Posts/PostForm/PostForm';
import { Layout } from '../../templates';

export const AddPostPage = (): ReactElement => (
  <Layout content={<PostForm />} />
);
