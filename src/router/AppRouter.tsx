import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "@/App";

import HomePage from "@/pages/HomePage";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
