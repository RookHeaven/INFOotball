import ReactDOM from 'react-dom/client';

import {RouterProvider} from 'react-router-dom';
import {Provider} from 'react-redux';

import router from './router/router.tsx'

import {persistor, store} from './store/store.ts';
import {PersistGate} from 'redux-persist/integration/react';

import './style/style.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router}/>
    </PersistGate>
  </Provider>

)
