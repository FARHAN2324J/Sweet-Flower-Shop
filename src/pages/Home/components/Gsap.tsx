// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function ColorScroll() {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const boxRef = useRef<HTMLDivElement | null>(null);

//   useLayoutEffect(() => {
//     if (!containerRef.current || !boxRef.current) return;

//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: "+=1000",
//           scrub: 2,
//           pin: true,
//           invalidateOnRefresh: true,
//         },
//       });

//       tl.to(boxRef.current, {
//         scale: 1,
//         ease: "ease",
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       <section ref={containerRef} className=" h-screen flex items-center justify-center relative">
//         <div ref={boxRef} className="h-1/2 scale-90 w-full bg-blue-900 rounded-4xl" />

//       </section>
//     </>
//   );
// }

// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { cards } from "../../../../constants/data";

// gsap.registerPlugin(ScrollTrigger);

// export default function StackedCardsOverlay() {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const cardsRef = useRef<HTMLDivElement[]>([]);

//   useLayoutEffect(() => {
//     if (!containerRef.current) return;

//     const ctx = gsap.context(() => {
//       // Timeline با ScrollTrigger
//       gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: "+=1000",
//           scrub: 1,
//           pin: true,
//           invalidateOnRefresh: true,
//         },
//       })
//         .from(cardsRef.current, {
//           y: 200,
//           opacity: 0,
//           scale: 0.8,
//           duration: 0.8,
//           ease: "power2.out",
//           stagger: 0.3, // کارت‌ها یکی یکی ظاهر می‌شن
//         });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative h-screen flex items-center justify-center"
//     >
//       {cards.map((card, i) => (
//         <div
//           key={card.id}
//           ref={(el) => {
//             if (el) cardsRef.current[i] = el;
//           }}
//           className="absolute flex flex-col items-center justify-center lg:gap-15 gap-8"
//         >
//           <span className="HeadLine1 text-(--Headline)">{card.number}</span>
//           <img src={card.src} width={200} height={200} alt={card.alt} />
//           <div className="flex flex-col items-center justify-center">
//             <h3 className="HeadLine1 text-(--Headline) text-center uppercase">
//               {card.title}
//             </h3>
//             <p className="P1 text-(--Body1) text-center mt-5 xl:w-[40%] lg:w-[55%] md:w-[75%] w-[80%]">
//               {card.content}
//             </p>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// }

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cards } from "../../../../constants/data";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Gsap() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    if (!containerRef.current) return;

    // 🔹 Refresh ScrollTrigger بعد از load کامل تصاویر
    const imgs = containerRef.current.querySelectorAll("img");
    let loadedCount = 0;
    imgs.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener("load", () => {
          loadedCount++;
          if (loadedCount === imgs.length) {
            ScrollTrigger.refresh(); // بعد از load همه تصاویر
          }
        });
      }
    });
    // fallback اگر همه تصاویر قبلاً load شده باشند
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
      <div className="h-screen"></div>
    </div>
  );
}
