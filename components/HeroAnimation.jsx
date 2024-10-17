"use client";

import { TypeAnimation } from "react-type-animation";

export function DescriptionAnimation() {
  return (
    <TypeAnimation
      sequence={[
        1000,
        "a <developer /> ",
        1000,
        "a learner .",
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
