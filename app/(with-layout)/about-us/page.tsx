import React from "react";
import { Metadata } from "next";
import { baseMetadata } from "@/utils/baseMetadata";
import PageTitle from "@/components/ui/PageTitle";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import Carousel from "@/components/ui/Carousel";
import { Settings } from "react-slick";
import reviews from "@/public/data/reviews.json";
import { v4 } from "uuid";
import SectionTitle from "@/components/ui/SectionTitle";
import ReviewMessage from "@/components/molecules/ReviewMessage";

export const metadata: Metadata = {
  title: "About I Learna",
  ...baseMetadata,
};

const carouselSettings: Settings = {
  slidesToShow: 3,
  autoplay: true,
  speed: 500,
  arrows: false,
};

const Page = () => {
  return (
    <main className="py-14 space-y-16">
      <section className="lg:w-1/2 space-y-8 px-5 ">
        <PageTitle>
          Connecting Experts, Empowering Learners, Shaping the Future of
          Education
        </PageTitle>

        <p className="font-light text-sm lg:ml-[4rem] relative lg:after:content-[''] lg:after:absolute lg:after:top-[6px] lg:after:left-[-4.5rem] lg:after:h-[2px] lg:after:w-[4rem] lg:after:bg-accent">
          i.learna is your gateway to world-class education. We bring together
          passionate instructors, ambitious learners, and cutting-edge tools to
          create a learning experience that’s impactful, flexible, and tailored
          to your goals. Whether you’re advancing your career, mastering a new
          skill, or exploring a passion, we’re here to make it possible.
        </p>

        <Link
          href="/courses"
          className="text-accent hover:text-accent-dark transition duration-300 text-xl flex items-center"
        >
          Discover Our Courses <GoArrowUpRight className="text-3xl" />
        </Link>
      </section>

      <section className="flex justify-between space-y-16">
        <div className="bg-pink-100 h-[50vh] w-full max-w-3xl p-20 space-y-5">
          <h1 className="text-2xl font-bold">Hot It All Began</h1>
          <p className="font-light">
            i.learna was founded with a simple idea: to make specialized
            knowledge accessible to everyone. Recognizing the gap between
            theoretical education and real-world skills, we set out to create a
            platform that bridges this divide. Today, i.learna is a trusted
            partner for learners and instructors across industries, helping
            individuals achieve their dreams and organizations upskill their
            teams.
          </p>
        </div>

        <div className="shrink-0">
          <Image
            src="/images/plan.webp"
            alt="aaa"
            width={4096}
            height={2731}
            className="w-[35vw]"
          />
        </div>
      </section>

      <section className="px-20 space-y-10">
        <div className="space-y-5">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-customGray">
            To provide accessible, high-quality education that empowers learners
            and professionals worldwide to achieve their full potential. We
            believe in fostering an environment of growth, collaboration, and
            innovation.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="text-2xl font-bold">Our Vision</h2>
          <p className="text-customGray">
            To become the leading e-learning platform, shaping the future of
            education by connecting industry experts with learners through
            personalized, hands-on, and impactful learning experiences
          </p>
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
    </main>
  );
};

export default Page;
