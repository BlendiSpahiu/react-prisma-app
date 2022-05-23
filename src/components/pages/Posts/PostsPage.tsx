import { ReactElement } from 'react';
import { Posts } from '../../Posts/Posts';
import { Layout } from '../../templates/Layout/Layout';

export const PostsPage = (): ReactElement => <Layout content={<Posts />} />;
