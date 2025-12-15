import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cards } from "../../../../constants/data";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggerPics() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    if (!containerRef.current) return;

    const imgs = containerRef.current.querySelectorAll("img");
    let loadedCount = 0;
    imgs.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener("load", () => {
          loadedCount++;
          if (loadedCount === imgs.length) {
            ScrollTrigger.refresh();
          }
        });
      }
    });
    if (loadedCount === imgs.length) {
      ScrollTrigger.refresh();
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=500",
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          pinSpacing: false,
        },
      });

      cardsRef.current.forEach((card, i) => {
        tl.fromTo(card, { opacity: 0 }, { opacity: 1, duration: 0.5 });

        if (i < cardsRef.current.length - 1) {
          tl.to(card, { opacity: 0, duration: 0.5 }, "+=0.5");
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="relative h-screen flex w-full items-center justify-center"
      >
        {cards.map((card, i) => (
          <div
            key={card.id}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            className="absolute flex flex-col items-center justify-center lg:gap-15 gap-10 Card"
          >
            <span className="HeadLine1 text-(--Headline)">{card.number}</span>
            <img src={card.src} width={200} height={200} alt={card.alt} />
            <div className="flex flex-col items-center justify-center">
              <h3 className="HeadLine1 text-(--Headline) text-center uppercase">
                {card.title}
              </h3>
              <p className="P1 text-(--Body1) text-center mt-5 xl:w-[40%] lg:w-[55%] md:w-[75%] w-[80%]">
                {card.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="h-100"></div>
    </div>
  );
}
