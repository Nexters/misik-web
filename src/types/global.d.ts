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
    webkit?: {
      messageHandlers: {
        openCamera: MessageHandler;
        openGallery: MessageHandler;
        share: MessageHandler;
        createReview: MessageHandler<string>;
        copy: MessageHandler<string>;
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
