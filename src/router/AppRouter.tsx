import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "@/App";

import { PATH } from "@/constants/path";

import HomePage from "@/pages/HomePage";
import ReceiptEditPage from "@/pages/ReceiptEditPage";
import RecognitionFailPage from "@/pages/RecognitionFailPage";
import ReviewResultPage from "@/pages/ReviewResultPage";
import SelectStylePage from "@/pages/SelectStylePage";
import SelectTagPage from "@/pages/SelectTagPage";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: PATH.HOME,
      element: <App />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: PATH.RECOGNITION_FAIL,
          element: <RecognitionFailPage />,
        },
        {
          path: PATH.RECEIPT_EDIT,
          element: <ReceiptEditPage />,
        },
        {
          path: PATH.SELECT_TAG,
          element: <SelectTagPage />,
        },
        {
          path: PATH.SELECT_STYLE,
          element: <SelectStylePage />,
        },
        {
          path: PATH.REVIEW_RESULT,
          element: <ReviewResultPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
