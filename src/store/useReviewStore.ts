import { create } from "zustand";

interface CreateReviewData {
  ocrText: string;
  hashTag: string[];
  reviewStyle: string;
  tagList: string[];
}

interface CreateReviewDataStore {
  createReviewData: CreateReviewData;
  setOcrText: (ocrText: string) => void;
  setHashTag: (hashTag: string[]) => void;
  setReviewStyle: (reviewStyle: string) => void;
  setTagList: (tagList: string[]) => void;
  resetCreateReviewData: () => void;
}

export const CREATE_REVIEW_DATA = {
  ocrText: "",
  hashTag: [],
  reviewStyle: "FRIENDLY",
  tagList: [
    // 초기 태그 리스트
    "음식이 맛있어요",
    "양이 많아요",
    "가성비가 좋아요",
    "메뉴 구성이 알차요",
    "매장이 넓어요",
    "단체모임 하기 좋아요",
    "뷰가 좋아요",
    "아늑해요",
    "분위기가 좋아요",
    "친절해요",
    "매장이 청결해요",
  ],
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
  setTagList: (tagList: string[]) =>
    set((state) => ({
      createReviewData: { ...state.createReviewData, tagList },
    })),
  resetCreateReviewData: () => set({ createReviewData: { ...CREATE_REVIEW_DATA } }),
}));
