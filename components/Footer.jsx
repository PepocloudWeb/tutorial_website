import Image from "next/image";
import logo from "../public/logo/logo.svg";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative mt-16 bg-primary">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="#001C42"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <Image
              src={logo}
              alt="logo"
              className="w-[200px] h-[72px] object-contain"
            />

            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-dimWhite">
                Sample lets you record your screen/video with just a click of a
                button with the highest possible quality. No need to install any
                software. It runs on our cloud.
              </p>
              <p className="mt-4 text-sm text-dimWhite">
                You can easily share the video with a link. They don&apos;t have
                to create an account to watch the video.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4 mt-7">
            <div>
              <p className="font-semibold tracking-wide text-white">Company</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/pricing"
                    className="transition-colors duration-300 text-dimWhite hover:text-teal-accent-400"
                  >
                    Plans
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="transition-colors duration-300 text-dimWhite hover:text-teal-accent-400"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="transition-colors duration-300 text-dimWhite hover:text-teal-accent-400"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="transition-colors duration-300 text-dimWhite hover:text-teal-accent-400"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="transition-colors duration-300 text-dimWhite hover:text-teal-accent-400"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white">
                Our Policies
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/privacy.html"
                    className="transition-colors duration-300 text-dimWhite hover:text-teal-accent-400"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms.html"
                    className="transition-colors duration-300 text-dimWhite hover:text-teal-accent-400"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookie.html"
                    className="transition-colors duration-300 text-dimWhite hover:text-teal-accent-400"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/disclaimer.html"
                    className="transition-colors duration-300 text-dimWhite hover:text-teal-accent-400"
                  >
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/acceptableusepolicy.html"
                    className="transition-colors duration-300 text-dimWhite hover:text-teal-accent-400"
                  >
                    Acceptable Use Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/return"
                    className="transition-colors duration-300 text-dimWhite hover:text-teal-accent-400"
                  >
                    Return Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden">
              <p className="font-semibold tracking-wide text-white">Apples</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 text-dimWhite hover:text-teal-accent-400"
                  >
                    Media
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 text-dimWhite hover:text-teal-accent-400"
                  >
                    Brochure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 text-dimWhite hover:text-teal-accent-400"
                  >
                    Nonprofit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 text-dimWhite hover:text-teal-accent-400"
                  >
                    Educational
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 text-dimWhite hover:text-teal-accent-400"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden">
              <p className="font-semibold tracking-wide text-white">Business</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 text-dimWhite hover:text-teal-accent-400"
                  >
                    Infopreneur
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 text-dimWhite hover:text-teal-accent-400"
                  >
                    Personal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 text-dimWhite hover:text-teal-accent-400"
                  >
                    Wiki
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 text-dimWhite hover:text-teal-accent-400"
                  >
                    Forum
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-dimWhite capitalize">
            Copyright © 2023 Sample. All rights reserved.
          </p>

          <div className="text-2xl text-dimWhite flex items-center mt-4 space-x-4 sm:mt-0">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
