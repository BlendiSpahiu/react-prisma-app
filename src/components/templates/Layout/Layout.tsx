import { ReactElement } from 'react';
import { Navbar } from '../../Navbar/Navbar';
import { LayoutProps } from './Layout.props';

export const Layout = ({ content }: LayoutProps): ReactElement => {
  return (
    <>
      <Navbar />
      <main className="mx-32">{content}</main>
    </>
  );
};
