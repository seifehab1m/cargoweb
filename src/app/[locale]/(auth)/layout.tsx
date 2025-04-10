import FooterFreightForwarder from "@/src/components/shared/layout/locked-user/footer/FooterFreightForwarder";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow"> {children} </main>
      <FooterFreightForwarder />
    </div>
  );
}
