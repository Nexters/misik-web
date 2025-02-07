import { AppBridgeMessageType } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";
import type { AppBridgeMessage } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";

const iosHandlers = {
  [AppBridgeMessageType.OPEN_CAMERA]: (message: string) =>
    window.webkit?.messageHandlers.openCamera.postMessage(message),
  [AppBridgeMessageType.OPEN_GALLERY]: (message: string) =>
    window.webkit?.messageHandlers.openGallery.postMessage(message),
  [AppBridgeMessageType.SHARE]: (message: string) =>
    window.webkit?.messageHandlers.share.postMessage(message),
  [AppBridgeMessageType.CREATE_REVIEW]: (message: { payload: { json: string } }) =>
    window.webkit?.messageHandlers.createReview.postMessage(message.payload.json),
  [AppBridgeMessageType.COPY]: (message: { payload: { json: string } }) =>
    window.webkit?.messageHandlers.copy.postMessage(message.payload.json),
};

const androidHandlers = {
  [AppBridgeMessageType.OPEN_CAMERA]: (message: string) =>
    window.AndroidBridge?.openCamera(message),
  [AppBridgeMessageType.OPEN_GALLERY]: (message: string) =>
    window.AndroidBridge?.openGallery(message),
  [AppBridgeMessageType.SHARE]: (message: string) => window.AndroidBridge?.share(message),
  [AppBridgeMessageType.CREATE_REVIEW]: (message: { payload: { json: string } }) =>
    window.AndroidBridge?.createReview(message.payload.json),
  [AppBridgeMessageType.COPY]: (message: { payload: { json: string } }) =>
    window.AndroidBridge?.copy(message.payload.json),
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
