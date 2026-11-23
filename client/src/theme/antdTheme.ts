import { theme } from "antd";
import type { ThemeConfig } from "antd";

export const antdTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,

  token: {
    colorPrimary: "#34D399",
    colorBgBase: "#080F0D",
    colorTextBase: "#E5F4ED",
    borderRadius: 12,
    fontFamily: '"Vazirmatn Variable", sans-serif',
  },

  components: {
    Button: {
      primaryColor: "#052019",
    },
  },
};
