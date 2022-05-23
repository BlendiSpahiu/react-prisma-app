import { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../../Posts/Post';
import { Post as PostModel } from '../../../models/Post';
import { Author } from '../../../models/Author';
import { Layout } from '../../templates';
import axios from 'axios';

export const PostPage = (): ReactElement => {
  // local state
  const [post, setPost] = useState<PostModel>({
    id: 0,
    authorId: 0,
    published: false,
    title: '',
    content: '',
    author: {
      name: '',
      email: '',
    },
  });
  const [author, setAuthor] = useState<Author>({ id: 0, email: '', name: '' });

  // hooks
  const { id } = useParams();

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:4400/post/${id}`,
    }).then((res) => {
      setPost(res.data);
    });

    axios({
      method: 'get',
      url: `http://localhost:4400/user/${post.authorId}`,
    }).then((res) => setAuthor(res.data));
  }, [id, post.authorId]);

  return <Layout content={<Post post={post} author={author} />} />;
};
