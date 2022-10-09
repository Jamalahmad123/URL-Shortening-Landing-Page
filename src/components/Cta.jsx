import Button from "../shared/Button";

const Cta = () => {
  return (
    <section className="bg-pattren py-12 bg-DarkViolet">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6">
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Boost your links today
        </h2>
        <Button version={true}>Get Started</Button>
      </div>
    </section>
  );
};

export default Cta;
