"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import styles from "@/styles/Dashboard.module.scss";
import { useEffect, useRef, useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpenSidebar, setOpenSidebar] = useState<boolean>(true);
  const wrapperMainRef = useRef<HTMLDivElement | null>(null);

  const handClickOutside = (e: MouseEvent) => {
    setOpenSidebar(false);
  };
  useEffect(() => {
    if (isOpenSidebar && window.innerWidth <= 700) {
      wrapperMainRef.current?.addEventListener("mousedown", handClickOutside);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Sidebar isOpen={isOpenSidebar} />
      <div className={styles["main-content"]} ref={wrapperMainRef}>
        <Header isOpenSidebar={isOpenSidebar} setOpenSidebar={setOpenSidebar} />
        {children}
      </div>
    </div>
  );
}
