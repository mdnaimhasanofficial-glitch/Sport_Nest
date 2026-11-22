import React from "react";
import { Navbar } from "@/components/shared/Navbar";
import { Header } from "@/components/shared/Header";
const RootLayoutPage = ({ children }: LayoutProps<"/">) => {
  return (
    <div>
      <Header />
      <Navbar />
      {children}
    </div>
  );
};

export default RootLayoutPage;
