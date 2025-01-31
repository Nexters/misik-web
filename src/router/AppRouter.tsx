import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "@/App";

import HomePage from "@/pages/HomePage";
import RecognitionFailPage from "@/pages/RecognitionFailPage";

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
        {
          path: "/recognition-fail",
          element: <RecognitionFailPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
