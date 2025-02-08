declare module "*.module.scss" {
  const classes: { [className: string]: string };
  export default classes;
}

export {};

type MessageHandler<T = void> = {
  postMessage: (message?: T) => void;
};

declare global {
  interface Window {
    response?: {
      receiveScanResult: (jsonData: string) => void;
    };
    webkit?: {
      messageHandlers: {
        openCamera: MessageHandler<string>;
        openGallery: MessageHandler<string>;
        share: MessageHandler<string>;
        createReview: MessageHandler<string>;
        copy: MessageHandler<string>;
      };
    };
    AndroidBridge?: {
      openCamera: (request: string) => void;
      openGallery: (request: string) => void;
      share: (request: string) => void;
      createReview: (json: string) => void;
      copy: (json: string) => void;
    };
  }
}
