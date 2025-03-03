declare module "*.module.scss" {
  const classes: { [className: string]: string };
  export default classes;
}

export {};

type MessageHandler<T = void> = {
  postMessage: (message?: T) => void;
};

declare global {
  interface ShareTextPayload {
    shareText: string;
  }
  interface CreateReviewPayload {
    ocrText: string;
    hashTag: string[];
    reviewStyle: string;
  }

  interface CopyMessagePayload {
    review: string;
  }

  interface ScanResultPayload {
    parsed: Array<{ key: string; value: string }>;
  }
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
    response?: {
      receiveScanResult: (jsonData: string) => void;
      receiveGeneratedReview: (jsonData: string) => void;
    };
    webkit?: {
      messageHandlers: {
        openCamera: MessageHandler<string>;
        openGallery: MessageHandler<string>;
        share: MessageHandler<ShareTextPayload>;
        createReview: MessageHandler<CreateReviewPayload>;
        copy: MessageHandler<CopyMessagePayload>;
      };
    };
    AndroidBridge?: {
      openCamera: () => void;
      openGallery: () => void;
      share: (json: string) => void;
      createReview: (json: string) => void;
      copy: (json: string) => void;
    };
  }
}
