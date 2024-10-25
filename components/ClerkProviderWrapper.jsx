import { ClerkProvider } from "@clerk/nextjs";

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
      subtitle: "Sign in to zephrlin.me",
    },
  },
};

export default function ClerkProviderWrapper({ children }) {
  return <ClerkProvider localization={localization}>{children}</ClerkProvider>;
}
