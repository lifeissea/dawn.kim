import type { Metadata } from "next";
import { Mulish } from "next/font/google";
//styles
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/assets/css/style.css";

//components
import Header from "@/components/Header";
import ButtonToggle from "@/components/elements/ButtonToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
import ActiveContextSectionProvider from "@/context/ActiveContextSection";
import { Toaster } from "react-hot-toast";
import Loading from "./loading";
import { themeDefault } from "@/data/Header";
const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "여명거리 - 세상의 긍정적인 영향을 만들어가는 공간",
  description: "여명거리는 세상의 긍정적인 영향을 만들어가는 공간입니다.",
  // 예를 들어 네이버 사이트 검증 키
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html
        lang='ko'
        suppressHydrationWarning
      >
        <body className={mulish.className}>
          <ThemeProvider
            attribute='class'
            defaultTheme={themeDefault.mode}
          >
            <Loading />
            <ButtonToggle />
            <ActiveContextSectionProvider>
              <Header />
              {children}
              <Toaster position='bottom-center' />
            </ActiveContextSectionProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
