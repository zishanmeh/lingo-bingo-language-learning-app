import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import StartLearnLayout from "../layouts/StartLearnLayout";
import LessonPage from "../pages/LessonPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Root from "../pages/Root";
import PrivateRouter from "./PrivateRouter";
import ProfilePage from "../pages/ProfilePage";
import UpdateProfile from "../pages/UpdateProfile";
import Errorpage from "../pages/Errorpage";
import Tutorial from "../pages/Tutorial";
import ForgetPassword from "../pages/ForgetPassword";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
      },
      {
        path: "/learn",
        element: <StartLearnLayout></StartLearnLayout>,
      },
      {
        path: "/lesson/:lesson_no",
        loader: async () => {
          const response = await fetch("/portuguese_vocabulary.json");
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json(); // Return the parsed JSON
        },
        element: (
          <PrivateRouter>
            <LessonPage></LessonPage>
          </PrivateRouter>
        ),
      },
      {
        path: "/tutorials",
        element: (
          <PrivateRouter>
            <Tutorial></Tutorial>
          </PrivateRouter>
        ),
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <ProfilePage></ProfilePage>
          </PrivateRouter>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRouter>
            <UpdateProfile></UpdateProfile>
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default Router;
