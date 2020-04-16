import React, { lazy, Suspense, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { Loading } from './components';

const App = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./App')), 0);
  });
});

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </StrictMode>,
  document.getElementById('root'),
);
