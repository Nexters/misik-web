export enum WebBridgeMessageType {
  RECEIVE_SCAN_RESULT = "RECEIVE_SCAN_RESULT",
}

export type WebBridgeMessage = ReceiveScanResultMessage;

export interface ReceiveScanResultMessage {
  type: WebBridgeMessageType.RECEIVE_SCAN_RESULT;
}
