export enum AppBridgeMessageType {
  OPEN_CAMERA = "openCamera",
  OPEN_GALLERY = "openGallery",
  SHARE = "share",
  CREATE_REVIEW = "createReview",
  COPY = "copy",
  RECEIVE_SCAN_RESULT = "receiveScanResult",
  RECEIVE_GENERATED_REVIEW = "receiveGeneratedReview",
}

export type AppBridgeMessage =
  | OpenCameraMessage
  | OpenGalleryMessage
  | ShareMessage
  | CreateReviewMessage
  | CopyMessage
  | ReceiveScanResultMessage
  | ReceiveGeneratedReviewMessage;

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
  payload: {
    shareText: string;
  };
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

export interface ReceiveScanResultMessage {
  type: AppBridgeMessageType.RECEIVE_SCAN_RESULT;
  payload: {
    result: string;
  };
}

export interface ReceiveGeneratedReviewMessage {
  type: AppBridgeMessageType.RECEIVE_GENERATED_REVIEW;
  payload: {
    result: string;
  };
}
