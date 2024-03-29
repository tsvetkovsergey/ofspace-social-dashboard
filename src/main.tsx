import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import './index.css';

import './i18n';

// Pages
import Dashboard from './pages/Dashboard';
import Schedule from './pages/Schedule';
import ErrorPage from './pages/404';
import Team from './pages/Team';
import Geography from './pages/Geography';
import List from './pages/List';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404</div>,
    children: [
      { index: true, element: <Dashboard /> },
      { path: '/schedule', element: <Schedule /> },
      { path: '/list', element: <List /> },
      { path: 'team', element: <Team /> },
      { path: 'geography', element: <Geography /> },
      {
        path: '/*',
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
