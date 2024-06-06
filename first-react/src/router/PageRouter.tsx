import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext";
import { Provider } from "react-redux";

import Home from "../pages/home";
import Settings from "../pages/settings";
import AuthCookie from "../pages/cookies-page";
import Counter from "../pages/counter";
import { store } from "../store/store";
import Users from "../pages/users";
import UsersPage from "../pages/user-page";
import Register from "../pages/register";

const PageRouter = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
    <BrowserRouter>
   <Routes>
       <Route element={<Home/>} path="/"/>
       <Route element={<AuthCookie/>} path="/auth-cookie"/>
       <Route element={<Settings/>} path="/settings"/>
       <Route element={<Counter/>} path="/counter"/>
       <Route element={<Users/>} path="/users"/>
       <Route element={<UsersPage/>} path="/user-page"/>
       <Route element={<Register/>} path="/register"/>
   </Routes>
   </BrowserRouter>
  </ThemeProvider>
    </Provider>
  )
};

export default PageRouter;