import type { ReactNode } from "react";
import { createContext, useContext, useEffect } from "react";

import type { AppBridgeMessage } from "@/components/provider/AppBridgeProvider/AppBridgeMessage.types";
import {
  convertToAndroidAppBridge,
  convertToIOSAppBridge,
} from "@/components/provider/AppBridgeProvider/convertToNativeMessage";
import { useUserAgent } from "@/components/provider/UserAgentProvider";

import { useGenerateReviewStore } from "@/store/useGenerateReviewStore";
import { useScanDataStore } from "@/store/useScanDataStore";

interface AppBridgeProviderProps {
  children: ReactNode;
}

interface AppBridge {
  send: (message: AppBridgeMessage) => void;
}

export const AppBridgeContext = createContext<null | AppBridge>(null);

export function AppBridgeProvider({ children }: AppBridgeProviderProps) {
  const { setScanData } = useScanDataStore();
  const { setGenerateReviewData } = useGenerateReviewStore();

  const userAgent = useUserAgent();

  const isIOS = userAgent.isIOS;

  const send = (message: AppBridgeMessage) => {
    try {
      if (isIOS) return convertToIOSAppBridge(message);
      return convertToAndroidAppBridge(message);
    } catch {
      alert("App Bridge API called: " + message.type);
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
            console.error("Invalid JSON data for scan result:", error);
          }
        },
        receiveGeneratedReview: (jsonData: string) => {
          try {
            const data = JSON.parse(jsonData);
            setGenerateReviewData(data.result);
          } catch (error) {
            console.error("Invalid JSON data for generated review:", error);
          }
        },
      };
    }
  }, []);

  return <AppBridgeContext.Provider value={{ send }}>{children}</AppBridgeContext.Provider>;
}

export function useAppBridge() {
  const appBridge = useContext(AppBridgeContext);

  if (appBridge == null) {
    throw new Error("Wrap App Bridge Provider");
  }

  return appBridge;
}
