"use client";

import { TypeAnimation } from "react-type-animation";

export function DescriptionAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "A Web <Developer /> .",
        1000,
        "",
        () => {
          console.log("Sequence completed");
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{
        whiteSpace: "pre-line",
        fontSize: "2.25rem",
        display: "inline-block",
        width: "600px",
      }}
      speed={10}
    />
  );
}
