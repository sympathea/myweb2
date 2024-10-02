"use client";

import { createMessage } from "@/app/actions";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useRef } from "react";

export default function Form() {
  const formRef = useRef(null);

  return (
    <form
      action={async (formData) => {
        await createMessage(formData);
        formRef.current.reset();
      }}
      ref={formRef}
    >
      <div className="flex flex-col w-full gap-2">
        <Textarea placeholder="Type your message here." name="message" />
        <Button className="bg-slate-800">Send</Button>
      </div>
    </form>
  );
}
