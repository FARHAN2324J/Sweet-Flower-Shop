import flowerLg from "../../../assets/images/flower-hero-lg.webp";
import flowerMd from "../../../assets/images/flower-hero-md.webp";
import flowerSm from "../../../assets/images/flower-hero-sm.webp";
import { AnimateText } from "../../../components/AnimateText";

const Hero = () => {
  return (
    <header className="flex flex-col items-center justify-center mx-10 my-10">
      <h1 className="tracking-tighter font-Caprasimo lg:text-9xl xl:text-[200px] md:text-8xl text-4xl mb-4 text-(--Body1)">
        <AnimateText animate="chars">Our Blooms®</AnimateText>
      </h1>
      <picture>
        <source srcSet={flowerSm} media="(max-width: 767px)" />
        <source srcSet={flowerMd} media="(max-width: 1024px)" />
        <source srcSet={flowerLg} media="(min-width: 1025px)" />
        <img src={flowerLg} alt="Flower showcase" />
      </picture>
    </header>
  );
};

export default Hero;
