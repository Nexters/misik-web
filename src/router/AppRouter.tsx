import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "@/App";

import { PATH } from "@/constants/path";

import CreateReviewFailPage from "@/pages/CreateReviewFailPage/CreateReviewFailPage";
import DownloadPage from "@/pages/DownloadPage/DownloadPage";
import HomePage from "@/pages/HomePage/HomePage";
import LoadingPage from "@/pages/LoadingPage/LoadingPage";
import ReceiptEditPage from "@/pages/ReceiptEditPage/ReceiptEditPage";
import ReceiptInputPage from "@/pages/ReceiptInputPage/ReceiptInputPage";
import RecognitionFailPage from "@/pages/RecognitionFailPage/RecognitionFailPage";
import ReviewResultPage from "@/pages/ReviewResultPage/ReviewResultPage";
import SelectStylePage from "@/pages/SelectStylePage/SelectStylePage";
import SelectTagPage from "@/pages/SelectTagPage/SelectTagPage";

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
          path: PATH.RECEIPT_INPUT,
          element: <ReceiptInputPage />,
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
          path: PATH.LOADING,
          element: <LoadingPage />,
        },
        {
          path: PATH.REVIEW_RESULT,
          element: <ReviewResultPage />,
        },
        { path: PATH.CREATE_REVIEW_FAIL, element: <CreateReviewFailPage /> },
        { path: PATH.APP_DOWNLOAD, element: <DownloadPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
