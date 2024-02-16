// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.tsx';
import './output.css';
import 'tailwindcss/tailwind.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages
import Hero from './routes/pages/Hero.tsx';
import UserRepos from './routes/pages/UserRepos.tsx'; // Importe o componente UserRepos

const routerPages = createBrowserRouter([
  {
    path: '/',
    element: < App />,
    children: [
      {
        path: '/',
        element: <Hero />
      },
      {
        path: '/userRepos/:username', // Adicione a rota para UserRepos
        element: <UserRepos />
      }
    ]
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={routerPages}/>
  </React.StrictMode>,
  document.getElementById('root')
);
