import Homepage from "./pages/homepage/homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, RequireAuth } from "./pages/layout/Layout";
import Listpage from "./pages/listpage/Listpage";
import Singlepage from "./pages/singlepage/Singlepage";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import ProfileUpdate from "./pages/profileUpdatePage/ProfileUpdate";
import NewPost from "./pages/newPostPage/NewPost";
import {
  listPageLoader,
  profilePageLoader,
  singlePageLoader,
} from "./lib/loaders";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/list",
          element: <Listpage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <Singlepage />,
          loader: singlePageLoader,
        },

        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
          loader: profilePageLoader,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdate />,
        },
        {
          path: "/add",
          element: <NewPost />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
