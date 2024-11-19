import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import StartLearnLayout from "../layouts/StartLearnLayout";
import LessonPage from "../pages/LessonPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Root from "../pages/Root";
import PrivateRouter from "./PrivateRouter";
import ProfilePage from "../pages/ProfilePage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/profile",
        element: <ProfilePage></ProfilePage>,
      },
      {
        path: "/update-profile",
        element: <ProfilePage></ProfilePage>,
      },
    ],
  },
]);

export default Router;
