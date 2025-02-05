import { AppBridgeMessageType } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";
import type { AppBridgeMessage } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";

const iosHandlers = {
  [AppBridgeMessageType.OPEN_CAMERA]: () => window.webkit?.messageHandlers.openCamera.postMessage(),
  [AppBridgeMessageType.OPEN_GALLERY]: () =>
    window.webkit?.messageHandlers.openGallery.postMessage(),
  [AppBridgeMessageType.SHARE]: () => window.webkit?.messageHandlers.share.postMessage(),
  [AppBridgeMessageType.CREATE_REVIEW]: (message: { payload: { json: string } }) =>
    window.webkit?.messageHandlers.createReview.postMessage(message.payload.json),
  [AppBridgeMessageType.COPY]: (message: { payload: { json: string } }) =>
    window.webkit?.messageHandlers.copy.postMessage(message.payload.json),
};

const androidHandlers = {
  [AppBridgeMessageType.OPEN_CAMERA]: () => window.AndroidBridge?.openCamera(),
  [AppBridgeMessageType.OPEN_GALLERY]: () => window.AndroidBridge?.openGallery(),
  [AppBridgeMessageType.SHARE]: () => window.AndroidBridge?.share(),
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
