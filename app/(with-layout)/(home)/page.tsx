import Faq from "@/components/molecules/Faq";
import Carousel from "@/components/ui/Carousel";
import PageTitle from "@/components/ui/PageTitle";
import { baseMetadata } from "@/utils/baseMetadata";
import { Metadata } from "next";
import Image from "next/image";
import { Settings } from "react-slick";
import reviews from "@/public/data/reviews.json";
import { v4 } from "uuid";
import SectionTitle from "@/components/ui/SectionTitle";
import ReviewMessage from "@/components/molecules/ReviewMessage";
import homecarousel from "@/public/data/homeCarousel.json";

export const metadata: Metadata = {
  title: "I Learna",
  ...baseMetadata,
};

const carouselSettings: Settings = {
  slidesToShow: 3,
  autoplay: true,
  speed: 500,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024, // Screens smaller than 1024px
      settings: {
        slidesToShow: 2, // Show 2 slides
        arrows: true, // Enable arrows
      },
    },
    {
      breakpoint: 768, // Screens smaller than 768px
      settings: {
        slidesToShow: 1, // Show 1 slide
        arrows: true, // Enable arrows
      },
    },
  ],
};

const settings2: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

export default function Home() {
  return (
    <main className="space-y-16">
      {/* <section className="p-10 max-w-7xl m-auto"> */}
      <section className="p-2 2xl:p-10 2xl:max-w-7xl 2xl:m-auto">
        <Carousel settings={settings2}>
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
      </section>

      {/* <section className="px-10">
        <div className="lg:w-1/3">
          <PageTitle>
            Unlock Your Potential with Expert-Led Courses & Learning Paths
          </PageTitle>
        </div>
      </section> */}

      <section>
        <div className="max-w-sm ml-20">
          <SectionTitle>What our users say about iLearna</SectionTitle>
        </div>
        <Carousel settings={carouselSettings}>
          {reviews.map((review) => (
            <div key={v4()} className="p-4">
              <ReviewMessage review={review} />
            </div>
          ))}
        </Carousel>
      </section>

      <section className="flex justify-center p-10">
        <Faq />
      </section>
    </main>
  );
}
