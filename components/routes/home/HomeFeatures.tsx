import { FaPersonChalkboard } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { SlBookOpen } from "react-icons/sl";

const HomeFeatures = () => {
  return (
    <div className="2xl:flex 2xl:gap-5">
      <div className="bg-accent p-10 text-white 2xl:w-2/5 shrink-0 flex flex-col justify-center gap-3">
        <h2 className="text-4xl font-semibold">
          Your Success Story Begins Here
        </h2>
        <p>
          Unlock expert knowledge, personalized learning paths, and a seamless
          experience designed to fuel your growth. Whether you're upskilling,
          switching careers, or mastering a new field, we’re here to empower
          your journey.
        </p>
      </div>
      <div className="grid grid-cols-1 grid-rows-4 gap-5 p-5 2xl:grid-cols-2 2xl:grid-rows-2">
        <div>
          <div className="text-4xl bg-[#EBD78E4D] w-max p-3 mb-2 rounded-full">
            <FaPersonChalkboard className="text-[#EBD78E]" />
          </div>
          <h2 className="text-xl font-semibold mb-2">
            Learn from Industry Leaders
          </h2>
          <p className="text-customGray">
            Gain practical, up-to-date insights from professionals with hands-on
            experience, helping you stay ahead in your field.
          </p>
        </div>
        <div>
          <div className="text-4xl bg-[#38B00033] w-max p-3 mb-2 rounded-full">
            <GiBrain className="text-[#5DB87E]" />
          </div>
          <h2 className="text-xl font-semibold mb-2">
            Personalized Learning Paths
          </h2>
          <p className="text-customGray">
            Follow a customized learning journey with courses and live sessions
            tailored to your goals, whether solo or in a group.
          </p>
        </div>
        <div>
          <div className="text-4xl bg-[#43B1E433] w-max p-3 mb-2 rounded-full">
            <HiOutlineRocketLaunch className="text-[#43B1E4]" />
          </div>
          <h2 className="text-xl font-semibold mb-2">
            Effortless Learning Experience
          </h2>
          <p className="text-customGray">
            Enjoy a seamless, user-friendly platform with easy access, progress
            tracking, and expert support at every step.
          </p>
        </div>
        <div>
          <div className="text-4xl bg-[#E7A3A333] w-max p-3 mb-2 rounded-full">
            <SlBookOpen className="text-[#E18C8C]" />
          </div>
          <h2 className="text-xl font-semibold mb-2">
            Hands-On Practical Training
          </h2>
          <p className="text-customGray">
            Gain real-world experience with interactive projects, case studies,
            and guided learning to sharpen your expertise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;
