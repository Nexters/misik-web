import { create } from "zustand";

interface GenerateReviewStoreProps {
  generateReviewData: string;
  setGenerateReviewData: (review: string) => void;
}

export const useGenerateReviewStore = create<GenerateReviewStoreProps>((set) => ({
  generateReviewData: "",
  setGenerateReviewData: (review: string) => set({ generateReviewData: review }),
}));
