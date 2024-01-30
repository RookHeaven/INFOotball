import ReactDOM from 'react-dom/client';

import router from './router/router.tsx'
import {RouterProvider} from "react-router-dom";

import './style/style.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
