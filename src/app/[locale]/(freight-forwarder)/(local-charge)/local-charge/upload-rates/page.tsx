import UploadRatesAndFiles from "@/src/components/pages/freight-forwarder/pages/services/upload-rates/UploadRateServices";
import MainHeader from "@/src/components/shared/main-header/MainHeader";

export default function page() {
  return (
    <div className="container py-10 flex flex-col">
      <MainHeader title="Upload Local Charges" />

      <UploadRatesAndFiles
        url="https://tazamun-freight.tazdev.dev/tazamun-freight-forwarder/api/v1/localcharges/import"
        fileType="local"
        fileName="Local Charge File"
      />
    </div>
  );
}
