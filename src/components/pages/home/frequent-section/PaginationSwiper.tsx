import { useTranslations } from "next-intl";

export default function PaginationSwiper({
  currentIndex,
  slidesPerView,
  totalSlides,
}: {
  currentIndex: number;
  slidesPerView: number;
  totalSlides: number;
}) {
  const t = useTranslations("");

  return (
    <div className="flex justify-end">
      <div className="custom-pagination-container flex flex-col md:flex-row items-center gap-1">
        <span className="pagination-number text-darkGray text-nowrap !font-outfit">
          {Math.min(currentIndex + slidesPerView, totalSlides)} {t("of")}{" "}
          {totalSlides}
        </span>
        <div className="custom-pagination"></div>
      </div>
    </div>
  );
}
