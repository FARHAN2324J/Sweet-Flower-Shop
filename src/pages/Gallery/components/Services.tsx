import { services } from "../../../../constants/data";

const Services = () => {
  return (
    <section className="mx-6 mb-20 mt-50 lg:grid lg:grid-cols-[200px_1fr] lg:gap-20">
      <h2 className="Caption1 text-(--Caption) uppercase lg:my-0 my-8 lg:sticky lg:top-20 lg:self-start">
        Services
      </h2>

      <div className="flex flex-col gap-12">
        {services.map((s) => (
          <article
            key={s.id}
            className="border-t border-(--Divider) pt-8 grid md:grid-cols-2 grid-cols-1 gap-8 items-center"
          >
            <div className="flex flex-col gap-4">
              <h3 className=" HeadLine5 uppercase text-(--Headline)">
                {s.title}
              </h3>
              <p className="P1 text-(--Body1)">{s.dis}</p>
            </div>

            <img
              src={s.src}
              alt={s.alt}
              loading="lazy"
              className="w-full h-65 md:h-80 object-cover rounded-2xl"
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
