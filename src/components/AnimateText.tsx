import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  animate?: "chars" | "lines";
  scrub?: boolean;
  delay?: number;
}

export function AnimateText({
  children,
  className = "",
  animate = "chars",
  scrub = false,
  delay = 0,
}: AnimatedTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!textRef.current) return;

      // document.fonts.ready.then(() => {
      const split = new SplitText(textRef.current, {
        type: animate === "lines" ? "lines" : "chars",
      });

      if (animate === "chars") {
        gsap.from(split.chars, {
          x: 5,
          scale: 0.8,
          opacity: 0,
          stagger: 0.05,
          duration: 1,
          delay,
          ease: "circ",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: scrub ? "bottom 60%" : undefined,
            scrub: scrub ? 2 : false,
            once: !scrub,
          },
        });
      }

      if (animate === "lines") {
        gsap.from(split.lines, {
          duration: 1,
          filter: "blur(10px)",
          opacity: 0,
          stagger: 0.1,
          delay,
          ease: "expo.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: scrub ? "bottom 60%" : undefined,
            scrub: scrub ? 2 : false,
            once: !scrub,
          },
        });
      }

      return () => {
        split.revert();
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === textRef.current) st.kill();
        });
      };
      // });
    },
    { scope: textRef, dependencies: [animate, scrub, delay, children] }
  );

  return (
    <span className="relative">
      <span className="sr-only">{children}</span>
      <span
        ref={textRef}
        aria-hidden="true"
        className={`span-animate ${className}`}
      >
        {children}
      </span>
    </span>
  );
}
