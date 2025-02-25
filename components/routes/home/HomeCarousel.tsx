import Carousel from "@/components/ui/Carousel";
import homecarousel from "@/public/data/homeCarousel.json";
import Image from "next/image";
import { Settings } from "react-slick";

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const HomeCarousel = () => {
  return (
    <div className="p-2 2xl:p-10 2xl:max-w-7xl 2xl:m-auto">
      <Carousel settings={settings}>
        {homecarousel.map((slide) => (
          <div
            key={slide.id}
            className="relative h-[20vh] 2xl:h-[32rem] 2xl:py-20 2xl:px-28 text-white"
          >
            <Image src={slide.background} alt={slide.id.toString()} fill />

            <div className="z-10 relative pl-4 pr-[50%] h-full flex flex-col justify-center gap-6">
              <h2 className="font-medium 2xl:text-4xl 2xl:font-medium">
                {slide.title}
              </h2>

              <p className="hidden 2xl:block">{slide.desc}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
