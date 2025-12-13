import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cards } from "../../../../constants/data";
import PurpleLg from "../../../assets/images/Purple flowersLg.webp";
import PurpleMd from "../../../assets/images/Purple flowersMd.webp";
import PurpleSm from "../../../assets/images/Purple flowersSm.webp";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".card-1, .card-2, .card-3", {
        opacity: 0,
        filter: "blur(10px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 3,
          pin: true,
          anticipatePin: 1,
        },
      });

      cards.forEach((_, i) => {
        const current = `.card-${i + 1}`;
        const next = `.card-${i + 2}`;

        tl.to(current, { opacity: 1, filter: "blur(0px)", duration: 1 });

        if (next) {
          tl.to(current, { opacity: 0, filter: "blur(10px)", duration: 1 });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-center md:mx-10 mx-5 relative"
    >
      <h3 className="HeadLine1 text-(--Headline) uppercase">what we do</h3>
      <p className="P1 text-(--Body1) my-10 text-center">
        We bring a touch of that simple magic into your world.
      </p>
      <div className="relative w-full h-100 flex items-center justify-center lg:mt-15 mt-10">
        {cards.map((card, index) => (
          <article
            className={`card-${
              index + 1
            } absolute flex flex-col items-center justify-center lg:gap-15 gap-8`}
            key={card.id}
          >
            <span className="HeadLine1 text-(--Headline)">{card.number}</span>
            <img src={card.src} width={200} height={200} alt={card.alt} />
            <div className="flex flex-col items-center justify-center">
              <h4 className="HeadLine1 text-(--Headline) text-center uppercase">
                {card.title}
              </h4>
              <p className="P1 text-(--Body1) text-center mt-5 xl:w-[40%] lg:w-[55%] md:w-[75%] w-[80%]">
                {card.content}
              </p>
            </div>
          </article>
        ))}
      </div>
      <picture className="mt-100">
        <source srcSet={PurpleSm} media="(max-width: 767px)" />
        <source srcSet={PurpleMd} media="(max-width: 1024px)" />
        <source srcSet={PurpleLg} media="(min-width: 1025px)" />
        <img src={PurpleLg} alt="Purple flowers" />
      </picture>
    </section>
  );
};

export default WhatWeDo;
