import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Form from "@/components/Form";

import { currentUser } from "@clerk/nextjs/server";
import { Suspense } from "react";
import {
  GuestBookFormLoading,
  LoadingMessages,
} from "@/components/LoadingState";
import Messages from "@/components/Messages";
import MessageDescription from "@/components/MessageDescription";

export default async function MessagePage() {
  return (
    <div className="flex flex-col gap-20 px-4 mx-auto mt-16 max-w-7xl md:px-8">
      <MessageDescription />
      <div className="flex flex-col gap-10">
        <Suspense fallback={<GuestBookFormLoading />}>
          <MessageForm />
        </Suspense>
        <Suspense fallback={<LoadingMessages />}>
          <Messages />
        </Suspense>
      </div>
    </div>
  );
}

async function MessageForm() {
  const user = await currentUser();

  if (!user) return <h2>🌀 Please Log in</h2>;
  return <Form />;
}
