import type { ReactNode } from "react";
import { createContext, useContext, useEffect } from "react";

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
    if (typeof window !== "undefined" && !window.response) {
      window.response = {
        receiveScanResult: (jsonData: string) => {
          console.log("Received scan result:", jsonData);
        },
      };
    }
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
