import MainFooter from "@/components/layout/MainFooter";
import MainHeader from "@/components/layout/MainHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactNode } from "react";

export default function WithLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen ">
      <MainHeader />

      <div className="app-wrapper">{children}</div>

      <MainFooter />
    </div>
  );
}
