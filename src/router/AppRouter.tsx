import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "@/App";

import CreateReviewLoadingPage from "@/pages/CreateReviewLoadingPage/CreateReviewLoadingPage";
import HomePage from "@/pages/HomePage";
import ReceiptEditPage from "@/pages/ReceiptEditPage";
import ReceiptResultPage from "@/pages/ReceiptResultPage";
import RecognitionFailPage from "@/pages/RecognitionFailPage";
import SelectStylePage from "@/pages/SelectStylePage";
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
        {
          path: "/select-style",
          element: <SelectStylePage />,
        },
        {
          path: "/create-review-loading",
          element: <CreateReviewLoadingPage />,
        },
        {
          path: "/receipt-result",
          element: <ReceiptResultPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
