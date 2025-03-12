import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="app-wrapper">{children}</div>
    </div>
  );
}
