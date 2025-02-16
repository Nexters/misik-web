import { useNavigate } from "react-router-dom";

import { PATH } from "@/constants/path";

export const useRoute = () => {
  const navigate = useNavigate();

  const routes = {
    navigateToHome: () => navigate(PATH.HOME),
    navigateToBack: () => navigate(-1),
    navigateToReceiptEdit: () => navigate(PATH.RECEIPT_EDIT),
    navgateToReceiptInput: () => navigate(PATH.RECEIPT_INPUT),
    navigateToRecognitionFail: () => navigate(PATH.RECOGNITION_FAIL),
    navigateToSelectStyle: () => navigate(PATH.SELECT_STYLE),
    navigateToSelectTag: () => navigate(PATH.SELECT_TAG),
    navigateToReviewResult: () => navigate(PATH.REVIEW_RESULT),
    navigateToLoading: () => navigate(PATH.LOADING),
    navigateToCreateReviewFail: () => navigate(PATH.CREATE_REVIEW_FAIL),
  };

  return routes;
};
