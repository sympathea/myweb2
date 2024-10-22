"use client";

import { useFormStatus } from "react-dom";
import { useState } from "react";
import { createMessage } from "@/app/actions";
import TextareaAutosize from "react-textarea-autosize";
import { Send } from "lucide-react";

export default function MessageForm({ children }) {
  const [text, setText] = useState("");
  const isEmpty = text === "";
  const { pending } = useFormStatus();

  return (
    <form
      action={async (formData) => {
        await createMessage(formData);
        setText("");
      }}
    >
      <div className="flex w-full gap-2 rounded-md shadow-[0_0px_1.2px_rgb(140,140,140)] p-3 min-h-20 lg:w-2/3">
        {/* User image */}
        <div className="w-12 h-12 shrink-0">{children}</div>

        <div className="flex flex-col justify-between flex-grow gap-4">
          <TextareaAutosize
            className="w-full p-0 text-sm bg-transparent border-none outline-none resize-none placeholder-muted-foreground text-muted-foreground"
            placeholder="Leave a message"
            name="message"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {/* footer */}
          <div
            className={`${isEmpty ? "opacity-0" : "opacity-100"} transition-opacity duration-1000 text-xs text-muted-foreground flex items-center justify-between gap-2`}
          >
            <span>{text.length}/500 </span>
            <button
              disabled={pending}
              className="flex items-center justify-center gap-1.5"
            >
              <Send size={15} />
              <span className="font-bold">Send</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
