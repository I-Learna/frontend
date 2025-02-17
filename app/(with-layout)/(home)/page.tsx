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
import VideoPlayer from "@/components/ui/VideoPlayer";

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

export default function Home() {
  return (
    <main className="py-14 space-y-16">
      <section className="px-10">
        <div className="lg:w-1/3">
          <PageTitle>
            Unlock Your Potential with Expert-Led Courses & Learning Paths
          </PageTitle>
        </div>
      </section>

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
