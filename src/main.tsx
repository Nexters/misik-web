/* eslint-disable @typescript-eslint/no-explicit-any */
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

const GA4_ID = import.meta.env.VITE_GA4_ID;

const addGtagScript = () => {
  if (!GA4_ID) return;

  const script1 = document.createElement("script");
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  script1.async = true;
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', '${GA4_ID}');
  `;
  document.head.appendChild(script2);
};

if (import.meta.env.MODE === "production") {
  addGtagScript();
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
