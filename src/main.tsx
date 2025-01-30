import { StrictMode } from "react";
import ReactDom from "react-dom/client";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppRouter from "@/router/AppRouter";

import ReactQueryClientProvider from "@/components/provider/ReactQueryClientProvider";

import "@/styles/reset.scss";
import "@/styles/global.scss";

ReactDom.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryClientProvider>
      <AppRouter />
      <ReactQueryDevtools initialIsOpen={false} />
    </ReactQueryClientProvider>
  </StrictMode>,
);
