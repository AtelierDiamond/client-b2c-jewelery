import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

function AppLayout({children}:{children: ReactNode}) {
  return <div className="relative">
    <Header/>
    {children}
    <Footer/>
  </div>;
}

export default AppLayout;
