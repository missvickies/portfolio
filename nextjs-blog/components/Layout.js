import React from "react";
import { useRouter } from "next/router";
import Transition from "./Transition";
import { Nav } from "../components/Navigation";
const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="layout">
      <Nav />
      <Transition location={router.pathname}>
        <main className="main">{children}</main>
      </Transition>
    </div>
  );
};
export default Layout;
