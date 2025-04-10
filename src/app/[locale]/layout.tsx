import type { Metadata } from "next";
import "@/src/assets/styles/globals.scss";
import { Outfit, Roboto, Cairo, Noto_Kufi_Arabic } from "next/font/google";
import Provider from "@/src/components/shared/provider/Provider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-outfit",
});

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["1000", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-cairo",
});
const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-noto-kufi-arabic",
});

export const metadata: Metadata = {
  title: "CarGoWeb",
  description: "CarGoWeb",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={` ${cairo.variable} ${outfit.variable} ${roboto.variable} ${notoKufiArabic.variable}`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
