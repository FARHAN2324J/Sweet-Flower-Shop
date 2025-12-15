import { useLayoutEffect, useRef } from "react";
import { services } from "../../../../constants/data";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { AnimateText } from "../../../components/AnimateText";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch(imagesRef.current, {
        start: "top 80%",
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            {
              clipPath: "inset(0% 0% 100% 0%)",
            },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 0.8,
              ease: "power2.out",
              stagger: 0.15,
            }
          );
        },
        once: true,
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <section className="mx-6 mb-20 mt-50 lg:grid lg:grid-cols-[200px_1fr] lg:gap-20">
      <h2 className="Caption1 text-(--Caption) uppercase lg:my-0 my-8 lg:sticky lg:top-20 lg:self-start">
        Services
      </h2>

      <div className="flex flex-col gap-12">
        {services.map((s, i) => (
          <article
            key={s.id}
            className="border-t border-(--Divider) pt-8 grid md:grid-cols-2 grid-cols-1 gap-8 items-center"
          >
            <div className="flex flex-col gap-4">
              <h3 className=" HeadLine5 uppercase text-(--Headline)">
                <AnimateText scrub animate="lines">
                  {s.title}
                </AnimateText>
              </h3>
              <p className="P1 text-(--Body1)">
                <AnimateText scrub animate="words">{s.dis}</AnimateText>
              </p>
            </div>

            <img
              key={s.id}
              ref={(el) => {
                if (el) imagesRef.current[i] = el;
              }}
              src={s.src}
              alt={s.alt}
              loading="lazy"
              className="w-full h-65 md:h-80 object-cover rounded-2xl"
              style={{
                clipPath: "inset(0% 0% 100% 0%)",
                willChange: "clip-path",
              }}
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
