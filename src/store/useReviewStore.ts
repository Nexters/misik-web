import { create } from "zustand";

interface CreateReviewData {
  ocrText: string;
  hashTag: string[];
  reviewStyle: string;
}

interface CreateReviewDataStore {
  createReviewData: CreateReviewData;
  setOcrText: (ocrText: string) => void;
  setHashTag: (hashTag: string[]) => void;
  setReviewStyle: (reviewStyle: string) => void;
}

export const CREATE_REVIEW_DATA = {
  ocrText: "",
  hashTag: [],
  reviewStyle: "FRIENDLY",
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
  setReviewStyle: (reviewStyle: string) =>
    set((state) => ({
      createReviewData: { ...state.createReviewData, reviewStyle },
    })),
}));
