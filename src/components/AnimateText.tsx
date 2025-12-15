import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  animate?: "chars" | "words" | "lines";
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

      document.fonts.ready.then(() => {
        const split = new SplitText(textRef.current, {
          type:
            animate === "lines"
              ? "lines"
              : animate === "words"
              ? "words"
              : "chars",
        });

        if (animate === "chars") {
          gsap.from(split.chars, {
            filter: "blur(10px)",
            stagger: 0.05,
            duration: 0.3,
            rotate: 10,
            delay,
            ease: "circ",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              end: scrub ? "bottom bottom" : undefined,
              scrub: scrub ? 2 : false,
              once: !scrub,
            },
          });
        }
        if (animate === "words") {
          gsap.fromTo(
            split.words,
            { opacity: 0.3 },
            {
              opacity: 1,
              duration: 0.1,
              stagger: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: textRef.current,
                start: "top 80%",
                end: scrub ? "bottom bottom" : undefined,
                scrub: scrub ? 2 : false,
                once: !scrub,
              },
            }
          );
        }
        if (animate === "lines") {
          gsap.from(split.lines, {
            y: 20,
            duration: 0.3,
            filter: "blur(10px)",
            opacity: 0,
            stagger: 0.1,
            delay,
            ease: "expo.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              end: scrub ? "bottom bottom" : undefined,
              scrub: scrub ? 2 : false,
              once: !scrub,
            },
          });
        }
        ScrollTrigger.refresh();

        return () => {
          split.revert();
          ScrollTrigger.getAll().forEach((st) => {
            if (st.trigger === textRef.current) st.kill();
          });
        };
      });
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
