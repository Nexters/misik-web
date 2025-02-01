import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "@/App";

import HomePage from "@/pages/HomePage";
import ReceiptEditPage from "@/pages/ReceiptEditPage";
import RecognitionFailPage from "@/pages/RecognitionFailPage";
import SelectTagPage from "@/pages/SelectTagPage";

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
        {
          path: "/receipt-edit",
          element: <ReceiptEditPage />,
        },
        {
          path: "/select-tag",
          element: <SelectTagPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
