import { useNavigate } from "react-router-dom";

import { PATH } from "@/constants/path";

export const useRoute = () => {
  const navigate = useNavigate();

  const routes = {
    navigateToHome: () => navigate(PATH.HOME),
    navigateToBack: () => navigate(-1),
    navigateToReceiptEdit: () => navigate(PATH.RECEIPT_EDIT),
    navigateToRecognitionFail: () => navigate(PATH.RECOGNITION_FAIL),
    navigateToReviewResult: () => navigate(PATH.REVIEW_RESULT),
    navigateToSelectStyle: () => navigate(PATH.SELECT_STYLE),
    navigateToSelectTag: () => navigate(PATH.SELECT_TAG),
  };

  return routes;
};
