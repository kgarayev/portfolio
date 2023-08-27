// ReduxProvider.js
import { Provider } from "react-redux";
import { store } from "../store/store"; // Import your Redux store
import React from "react";

interface ReduxProviderProps {
  children: React.ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
