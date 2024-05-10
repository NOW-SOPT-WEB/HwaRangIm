import { createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import MyPage from "./pages/MyPage/MyPage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/main/:memberId",
    element: <Home />,
  },
  {
    path: "/mypage/:memberId",
    element: <MyPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
