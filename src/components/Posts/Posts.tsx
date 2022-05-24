import { PlusIcon } from '@heroicons/react/outline';
import axios from 'axios';
import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Post } from '../../models/Post';
import { SinglePost } from './SinglePost';

export const Posts = (): ReactElement => {
  // local state
  const [posts, setPosts] = useState<Post[]>([]);

  // hooks
  const navigate = useNavigate();

  // handlers
  const getData = async () => {
    await axios({
      method: 'get',
      url: 'http://localhost:4400/posts',
    }).then((res) => setPosts(res.data));
  };

  // useEffect
  useEffect(() => {
    getData();
  }, []);

  const handleAddForm = () => navigate('/add-post');

  return (
    <>
      <div className="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Posts
            </h2>
            <p className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
          </div>
          <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
            {posts &&
              posts.map((post) => <SinglePost key={post.id} post={post} />)}
          </div>
        </div>
      </div>
      {posts.length === 0 && (
        <div className="text-center">
          <svg
            className="w-12 h-12 mx-auto text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No posts</h3>
          <p className="mt-1 text-sm text-gray-500">
            Get started by creating a new posts.
          </p>
          <div className="mt-6">
            <button
              onClick={handleAddForm}
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <PlusIcon className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" />
              New Post
            </button>
          </div>
        </div>
      )}
    </>
  );
};
