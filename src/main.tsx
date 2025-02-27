/* eslint-disable @typescript-eslint/no-explicit-any */
import { StrictMode } from "react";
import ReactDom from "react-dom/client";
import TagManager from "react-gtm-module";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppRouter from "@/router/AppRouter";

import { AppBridgeProvider } from "@/components/provider/AppBridgeProvider/AppBridgeProvider";
import ReactQueryClientProvider from "@/components/provider/ReactQueryClientProvider";
import { UserAgentProvider } from "@/components/provider/UserAgentProvider";
import { Toaster } from "@/components/ui/Toast/Toaster";

import { ToastProvider } from "@/hooks/common/useToast";

import "@/styles/reset.scss";
import "@/styles/global.scss";

const gtmTag = {
  gtmId: import.meta.env.VITE_GTM_ID,
};

const initializeGA4 = () => {
  const ga4Id = import.meta.env.VITE_GA4_ID;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
  document.head.appendChild(script);

  script.onload = () => {
    (window as any).dataLayer = (window as any).dataLayer || [];

    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    gtag("js", new Date());

    gtag("config", ga4Id);
  };
};

if (import.meta.env.MODE === "production") {
  TagManager.initialize(gtmTag);
  initializeGA4();
}

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
