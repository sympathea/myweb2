"use client";

import { createMessage } from "@/app/actions";
import { useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

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
      <div className="flex w-full gap-2">
        <Input
          type="text"
          placeholder="Type your message here."
          name="message"
          className="h-12 transition-all duration-300 border-2 rounded-md outline-none focus:border-none focus:ring-2 focus:ring-opacity-50"
        />
        <Button className="bg-slate-800">Send</Button>
      </div>
    </form>
  );
}
