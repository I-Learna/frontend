import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import Language from "./Language";
import Logo from "./Logo";

const MainFooter: React.FC = () => {
  return (
    <footer className="bg-accent-darker text-white py-8 w-full mt-auto">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-3 lg:col-span-2">
            <div className="h-[4.5rem] flex items-center">
              <Logo white className="w-48" />
            </div>
            <p className="text-sm leading-relaxed">
              Industrial learning assocaiation ( ilearna ) is an innovative e-learning platform designed to connect
              learners with industry experts through live sessions, recorded
              courses, and personalized learning tracks. It offers a seamless
              experience for both students and instructors by providing tools
              for knowledge sharing, hands-on training, and professional
              development. With features like course customization, flexible
              payment options, and community engagement, iLearna empowers users
              to achieve their educational and career goals.
            </p>
          </div>

          {/* Discovery ilearna */}
          <div>
            <div className="h-10 md:h-[4.5rem] flex items-center">
              <h3 className="text-xl font-bold">Discovery ilearna</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Recorded courses</Link>
              </li>
              <li>
                <Link href="#">Live courses</Link>
              </li>
              <li>
                <Link href="#">Track Courses</Link>
              </li>
              <li>
                <Link href="#">E-books</Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <div className="h-10 md:h-[4.5rem] flex items-center">
              <h3 className="text-xl font-bold">About</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Contact us</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Terms & Policy */}
          <div>
            <div className="h-10 md:h-[4.5rem] flex items-center">
              <h3 className="text-xl font-bold">Terms & Policy</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Manage Cookies</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-white pt-6 ">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <Language />

            <div className="flex space-x-6">
              <Link target="_blank" href="https://x.com/">
                <FaXTwitter />
              </Link>
              <Link target="_blank" href="https://www.facebook.com/">
                <FaFacebook />
              </Link>
              <Link target="_blank" href="https://linkedin.com/">
                <FaLinkedin />
              </Link>
              <Link target="_blank" href="https://www.instagram.com/">
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
