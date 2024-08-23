"use client";
import { createContext } from "react";
import { IUser } from "@/_types_";

const Context = createContext<IUser | undefined>(undefined);
export default Context;
