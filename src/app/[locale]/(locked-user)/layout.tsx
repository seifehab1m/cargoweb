import Footer from "@/src/components/shared/layout/locked-user/footer/Footer";
import Navbar from "@/src/components/shared/layout/locked-user/navbar/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
