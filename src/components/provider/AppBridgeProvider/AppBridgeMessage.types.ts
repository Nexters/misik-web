export enum AppBridgeMessageType {
  OPEN_CAMERA = "openCamera",
  OPEN_GALLERY = "openGallery",
  SHARE = "share",
  CREATE_REVIEW = "createReview",
  COPY = "copy",
}

export type AppBridgeMessage =
  | OpenCameraMessage
  | OpenGalleryMessage
  | ShareMessage
  | CreateReviewMessage
  | CopyMessage;

export interface OpenCameraMessage {
  type: AppBridgeMessageType.OPEN_CAMERA;
  payload: "";
}

export interface OpenGalleryMessage {
  type: AppBridgeMessageType.OPEN_GALLERY;
  payload: "";
}

export interface ShareMessage {
  type: AppBridgeMessageType.SHARE;
  payload: "";
}

export interface CreateReviewMessage {
  type: AppBridgeMessageType.CREATE_REVIEW;
  payload: {
    ocrText: string;
    hashTag: string[];
    reviewStyle: string;
  };
}

export interface CopyMessage {
  type: AppBridgeMessageType.COPY;
  payload: {
    review: string;
  };
}
