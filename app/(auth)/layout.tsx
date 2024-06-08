import React, { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex-center min-h-screen w-full ">{children}</div>;
};

export default Layout;
