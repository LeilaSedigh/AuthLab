import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import "@fontsource-variable/vazirmatn";
import "./assets/styles/main.scss";

import App from "./App";
import { antdTheme } from "./theme/antdTheme";

createRoot(document.getElementById("root")!).render(
  <ConfigProvider theme={antdTheme}  direction="rtl">
    <App />
  </ConfigProvider>,
);
