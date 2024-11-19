import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import StartLearnLayout from "../layouts/StartLearnLayout";
import LessonPage from "../pages/LessonPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Root from "../pages/Root";

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
        element: <LessonPage></LessonPage>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default Router;
