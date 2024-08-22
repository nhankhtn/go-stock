"use client";
import { createContext } from "react";
import { IThemeContext } from "@/_types_";

const Context = createContext<IThemeContext | undefined>(undefined);
export default Context;
