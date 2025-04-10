import UploadRatesAndFiles from "@/src/components/pages/freight-forwarder/pages/services/upload-rates/UploadRateServices";
import MainHeader from "@/src/components/shared/main-header/MainHeader";

export default function page() {
  return (
    <div className="container py-10 flex flex-col">
      <MainHeader title="Upload Rates" />
      <UploadRatesAndFiles
        url="https://tazamun-freight.tazdev.dev/tazamun-freight-forwarder/api/v1/services/import"
        fileType="service"
        fileName="Rates File"
      />
    </div>
  );
}
