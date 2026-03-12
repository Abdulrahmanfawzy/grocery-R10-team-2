import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/index.ts";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
  </QueryClientProvider>
);
