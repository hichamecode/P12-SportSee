import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Community from "../pages/Community";
import Error from "../pages/Error";

import UserProviderFromMock from "../services/UserProviderFromMock";
import UserProviderFromApi from "../services/UserProviderFromApi";

const Router = () => {

    return(
        <Routes>
          <Route path='/' element={<Home 
          userProvider={new UserProviderFromApi()}/>} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/community' element={<Community />} />
          <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default Router;

