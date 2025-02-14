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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      receiveScanResult: (jsonData: any) => void;
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
      createReview: (json: string) => void;
      copy: (json: string) => void;
    };
  }
}
