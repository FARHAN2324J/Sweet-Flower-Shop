import pic1 from "../../../assets/images/about/Image (5).webp";
import pic2 from "../../../assets/images/about/Image (6).webp";
import pic3 from "../../../assets/images/about/Image (7).webp";
import profile from "../../../assets/images/about/Image (4).webp";
import Button from "../../../components/ui/Button";

import bouquetLg from "../../../assets/images/about/Imagelg.webp";
import bouquetMd from "../../../assets/images/about/Imagemd.webp";
import bouquetSm from "../../../assets/images/about/Image sm.webp";
import { about } from "../../../../constants/data";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimateText } from "../../../components/AnimateText";
gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
  const pics = [pic1, pic2, pic3];
  const imageRef = useRef<HTMLImageElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          opacity: 1,
          scale: 1,
          ease: "elastic.inOut",
          duration: 0.3,
        });
      }

      if (imagesRef.current.length) {
        ScrollTrigger.batch(imagesRef.current, {
          start: "top 60%",
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power2.out",
              stagger: 0.25,
            });
          },
          once: true,
        });
      }
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className="mx-6 mb-40">
      <h1 className="HeadLine1 py-10 text-(--Headline) uppercase">
        <AnimateText>about</AnimateText>
      </h1>
      <section className="flex md:flex-row flex-col gap-10">
        <h2 className="Caption1 text-(--Caption) uppercase md:sticky md:top-20 md:self-start md:w-150">
          Our story
        </h2>
        <div>
          <article className="flex md:flex-row flex-col gap-3">
            <img
              ref={imageRef}
              src={profile}
              alt="Person carrying flowers"
              className="lg:w-100 w-75 rounded-[30px] scale-90 opacity-0"
              style={{
                willChange: "opacity",
              }}
            />
            <div className="flex flex-col">
              <p className="Caption2 text-(--Body1) uppercase">
                <AnimateText delay={0.3}>Lily smith</AnimateText>
              </p>
              <span className="HeadLine4 text-(--Body2)">
                <AnimateText animate="lines" delay={0.5}>
                  Owner
                </AnimateText>
              </span>
            </div>
          </article>
          <p className="HeadLine2 text-(--Headline) my-15">
            <AnimateText animate="lines" delay={0.6}>
              Our Blooms was founded in honor of Lily Smith’s loving aunts,
              Teresa and Beth.
            </AnimateText>
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {pics.map((pic, index) => (
              <img
                key={index}
                ref={(el) => {
                  if (el) imagesRef.current[index] = el;
                }}
                loading="lazy"
                src={pic}
                alt={`about image ${index + 1}`}
                className="rounded-2xl opacity-0"
                style={{
                  willChange: "opacity",
                }}
              />
            ))}
          </div>
          {about.slice(0, 2).map((para) => (
            <p
              key={para.id}
              className="P2 text-(--Body1) mt-15 mb-10 text-pretty lg:w-150"
            >
              <AnimateText scrub animate="lines">
                {para.dis}
              </AnimateText>
            </p>
          ))}
          <picture className="w-full">
            <source srcSet={bouquetSm} media="(max-width: 767px)" />
            <source srcSet={bouquetMd} media="(max-width: 1024px)" />
            <source srcSet={bouquetLg} media="(min-width: 1025px)" />
            <img src={bouquetLg} loading="lazy" alt="Purple flowers" />
          </picture>
          {about.slice(2).map((para) => (
            <p
              key={para.id}
              className="P2 text-(--Body1) mt-15 mb-10 text-pretty lg:w-150"
            >
              <AnimateText scrub animate="lines">
                {para.dis}
              </AnimateText>
            </p>
          ))}
          <Button>BOOK A CONSULTATION</Button>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
