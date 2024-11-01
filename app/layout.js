import "./global.css";
import { Roboto_Mono } from "next/font/google";
import ClerkProviderWrapper from "@/components/ClerkProviderWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainWrapper from "@/components/MainWrapper";
import { Analytics } from "@vercel/analytics/react";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Zephr Lin",
  description: "Hi, I'm' Zephyr Lin.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProviderWrapper>
        <body className={`${roboto_mono.className}`}>
          <div className="flex flex-col items-center max-w-4xl px-6 py-6 mx-auto lg:max-w-5xl sm:px-12 md:px-20 lg:px-12 xl:max-w-7xl">
            <Header />
            <MainWrapper>{children}</MainWrapper>
            <Footer />
          </div>
        </body>
        <Analytics />
      </ClerkProviderWrapper>
    </html>
  );
}
