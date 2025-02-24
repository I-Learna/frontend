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
import { FaPersonChalkboard } from "react-icons/fa6";
import { SiMinds } from "react-icons/si";
import { GiBrain } from "react-icons/gi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { SlBookOpen } from "react-icons/sl";
import TopInstructors from "@/components/molecules/TopInstructors";
import HomeCarousel from "@/components/routes/home/HomeCarousel";
import HomeFeatures from "@/components/routes/home/HomeFeatures";

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

const UsersReviews = () => {
  return (
    <>
      <div className="ml-5 2xl:max-w-sm">
        <SectionTitle>What our users say about iLearna</SectionTitle>
      </div>
      <Carousel settings={carouselSettings}>
        {reviews.map((review) => (
          <div key={v4()} className="p-4">
            <ReviewMessage review={review} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default UsersReviews;
