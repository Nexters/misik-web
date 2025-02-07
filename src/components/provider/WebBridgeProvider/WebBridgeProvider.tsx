import type { ReactNode } from "react";
import { createContext, useContext, useEffect } from "react";

declare global {
  interface Window {
    response: {
      receiveScanResult: (jsonData: string) => void;
    };
  }
}
// window.response = window.response || {};

interface WebBridgeMessage {
  type: string;
  payload?: unknown;
}

interface WebBridge {
  receive: (message: WebBridgeMessage) => void;
}

interface WebBridgeProviderProps {
  children: ReactNode;
}

export const WebBridgeContext = createContext<null | WebBridge>(null);

export function WebBridgeProvider({ children }: WebBridgeProviderProps) {
  const receive = (message: WebBridgeMessage) => {
    try {
      if (typeof window !== "undefined" && window.response) {
        if (typeof window.response.receiveScanResult === "function") {
          window.response.receiveScanResult(JSON.stringify(message.payload));
        } else {
          console.warn("window.response.receiveScanResult is not available.");
        }
      }
    } catch (error) {
      console.error("WebBridge API call failed:", error);
    }
  };

  useEffect(() => {
    window.response = window.response || {};
  }, []);

  return <WebBridgeContext.Provider value={{ receive }}>{children}</WebBridgeContext.Provider>;
}

export function useWebBridge() {
  const webBridge = useContext(WebBridgeContext);

  if (webBridge == null) {
    throw new Error("Wrap Web Bridge Provider");
  }

  return webBridge;
}
