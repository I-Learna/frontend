import { FaPersonChalkboard } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { SlBookOpen } from "react-icons/sl";

const HomeFeatures = () => {
  return (
    <div className="2xl:flex 2xl:gap-5">
      <div className="bg-accent p-10 text-white 2xl:w-2/5 shrink-0 flex flex-col justify-center gap-3">
        <h2 className="text-4xl font-semibold">
          Your path to success starts here
        </h2>
        <p>
          Unlock the tools, knowledge, and guidance you need to achieve your
          goals. With expert-led courses, personalized learning paths, and a
          seamless platform experience, we’re here to help you take the next
          step toward success
        </p>
      </div>
      <div className="grid grid-cols-1 grid-rows-4 gap-5 p-5 2xl:grid-cols-2 2xl:grid-rows-2">
        <div>
          <div className="text-4xl bg-[#EBD78E4D] w-max p-3 mb-2 rounded-full">
            <FaPersonChalkboard className="text-[#EBD78E]" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Expert-Led Learning</h2>
          <p className="text-customGray">
            Gain insights from top professionals with real-world experience,
            ensuring you receive practical and up-to-date knowledge
          </p>
        </div>
        <div>
          <div className="text-4xl bg-[#38B00033] w-max p-3 mb-2 rounded-full">
            <GiBrain className="text-[#5DB87E]" />
          </div>
          <h2 className="text-xl font-semibold mb-2">
            Personlized Learning Paths
          </h2>
          <p className="text-customGray">
            Choose tracks, courses, or live sessions tailored to your goals,
            with flexible options for individual or group learning
          </p>
        </div>
        <div>
          <div className="text-4xl bg-[#43B1E433] w-max p-3 mb-2 rounded-full">
            <HiOutlineRocketLaunch className="text-[#43B1E4]" />
          </div>
          <h2 className="text-xl font-semibold mb-2">
            Seamless Learning Experience
          </h2>
          <p className="text-customGray">
            Enjoy a user-friendly platform with secure access, progress
            tracking, and expert support to help you succeed at your own pace
          </p>
        </div>
        <div>
          <div className="text-4xl bg-[#E7A3A333] w-max p-3 mb-2 rounded-full">
            <SlBookOpen className="text-[#E18C8C]" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Hands-On Experience</h2>
          <p className="text-customGray">
            Engage in real-world case studies, interactive sessions, and
            step-by-step guidance to master industry-relevant skills
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;
