import Navbar from "@/components/Navbar";
import "./global.css";
import { Inter, Roboto_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Zephr Lin",
  description: "Hi, I'm' Zephyr Lin.",
};

const localization = {
  signUp: {
    start: {
      title: "Sign Up",
      subtitle: "Create an account",
    },
  },
  signIn: {
    start: {
      title: "Welcome Back",
      subtitle: "Sign in using one of the following",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider localization={localization}>
      <html lang="en">
        <body className={roboto_mono.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
