import ReactDOM from 'react-dom/client';

import {RouterProvider} from 'react-router-dom';
import {Provider} from 'react-redux';

import router from './router/router.tsx'

import {store} from './store/store.ts';

import './style/style.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>

)
