import { TrashIcon } from '@heroicons/react/outline';
import axios from 'axios';
import { ReactElement, useEffect, useState } from 'react';
import { NavLink as Link, useNavigate } from 'react-router-dom';
import { Author } from '../../models/Author';
import { Modal } from '../Modal/Modal';
import { PostProps } from './Post.props';

export const SinglePost = ({ post }: PostProps): ReactElement => {
  // local state
  const [author, setAuthor] = useState<Author>();
  const [open, setOpen] = useState<boolean>(false);

  // hooks
  const navigate = useNavigate();

  // handlers
  const handleDeletePost = () => {
    axios({
      method: 'delete',
      url: `http://localhost:4400/delete-post/${post.id}`,
    });
    navigate('/posts');
  };

  const handleModal = () => {
    setOpen(!open);
    navigate({ search: `delete/${post.id}` }, { replace: true });
  };

  // use effect
  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:4400/user/${post.authorId}`,
    }).then((res) => setAuthor(res.data));
  }, [post.authorId]);

  return (
    <>
      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div className="flex flex-col justify-between flex-1 p-6 bg-white">
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-indigo-600">
                <Link to={`/post/${post.id}`} className="hover:underline">
                  {post.title}
                </Link>
              </p>
              <button onClick={handleModal}>
                <TrashIcon className="w-6 h-6 text-red-400" />
              </button>
            </div>

            <Link to={`/post/${post.id}`} className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">
                {post.title}
              </p>
              <p className="mt-3 text-base text-gray-500">{post?.content}</p>
            </Link>

            <p className="mt-3 font-semibold text-indigo-600">{author?.name}</p>
          </div>
        </div>
      </div>

      <Modal open={open} setOpen={setOpen} onClick={handleDeletePost} />
    </>
  );
};
