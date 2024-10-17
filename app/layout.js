import "./global.css";
import { Roboto_Mono } from "next/font/google";
import ClerkProviderWrapper from "@/components/ClerkProviderWrapper";
import Header from "@/components/Header";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Zephr Lin",
  description: "Hi, I'm' Zephyr Lin.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProviderWrapper>
      <html lang="en">
        <body className={`${roboto_mono.className}`}>
          <div className="flex flex-col items-center max-w-5xl px-8 py-8 mx-auto md:px-12 2xl:max-w-7xl">
            <Header />
            <main className="w-full">{children}</main>
          </div>
        </body>
      </html>
    </ClerkProviderWrapper>
  );
}
