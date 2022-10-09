import { CardsData } from "../data/data";

const Stats = () => {
  return (
    <section className="pt-12 pb-20">
      <div className="container mx-auto px-2">
        <header className="text-center space-y-4">
          <h2 className="text-VeryDarkViolet text-2xl font-bold md:text-3xl">
            Advanced Statistics
          </h2>
          <p className="text-GrayishViolet md:max-w-lg md:mx-auto">
            Track how your links performing across the web with our advanced
            statatics dashboard.
          </p>
        </header>
        <div className="relative mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* <hr className="border-0 border-t-[8px] border-Cyan absolute top-[50px] right-10 left-10 z-0" /> */}
          {CardsData.map((card) => {
            return (
              <div
                className={`bg-white p-8 relative rounded-md shadow-sm`}
                key={card.id}
              >
                <img
                  src={card.img}
                  alt="card-img"
                  className="-mt-[60px] bg-DarkViolet p-2 rounded-full"
                />
                <div className="py-6 space-y-3">
                  <h3 className="text-VeryDarkViolet text-xl font-bold">
                    {card.title}
                  </h3>
                  <p className="text-GrayishViolet">{card.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
