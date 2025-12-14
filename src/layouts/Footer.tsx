import OrangeFlower1 from "../assets/images/Orange lg.webp";
import OrangeFlower2 from "../assets/images/Orange md (1).webp";
import OrangeFlower3 from "../assets/images/Orange sm.webp";

const Footer = () => {
  return (
    <footer className="relative md:mx-10 mx-5">
      <picture className="w-full">
        <source srcSet={OrangeFlower3} media="(max-width: 767px)" />
        <source srcSet={OrangeFlower2} media="(max-width: 1024px)" />
        <source srcSet={OrangeFlower1} media="(min-width: 1025px)" />
        <img
          src={OrangeFlower1}
          alt="Purple flowers"
          className="w-full h-auto"
        />
      </picture>

      <div className="linear-div-footer absolute inset-0 flex flex-col items-end justify-end px-5 pb-6">
        <p className="font-Caprasimo text-(--Accent7) md:text-9xl text-8xl mb-2 text-center w-full">
          OB.
        </p>
        <div className="w-full flex items-center justify-between">
          <div className="flex justify-between w-full">
            <span className="P2 text-(--Accent7)">Miami, FL</span>

            <a href="" className="P2 text-(--Accent7)">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
