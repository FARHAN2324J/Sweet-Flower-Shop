import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { flowersGallery } from "../../../../constants/data";

gsap.registerPlugin(ScrollTrigger);

const FlowersGallery = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.batch(
        containerRef.current?.querySelectorAll("article") || [],
        {
          start: "top 85%",
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              stagger: 0.15,
              duration: 0.6,
              ease: "power2.out",
            });
          },
          onEnterBack: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              stagger: 0.15,
              duration: 0.6,
              ease: "power2.out",
            });
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="mx-6 mb-10">
      <h1 className="HeadLine1 py-10 uppercase">gallery</h1>
      <section className="flex lg:flex-row flex-col gap-8">
        <h2 className="Caption1 text-(--Caption) uppercase  lg:sticky lg:top-20 lg:self-start">
          SEASONAL
          <br className="lg:block hidden" /> ARRANGEMENTS
        </h2>
        <div
          ref={containerRef}
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10"
        >
          {flowersGallery.map((f) => (
            <article key={f.id} className="opacity-0 translate-y-12">
              <div className="flex items-center gap-1">
                <p className="Caption2 text-(--Body1) uppercase">{f.title}</p>
                <span className="HeadLine4 text-(--Body2)">{f.price}</span>
              </div>
              <img
                src={f.src}
                className="object-cover rounded-[30px] mt-3 w-full"
                alt={f.alt}
              />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FlowersGallery;
