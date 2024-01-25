import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "../components/app/App.js";
import MainPage from "../pages/MainPage.tsx";
import Page404 from "../pages/page404/Page404.tsx";

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} errorElement={<Page404/>}>
      <Route path='' element={<MainPage/>}/>
    </Route>
  )
)

export default router;
