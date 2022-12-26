import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NotFound from "./pages/404.js";
import Posts from "./pages/posts";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import PostDetails from './pages/postDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
    errorElement: <NotFound />,
  },
  {
    path: "posts",
    element: <Posts />,
  },
  {
    path: "post/:postId",
    element: <PostDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} >
     
    </RouterProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
