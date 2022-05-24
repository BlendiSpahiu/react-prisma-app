import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { PostInputs } from '../../../interfaces/PostInputs.types';
import { PostFormValidatorSchema } from '../../../validators/AddPost.validator';
import { AnnotationIcon } from '@heroicons/react/outline';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const PostForm = (): ReactElement => {
  // hooks
  const navigate = useNavigate();

  // hook form
  const { register, handleSubmit } = useForm<PostInputs>({
    mode: 'onChange',
    resolver: joiResolver(PostFormValidatorSchema()),
  });

  // handlers
  const handleSubmitPost = (data: PostInputs) => {
    axios({
      method: 'post',
      url: ' http://localhost:4400/insert-post',
      data: {
        title: data.title,
        content: data.content,
        published: false,
        authorName: data.authorName,
        authorEmail: data.authorEmail,
      },
    });
    navigate('/posts');
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitPost)}
      className="mt-24 space-y-8 divide-y divide-gray-200"
    >
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div>
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Add a post
            </h3>
          </div>

          <div className="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Title
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="flex max-w-lg rounded-md shadow-sm">
                  <input
                    {...register('title')}
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="title"
                    className="block w-full min-w-0 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Content
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea
                  {...register('content')}
                  id="content"
                  name="content"
                  rows={3}
                  className="block w-full max-w-lg p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  defaultValue={''}
                />
                <p className="mt-2 text-sm text-gray-500">
                  Write a post description.
                </p>
              </div>
            </div>

            <div className="flex sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 "
              >
                Author
              </label>
              <div className="mt-1  ml-[180px] sm:mt-0">
                <div className="space-y-1 text-center">
                  <div className="flex flex-col items-start space-x-2 space-y-2 text-sm text-gray-600">
                    <label
                      htmlFor="title"
                      className="block px-2 py-2 text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="flex max-w-lg rounded-md shadow-sm">
                        <input
                          {...register('authorName')}
                          type="text"
                          name="authorName"
                          id="authorName"
                          autoComplete="authorName"
                          className="block w-[480px] min-w-0 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
                        />
                      </div>
                    </div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 "
                    >
                      Email
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="flex max-w-lg rounded-md shadow-sm">
                        <input
                          {...register('authorEmail')}
                          type="text"
                          name="authorEmail"
                          id="authorEmail"
                          autoComplete="authorEmail"
                          className="block w-[480px] min-w-0 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="inline-flex w-[25%]  mt-10 justify-center items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-gray-600 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Post
        <AnnotationIcon className="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
};
