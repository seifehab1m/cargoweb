import FooterFreightForwarder from "@/src/components/shared/layout/locked-user/footer/FooterFreightForwarder";
import Navbar from "@/src/components/shared/layout/locked-user/navbar/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow"> {children} </main>
      <FooterFreightForwarder />
    </div>
  );
}
