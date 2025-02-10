declare module "*.module.scss" {
  const classes: { [className: string]: string };
  export default classes;
}

export {};

type MessageHandler<T = void> = {
  postMessage: (message?: T) => void;
};

declare global {
  interface CreateReviewPayload {
    ocrText: string;
    hashTag: string[];
    reviewStyle: string;
  }

  interface CopyMessagePayload {
    review: string;
  }
  interface Window {
    response?: {
      receiveScanResult: (jsonData: string) => void;
      receiveGeneratedReview: (jsonData: string) => void;
    };
    webkit?: {
      messageHandlers: {
        openCamera: MessageHandler<string>;
        openGallery: MessageHandler<string>;
        share: MessageHandler<string>;
        createReview: MessageHandler<CreateReviewPayload>;
        copy: MessageHandler<CopyMessagePayload>;
      };
    };
    AndroidBridge?: {
      openCamera: () => void;
      openGallery: () => void;
      share: () => void;
      createReview: (json: CreateReviewPayload) => void;
      copy: (json: CopyMessagePayload) => void;
    };
  }
}
