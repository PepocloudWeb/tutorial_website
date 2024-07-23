"use client";
import React from "react";
import logo from "../public/logo/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [hideMenu, setHideMenu] = useState(true);
  return (
    <section className="ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link href="/" className="navbar-logo block w-full py-5">
              <Image src={logo} alt="logo" className="header-logo w-full" />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                id="navbarToggler"
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                onClick={() => setHideMenu(false)}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
              </button>
              {!hideMenu && (
                <div className="fixed top-0 left-0 bg-primary/90 w-full h-full text-white flex justify-center items-center text-[30px] tracking-[1px] lg:hidden">
                  <ul>
                    <li className="text-[15px] mb-10">
                      <Image src={logo} alt="logo" className=" text-[20px]" />
                    </li>
                    <li className="ml-10">
                      <Link href="/">Home</Link>
                    </li>

                    <li className="mt-3 ml-10">
                      <Link href="/about">About</Link>
                    </li>
                    <li className="mt-3 ml-10">
                      <Link href="/pricing">Pricing</Link>
                    </li>
                    <li className="mt-3 ml-10">
                      <Link href="/team">Team</Link>
                    </li>
                    <li className="mt-3 ml-10">
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                  <div
                    className="absolute top-[80px] right-[100px] cursor-pointer"
                    onClick={() => setHideMenu(true)}
                  >
                    <AiOutlineClose />
                  </div>
                </div>
              )}
              <nav
                id="navbarCollapse"
                className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6"
              >
                <ul className="block lg:flex">
                  <li className="group relative">
                    <Link
                      href="/"
                      className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="group relative">
                    <Link
                      href="/about"
                      className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                    >
                      About
                    </Link>
                  </li>
                  <li className="group relative">
                    <Link
                      href="/pricing"
                      className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className="group relative">
                    <Link
                      href="/team"
                      className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                    >
                      Team
                    </Link>
                  </li>
                  <li className="group relative">
                    <Link
                      href="/contact"
                      className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <Link
                href="https://app.sample.com/"
                className="loginBtn py-3 px-7 text-base font-medium text-white hover:text-dimWhite md:hover:border-b-white"
              >
                Sign In
              </Link>
              <Link
                href="https://app.Sample.com/signup/"
                className="signUpBtn rounded-lg bg-white bg-opacity-20 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark "
              >
                Sign Up For Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
