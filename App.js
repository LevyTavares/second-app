import React, { Component } from "react";
import { ThemeProvider } from "styled-components/native";
import Jobs from "./components/Jobs";

const theme = {
  colors: {
    bg: "#0f1115",
    card: "#1c2129",
    cardAlt: "#252c36",
    primary: "#6366F1",
    primaryAccent: "#818CF8",
    text: "#E5E7EB",
    textDim: "#94A3B8",
    border: "#2c3440",
    danger: "#EF4444",
    success: "#10B981",
  },
  radius: {
    xs: 4,
    sm: 8,
    md: 14,
    lg: 22,
    pill: 999,
  },
  spacing: (m = 1) => 4 * m,
  font: {
    h1: "24px",
    h2: "20px",
    body: "15px",
    small: "12px",
  },
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Jobs />
      </ThemeProvider>
    );
  }
}

export default App;
