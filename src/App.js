import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import PostListPage from './components/pages/posts/PostListPage';
import PostCreationPage from './components/pages/posts/PostCreationPage';
import PostDetailPage from './components/pages/posts/PostDetailPage';
import PostNotFoundPage from './components/pages/posts/PostNotFoundPage';
import Application from './components/pages/application/Application';

function App() {
  return (
    <Routes>
      <Route path='/posts' element={<Application />}>
        <Route index element={<PostListPage />} />
        <Route path='new' element={<PostCreationPage />} />
        <Route path='not-found' element={<PostNotFoundPage />} />
        <Route path=':id' element={<PostDetailPage />} />
      </Route>
      <Route path='*' element={<Navigate to='posts' replace />} />
    </Routes>
  );
}

export default App;
