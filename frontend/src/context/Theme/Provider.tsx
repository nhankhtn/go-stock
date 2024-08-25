"use client";

import React, { useState, ReactNode } from "react";
import Context from "./Context";

const Provider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Context.Provider value={{ theme, toggleTheme }}>
      {children}
    </Context.Provider>
  );
};
export default Provider;
