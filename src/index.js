import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { Loading } from './components';

const App = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./App')), 1000);
  });
});

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);
