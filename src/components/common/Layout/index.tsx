import React from "react";
import Sidebar from "./Sidebar";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}
const img = "/home.jpg";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="absolute top-0 w-full z-1 flex flex-col h-full justify-between">
      <Header />
      {/* <Navbar /> */}
      <div className="flex p-4">
        {/* <Sidebar /> */}
        {children}
      </div>
      <Footer />
    </div>
  );
};
