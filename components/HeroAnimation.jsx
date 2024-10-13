"use client";

import { TypeAnimation } from "react-type-animation";

export function DescriptionAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "a <developer /> ",
        2000,
        "a learner .",
        2000,
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
      speed={5}
    />
  );
}
