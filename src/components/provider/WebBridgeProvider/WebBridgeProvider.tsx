import type { ReactNode } from "react";
import { createContext, useContext, useEffect } from "react";

import { useScanDataStore } from "@/store/useScanDataStore";

export enum WebBridgeMessageType {
  RECEIVE_SCAN_RESULT = "receiveScanResult",
}

type WebBridgeMessage = ScanResultMessage;

interface ScanResultMessage {
  type: string;
  payload: { [key: string]: string }[];
}

interface WebBridge {
  receive: (message: WebBridgeMessage) => void;
}

interface WebBridgeProviderProps {
  children: ReactNode;
}

export const WebBridgeContext = createContext<null | WebBridge>(null);

export function WebBridgeProvider({ children }: WebBridgeProviderProps) {
  const { setScanData } = useScanDataStore();

  const receive = (message: WebBridgeMessage) => {
    if (message.type === WebBridgeMessageType.RECEIVE_SCAN_RESULT) {
      setScanData(message.payload || []);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.response = {
        receiveScanResult: (jsonData: string) => {
          try {
            const data = JSON.parse(jsonData);
            setScanData(data);
          } catch (error) {
            console.error("Invalid JSON data:", error);
          }
        },
      };
    }
  }, []);

  return <WebBridgeContext.Provider value={{ receive }}>{children}</WebBridgeContext.Provider>;
}
// const receive = (message: WebBridgeMessage) => {
//   try {
//     if (typeof window !== "undefined" && window.response) {
//       if (typeof window.response.receiveScanResult === "function") {
//         window.response.receiveScanResult(JSON.stringify(message.payload));
//       } else {
//         console.warn("window.response.receiveScanResult is not available.");
//       }
//     }
//   } catch (error) {
//     console.error("WebBridge API call failed:", error);
//   }
// };

// useEffect(() => {
//   if (typeof window !== "undefined" && !window.response) {
//     window.response = {
//       receiveScanResult: (jsonData: string) => {
//         console.log("Received scan result:", jsonData);
//       },
//     };
//   }
// }, []);

// }

export function useWebBridge() {
  const webBridge = useContext(WebBridgeContext);

  if (!webBridge) {
    throw new Error("WebBridgeProvider must be used within a WebBridgeContext");
  }

  return webBridge;
}
