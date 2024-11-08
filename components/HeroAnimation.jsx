"use client";

import { TypeAnimation } from "react-type-animation";

export function HeroAnimation() {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={["<Developer />", 2000, "", 2000]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{
        whiteSpace: "pre-line",
        // fontSize: "3.5rem",
        // fontWeight: "200",
        // display: "inline-block",
        // width: "full",
      }}
      speed={10}
    />
  );
}
