/* Components */
import { Counter } from "./components/Counter/Counter";

import "tailwindcss/tailwind.css";
import "./styles/globals.css";

export default function IndexPage() {
  return <Counter />;
}

export const metadata = {
  title: "Redux Toolkit",
};
