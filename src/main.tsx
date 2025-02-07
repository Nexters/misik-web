import { StrictMode } from "react";
import ReactDom from "react-dom/client";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppRouter from "@/router/AppRouter";

import { AppBridgeProvider } from "@/components/provider/AppBridgeProvider/AppBridgeProvider";
import ReactQueryClientProvider from "@/components/provider/ReactQueryClientProvider";
import { UserAgentProvider } from "@/components/provider/UserAgentProvider";
import { WebBridgeProvider } from "@/components/provider/WebBridgeProvider/WebBridgeProvider";

import "@/styles/reset.scss";
import "@/styles/global.scss";

ReactDom.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryClientProvider>
      <UserAgentProvider>
        <AppBridgeProvider>
          <WebBridgeProvider>
            <AppRouter />
            <ReactQueryDevtools initialIsOpen={false} />
          </WebBridgeProvider>
        </AppBridgeProvider>
      </UserAgentProvider>
    </ReactQueryClientProvider>
  </StrictMode>,
);
