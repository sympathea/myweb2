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
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProviderWrapper>
  );
}
