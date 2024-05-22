import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { SwiperElement } from "../extra/SwiperElement";

const SectionHeroLayout3 = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-transparent">
      <img
        src="hero/gradient_creative.png"
        className="absolute inset-0 h-full w-full dark:hidden"
        sizes="100vw"
        alt="consulting hero gradient"
      />
      <img
        src="hero/gradient_creative_dark.png"
        className="absolute inset-0 hidden h-full w-full dark:block"
        alt="consulting hero gradient"
      />
      <section className="pb-16 pt-28 md:pt-32 lg:pb-40 lg:pt-36">
        <div className="container relative z-10">
          <div className="flex flex-wrap lg:flex-nowrap lg:items-center lg:justify-between lg:space-x-10">
            <div className="mb-12 lg:mb-0 lg:w-2/5">
              <h1 className="text-headings font-Libre text-3xl text-black md:text-4xl lg:text-5xl xl:text-7xl">
                Indian Plaza{" "}
                {/* <span className="relative inline-block before:absolute before:bottom-3 before:-z-[1] before:h-2 before:w-full before:rounded-lg before:bg-primary before:bg-gradient-to-l before:from-primary before:to-tertiary before:opacity-70">
                  Groceries
                </span>{" "} */}
                The Super Store
              </h1>
              <p className="font-Caveat mb-10 text-xl text-black">
                Where Tradition Meets Service
              </p>

              <Button size="lg">
                Truly Indian
                <ChevronRightIcon
                  width={20}
                  height={20}
                  className="-mr-2 ml-4"
                />
              </Button>
            </div>
            <div className="relative w-full text-center lg:w-2/3 lg:text-right">
              <SwiperElement />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionHeroLayout3;
