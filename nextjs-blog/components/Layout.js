import React from "react";
import { useRouter } from "next/router";
import Transition from "./Transition";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    // <div className="layout">
    <Transition location={router.pathname}>
      <main>{children}</main>
    </Transition>
    // </div>
  );
};
export default Layout;
