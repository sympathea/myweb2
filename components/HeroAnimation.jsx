"use client";

import { TypeAnimation } from "react-type-animation";

export function DescriptionAnimation() {
  return (
    <TypeAnimation
      sequence={[
        1000,
        "<developer /> ",
        1000,
        "learner .",
        () => {
          console.log("Sequence completed");
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{
        whiteSpace: "pre-line",
        fontSize: "2.2rem",
        display: "inline-block",
        width: "full",
      }}
      speed={10}
    />
  );
}
