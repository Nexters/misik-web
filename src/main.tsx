import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import App from "@/App";

import ReactQueryClientProvider from "@/components/provider/ReactQueryClientProvider";

import "@/styles/reset.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryClientProvider>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </ReactQueryClientProvider>
  </StrictMode>,
);
