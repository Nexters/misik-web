import { create } from "zustand";

interface ReviewStyle {
  name: string;
  image: string;
}

interface CreateReviewData {
  ocrText: string;
  hashTag: string[];
  reviewStyle: ReviewStyle;
}

interface CreateReviewDataStore {
  createReviewData: CreateReviewData;
  setOcrText: (ocrText: string) => void;
  setHashTag: (hashTag: string[]) => void;
  setReviewStyle: (reviewStyle: ReviewStyle) => void;
}

export const CREATE_REVIEW_DATA = {
  ocrText: "",
  hashTag: [],
  reviewStyle: {
    name: "",
    image: "",
  },
};

export const useCreateReviewStore = create<CreateReviewDataStore>((set) => ({
  createReviewData: { ...CREATE_REVIEW_DATA },
  setOcrText: (ocrText: string) =>
    set((state) => ({
      createReviewData: { ...state.createReviewData, ocrText },
    })),
  setHashTag: (hashTag: string[]) =>
    set((state) => ({
      createReviewData: { ...state.createReviewData, hashTag },
    })),
  setReviewStyle: (reviewStyle: ReviewStyle) =>
    set((state) => ({
      createReviewData: { ...state.createReviewData, reviewStyle },
    })),
}));
