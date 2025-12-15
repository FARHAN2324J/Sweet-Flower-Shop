import PurpleLg from "../../../assets/images/Purple flowersLg.webp";
import PurpleMd from "../../../assets/images/Purple flowersMd.webp";
import PurpleSm from "../../../assets/images/Purple flowersSm.webp";
import { AnimateText } from "../../../components/AnimateText";
import Gsap from "./ScrollTriggerPics";

const WhatWeDo = () => {
  return (
    <section className="flex flex-col items-center justify-center md:mx-10 mx-5">
      <h2 className="HeadLine1 text-(--Headline) uppercase">
        <AnimateText>what we do</AnimateText>
      </h2>
      <p className="P1 text-(--Body1) my-6 text-center">
        <AnimateText animate="lines">
          We bring a touch of that simple magic into your world.
        </AnimateText>
      </p>
      <Gsap />
      <picture>
        <source srcSet={PurpleSm} media="(max-width: 767px)" />
        <source srcSet={PurpleMd} media="(max-width: 1024px)" />
        <source srcSet={PurpleLg} media="(min-width: 1025px)" />
        <img loading="lazy" src={PurpleLg} alt="Purple flowers" />
      </picture>
    </section>
  );
};

export default WhatWeDo;
