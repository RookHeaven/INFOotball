import App from '../components/app/App.js';
import Page404 from '../pages/page404/Page404.tsx';

import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';

import {clubLoader} from './loaders/loaders.ts';

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/'
           element={<App/>}
           errorElement={<Page404/>}>
      <Route path=''
             lazy={(async () => {const { MainPage } = await import("../pages/mainPage/MainPage.tsx")
        return { Component: MainPage }})}/>
      <Route path='/clubs'
             lazy={(async () => {const { FavoriteClubsPage } = await import("../pages/favoriteClubsPage/FavoriteClubsPage.tsx")
        return { Component: FavoriteClubsPage }})}/>
      <Route path='/clubs/:id'
             loader={clubLoader}
             lazy={(async () => {const { ClubPage } = await import("../pages/clubPage/ClubPage.tsx")
        return { Component: ClubPage }})}/>
    </Route>
  )
)

export default router;
