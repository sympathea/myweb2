import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Form from "@/components/Form";
import prisma from "@/lib/db";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";

import { currentUser } from "@clerk/nextjs/server";
import { Suspense } from "react";
import {
  GuestBookFormLoading,
  LoadingMessages,
} from "@/components/LoadingState";

export default async function Message() {
  return (
    <section className="mx-auto max-w-7xl">
      <Card className="flex flex-col space-y-10 border-none mt-7">
        <CardHeader>
          <CardTitle className="text-4xl">Message Board</CardTitle>
          <CardDescription>Leave me A Message!</CardDescription>
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
        {/* <CardFooter></CardFooter> */}
      </Card>
    </section>
  );
}

async function getMessages() {
  const data = await prisma.message.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

async function MessageForm() {
  const user = await currentUser();

  if (!user) return <h2>🌀 Please Log in</h2>;
  return <Form />;
}

async function Messages() {
  const messages = await getMessages();

  return (
    <ul className="flex flex-col space-y-2">
      {messages.map((message) => (
        <li key={message.id}>
          <div className="flex items-start gap-3 my-1">
            <div className="flex flex-col items-center flex-shrink-0 gap-2">
              <Image
                src={message.userImg}
                width={40}
                height={40}
                alt="user profile image"
                className="mb-1 rounded-full"
              />
              <div className="w-1 h-3 border-l-2 border-gray-300"></div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <p className="font-medium ">{message.userFirstname}</p>
                <span className="text-xs text-gray-500">
                  {formatDistanceToNow(new Date(message.createdAt), {
                    addSuffix: true,
                  })}
                </span>
              </div>

              <p className="mt-1 text-sm">{message.message}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
