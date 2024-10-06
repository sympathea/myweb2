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
    <section className="mx-auto max-w-7xl">
      <Card className="flex flex-col space-y-10 border-none mt-7">
        <CardHeader>
          <MessageDescription />
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-10">
            <Suspense fallback={<GuestBookFormLoading />}>
              <MessageForm />
            </Suspense>
            <Suspense fallback={<LoadingMessages />}>
              <Messages />
            </Suspense>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

async function MessageForm() {
  const user = await currentUser();

  if (!user) return <h2>🌀 Please Log in</h2>;
  return <Form />;
}
