import NewCarrier from "@/src/components/pages/freight-forwarder/pages/carriers/NewCarrier";
import MainHeader from "@/src/components/shared/main-header/MainHeader";

export default function page() {
  return (
    <div className="container py-10">
      <MainHeader title="New Carrier" />
      <NewCarrier />
    </div>
  );
}
