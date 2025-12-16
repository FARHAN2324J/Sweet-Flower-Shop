import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface BtnProps {
  children: React.ReactNode;
}

const Button = ({ children }: BtnProps) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (btnRef.current) {
        gsap.fromTo(
          btnRef.current,
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1,
            scale: 1,
            ease: "elastic.out(1, 0.5)",
            duration: 0.6,
            scrollTrigger: {
              trigger: btnRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <button
      ref={btnRef}
      className="px-3 py-1.5 flex items-center gap-2 bg-(--Accent5) rounded-sm uppercase"
    >
      <span className="bg-(--Link) rounded-full w-1 h-1" aria-hidden="true" />
      <span className="Caption1 text-(--Link)">{children}</span>
    </button>
  );
};

export default Button;
