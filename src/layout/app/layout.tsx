import React, { ReactNode } from "react";
import Header from "./header";

function AppLayout({children}:{children: ReactNode}) {
  return <div>
    <Header/>
    {children}
  </div>;
}

export default AppLayout;
