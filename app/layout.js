import Navbar from "@/components/Navbar";
import "./global.css";
import { Roboto_Mono } from "next/font/google";
import ClerkProviderWrapper from "@/components/ClerkProviderWrapper";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Zephr Lin",
  description: "Hi, I'm' Zephyr Lin.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProviderWrapper>
      <html lang="en">
        <body className={roboto_mono.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProviderWrapper>
  );
}
