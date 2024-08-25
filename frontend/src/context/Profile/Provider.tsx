"use client";

import React, { useState, ReactNode } from "react";
import Context from "./Context";

const Provider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<object | null>(null);

  const loadUser = (user: object) => {
    setUser(user);
  };

  return (
    <Context.Provider value={{ user, loadUser }}>{children}</Context.Provider>
  );
};
export default Provider;
