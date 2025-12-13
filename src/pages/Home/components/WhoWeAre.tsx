import Button from "../../../components/ui/Button";
import { CarouselImages } from "../../../../constants/data";

const WhoWeAre = () => {
  return (
    <section className="flex flex-col items-center gap-5 mt-28">
      <h2 className="Caption1 text-(--Caption) uppercase">Who We Are</h2>
      <p className="HeadLine1 text-(--Headline) xl:w-[40%] lg:w-[75%] md:w-1/2 w-[55%] text-center uppercase mb-4">
        We're Our Blooms® and we're here to help you find your floral story.
      </p>
      <Button>about us</Button>
      <div className="xl:w-[60%] lg:w-[65%] md:w-[80%] w-[80%] py-20 m-auto relative overflow-hidden">
        <div className="carousel-track flex w-max">
          {CarouselImages.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.alt}
              className="md:w-70 w-50 shrink-0 ml-3.75 rounded-[30px] object-cover"
            />
          ))}
          {CarouselImages.map((img) => (
            <img
              key={`copy-${img.id}`}
              src={img.src}
              alt={img.alt}
              aria-hidden="true"
              className="md:w-70 w-50 shrink-0 ml-3.75 rounded-[30px] object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
