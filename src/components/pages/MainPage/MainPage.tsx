import { ReactElement } from 'react';
import { Popover } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { Layout } from '../../templates';

export const MainPage = (): ReactElement => {
  return (
    <Layout
      content={
        <div className="relative overflow-hidden bg-gray-50">
          <div
            className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
            aria-hidden="true"
          >
            <div className="relative h-full mx-auto max-w-7xl">
              <svg
                className="absolute transform right-full translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
                width={404}
                height={784}
                fill="none"
                viewBox="0 0 404 784"
              >
                <defs>
                  <pattern
                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={784}
                  fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                />
              </svg>
              <svg
                className="absolute transform left-full -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
                width={404}
                height={784}
                fill="none"
                viewBox="0 0 404 784"
              >
                <defs>
                  <pattern
                    id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={784}
                  fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
                />
              </svg>
            </div>
          </div>

          <div className="relative pt-6 pb-16 sm:pb-24">
            <Popover>
              <div className="px-4 mx-auto max-w-7xl sm:px-6">
                <nav
                  className="relative flex items-center justify-between sm:h-10 md:justify-center"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <div className="flex items-center -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md bg-gray-50 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="w-6 h-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </Popover>

            <main className="px-4 mx-auto mt-16 max-w-7xl sm:mt-24">
              <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">React - Prisma</span>
                  <span className="block text-indigo-600 xl:inline">
                    Full Stack Demo
                  </span>
                </h1>
                <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Learn how to setup a Prisma back-end with a GraphQL Yoga
                  server! New technologies are often challenging but can be very
                  fun and insightful to your journey of becoming a better
                  developer.
                </p>
                <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
                  <div className="rounded-md shadow">
                    <Link
                      to="/posts"
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      }
    />
  );
};
