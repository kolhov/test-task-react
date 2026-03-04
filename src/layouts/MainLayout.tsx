import Header from "@/components/header/Header";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode; 
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
