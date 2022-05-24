import { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../../Posts/Post';
import { Post as PostModel } from '../../../models/Post';
import { Layout } from '../../templates';
import axios from 'axios';

export const PostPage = (): ReactElement => {
  // local state
  const [post, setPost] = useState<PostModel>({
    id: 0,
    published: false,
    title: '',
    content: '',
    authorEmail: '',
    authorName: '',
  });

  // hooks
  const { id } = useParams();

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:4400/post/${id}`,
    }).then((res) => {
      setPost(res.data);
    });
  }, [id]);

  return <Layout content={<Post post={post} />} />;
};
