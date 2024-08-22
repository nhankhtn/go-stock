import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import styles from "@/styles/Dashboard.module.scss";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles["main-content"]}>
        <Header />
        {children}
      </div>
    </div>
  );
}
