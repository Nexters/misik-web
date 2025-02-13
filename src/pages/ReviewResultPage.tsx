import { useEffect, useState } from "react";

import CreateReviewLoading from "@/components/CreateReviewLoading/CreateReviewLoading";
import ReviewResult from "@/components/ReviewResult/ReviewResult";

// 로딩 코드 api 연결 후 삭제
export default function ReviewResultPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <CreateReviewLoading />;
  }

  return <>{!isLoading && <ReviewResult />}</>;
}
