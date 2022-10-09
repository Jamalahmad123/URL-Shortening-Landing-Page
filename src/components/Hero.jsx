import Button from "../shared/Button";
import heroImg from "../assets/illustrationWorking.svg";

const hero = () => {
  return (
    <section className="pt-12 pb-20">
      <div className="container mx-auto flex flex-col-reverse justify-between items-center gap-6 py-2 px-2 md:flex-row">
        <div className="text-center md:text-left">
          <h1 className="text-VeryDarkViolet text-3xl font-bold leading-[1.1] md:text-[48px]">
            More than just <br /> shorter links
          </h1>
          <p className="text-GrayishViolet max-w-xl mt-2 mb-6 md:mt-0">
            build your brand's recognition and gent detailed insights on how
            your links are performing.
          </p>
          <Button version={true}>get started</Button>
        </div>
        <div>
          <img src={heroImg} alt="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default hero;
