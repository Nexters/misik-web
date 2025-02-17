import { AppBridgeMessageType } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";
import type { AppBridgeMessage } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";

const iosHandlers = {
  [AppBridgeMessageType.OPEN_CAMERA]: (message: string) =>
    window.webkit?.messageHandlers.openCamera.postMessage(message),
  [AppBridgeMessageType.OPEN_GALLERY]: (message: string) =>
    window.webkit?.messageHandlers.openGallery.postMessage(message),
  [AppBridgeMessageType.SHARE]: (message: { payload: { shareText: string } }) =>
    window.webkit?.messageHandlers.share.postMessage(message.payload),
  [AppBridgeMessageType.CREATE_REVIEW]: (message: {
    payload: { ocrText: string; hashTag: string[]; reviewStyle: string };
  }) => window.webkit?.messageHandlers.createReview.postMessage(message.payload),
  [AppBridgeMessageType.COPY]: (message: { payload: { review: string } }) =>
    window.webkit?.messageHandlers.copy.postMessage(message.payload),
  [AppBridgeMessageType.RECEIVE_SCAN_RESULT]: (message: { payload: { result: string } }) =>
    window.response?.receiveScanResult(message.payload.result),
  [AppBridgeMessageType.RECEIVE_GENERATED_REVIEW]: (message: { payload: { result: string } }) =>
    window.response?.receiveGeneratedReview(message.payload.result),
};

const androidHandlers = {
  [AppBridgeMessageType.OPEN_CAMERA]: () => window.AndroidBridge?.openCamera(),
  [AppBridgeMessageType.OPEN_GALLERY]: () => window.AndroidBridge?.openGallery(),
  [AppBridgeMessageType.SHARE]: (message: { payload: { shareText: string } }) =>
    window.AndroidBridge?.share(JSON.stringify(message.payload)),
  [AppBridgeMessageType.CREATE_REVIEW]: (message: {
    payload: { ocrText: string; hashTag: string[]; reviewStyle: string };
  }) => window.AndroidBridge?.createReview(JSON.stringify(message.payload)),
  [AppBridgeMessageType.COPY]: (message: { payload: { review: string } }) =>
    window.AndroidBridge?.copy(JSON.stringify(message.payload)),
  [AppBridgeMessageType.RECEIVE_SCAN_RESULT]: (message: { payload: { result: string } }) =>
    window.response?.receiveScanResult(message.payload.result),
  [AppBridgeMessageType.RECEIVE_GENERATED_REVIEW]: (message: { payload: { result: string } }) =>
    window.response?.receiveGeneratedReview(message.payload.result),
};

export function convertToIOSAppBridge(message: AppBridgeMessage) {
  const handler = iosHandlers[message.type];

  if (handler) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handler(message as any);
  } else {
    console.warn("Unhandled message type:", message.type);
  }
}

export function convertToAndroidAppBridge(message: AppBridgeMessage) {
  const handler = androidHandlers[message.type];

  if (handler) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handler(message as any);
  } else {
    console.warn("Unhandled message type:", message.type);
  }
}
