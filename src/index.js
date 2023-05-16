import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import "antd/dist/antd.css";
import store from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </Provider>
);
