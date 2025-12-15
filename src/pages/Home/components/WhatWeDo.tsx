import PurpleLg from "../../../assets/images/Purple flowersLg.webp";
import PurpleMd from "../../../assets/images/Purple flowersMd.webp";
import PurpleSm from "../../../assets/images/Purple flowersSm.webp";
import Gsap from "./Gsap";

const WhatWeDo = () => {
  return (
    <section className="flex flex-col items-center justify-center md:mx-10 mx-5">
      <h2 className="HeadLine1 text-(--Headline) uppercase">what we do</h2>
      <p className="P1 text-(--Body1) my-6 text-center">
        We bring a touch of that simple magic into your world.
      </p>
      <Gsap />
      <picture>
        <source srcSet={PurpleSm} media="(max-width: 767px)" />
        <source srcSet={PurpleMd} media="(max-width: 1024px)" />
        <source  srcSet={PurpleLg} media="(min-width: 1025px)" />
        <img loading="lazy" src={PurpleLg} alt="Purple flowers" />
      </picture>
    </section>
  );
};

export default WhatWeDo;
