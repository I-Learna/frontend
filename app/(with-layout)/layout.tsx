import { ReactNode } from "react";

export default function WithLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <p>main header</p>
      {children}
      <p>main footer</p>
    </div>
  );
}
