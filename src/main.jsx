import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorFallback from "./ui/ErrorFallback.jsx";
import { ErrorBoundary } from "react-error-boundary";
import { StyleSheetManager } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={() => true}>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.replace("/")}
      >
        <App />
      </ErrorBoundary>
    </StyleSheetManager>
  </React.StrictMode>
);
