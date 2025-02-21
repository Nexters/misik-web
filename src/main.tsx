import { StrictMode } from "react";
import ReactDom from "react-dom/client";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppRouter from "@/router/AppRouter";

import { AppBridgeProvider } from "@/components/provider/AppBridgeProvider/AppBridgeProvider";
import ReactQueryClientProvider from "@/components/provider/ReactQueryClientProvider";
import { UserAgentProvider } from "@/components/provider/UserAgentProvider";
import { Toaster } from "@/components/ui/Toast/Toaster";

import { ToastProvider } from "@/hooks/common/useToast";

import "@/styles/reset.scss";
import "@/styles/global.scss";

ReactDom.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryClientProvider>
      <UserAgentProvider>
        <AppBridgeProvider>
          <ToastProvider>
            <AppRouter />
            <ReactQueryDevtools initialIsOpen={false} />
            <Toaster />
          </ToastProvider>
        </AppBridgeProvider>
      </UserAgentProvider>
    </ReactQueryClientProvider>
  </StrictMode>,
);
