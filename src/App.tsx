import { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  MainPage,
  PostPage,
  PostsPage,
  AddPostPage,
} from './components/pages/index';

const App = (): ReactElement => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/post/*" element={<PostPage />}>
        <Route path=":id" element={<PostPage />} />
      </Route>
      <Route path="/add-post" element={<AddPostPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
