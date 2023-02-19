import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { AppContextProvider } from "./context/app-context";
import App from "./pages/App";
import { store } from "./redux/redux-store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <AppContextProvider>
  //   <App />
  // </AppContextProvider>

  <Provider store={store}>
    <App />
  </Provider>
);
