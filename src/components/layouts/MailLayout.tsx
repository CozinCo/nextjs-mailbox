
import React from "react";
import { Header } from "@/components/shared/header";

interface LayoutProps {
  children: React.ReactNode;
}

export function MailLayout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
}
