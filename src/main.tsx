import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './components/app/App.tsx';
import router from './router/router.tsx'
import {RouterProvider} from "react-router-dom";

import './style/style.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
