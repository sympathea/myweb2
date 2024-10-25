import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { UserPlus } from "lucide-react";
import { Suspense } from "react";
import { Skeleton } from "./ui/skeleton";

export default function SignIn({ pathname }) {
  return (
    <div className="col-start-4">
      <SignInAndOut pathname={pathname} />
    </div>
  );
}

function SignInAndOut({ pathname }) {
  return (
    <div className="flex items-center justify-end h-14">
      <SignedOut>
        <SignInButton
          mode="modal"
          forceRedirectUrl={pathname}
          signUpForceRedirectUrl={pathname}
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-xl opacity-70 hover:opacity-100"
          >
            <UserPlus />
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl={pathname} />
      </SignedIn>
    </div>
  );
}
