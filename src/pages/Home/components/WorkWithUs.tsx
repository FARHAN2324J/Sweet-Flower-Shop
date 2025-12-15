import { AnimateText } from "../../../components/AnimateText";
import Button from "../../../components/ui/Button";

const WorkWithUs = () => {
  return (
    <section className="flex flex-col items-center gap-8 my-40">
      <h2 className="Caption1 text-(--Caption) uppercase">
        <AnimateText>work with us</AnimateText>
      </h2>
      <h3 className="HeadLine2 text-(--Headline) text-center w-4/6 lg:w-[40%]">
        <AnimateText scrub animate="words">
          Discover how we can add a touch of natural beauty to your next event.
        </AnimateText>
      </h3>
      <Button>about us</Button>
    </section>
  );
};

export default WorkWithUs;
