import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/* Redux */
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import authReducer from "./redux/authSlice";
import globalReducer from "./redux/globalSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    global: globalReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
