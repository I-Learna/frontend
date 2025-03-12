import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const HomeCTA = () => {
  return (
    <div className="bg-gray-100 p-5 2xl:p-10 flex flex-col 2xl:flex-row gap-5 2xl:gap-20">
      <div className="2xl:w-1/2 bg-white rounded-xl overflow-hidden">
        <Image
          src="/images/cta1.webp"
          alt=""
          width={4096}
          height={2731}
          className="w-full h-60 2xl:h-96"
        />

        <div className="p-3">
          <p className="text-gray-500 text-sm">FOR USERS</p>
          <h3 className="text-2xl font-semibold text-primary my-5">
            Your Journey to Success Starts Here
          </h3>
          <p className="text-md">
            Whether you're building a foundation for your career, expanding your
            expertise, or exploring a new passion, i.learna has the tools and
            resources you need. With courses crafted by industry leaders, you
            can gain practical skills and knowledge to stand out in your field.
          </p>
          <Link
            href="/courses/live"
            className="text-accent hover:text-accent-dark transition duration-300 text-xl font-semibold flex items-center my-5"
          >
            Start Learning Now <GoArrowUpRight className="text-3xl" />
          </Link>
        </div>
      </div>

      <div className="2xl:w-1/2 bg-white rounded-xl overflow-hidden">
        <Image
          src="/images/cta2.png"
          alt=""
          width={4096}
          height={2731}
          className="w-full h-60 2xl:h-96"
        />

        <div className="p-3">
          <p className="text-gray-500 text-sm">FOR FREELANCER</p>
          <h3 className="text-2xl font-semibold text-primary my-5">
            Turn Your Expertise Into Impact
          </h3>
          <p className="text-md">
            Share your knowledge with eager learners worldwide, build your
            reputation as an expert, and earn while empowering others to grow.
            i.learna provides you with the tools and support you need to create
            impactful courses, reach a global audience, and achieve your
            teaching goals.
          </p>
          <Link
            href="/courses/live"
            className="text-accent hover:text-accent-dark transition duration-300 text-xl font-semibold flex items-center my-5"
          >
            Become a Freelancer <GoArrowUpRight className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCTA;
