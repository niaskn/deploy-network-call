import{BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing-page";
import AuthPage from "./pages/auth-page";
import StatePage from "./pages/state-page";
import TodoPage from "./pages/todo-page";
import HookPage from "./pages/hook-page"
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<LandingPage/>} path="/auth-page/landing-page/:id" />
      <Route element={<AuthPage/>} path="/auth-page" />
      <Route element={<StatePage/>} path="/state-page" />
      <Route element={<TodoPage/>} path="/todo" />
      <Route element={<HookPage/>} path="/hook-page"/>
    </Routes>
    </BrowserRouter>
  )
}

export default App