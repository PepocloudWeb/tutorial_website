import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
const Pricing = () => (
  <section className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
    <div className="container mx-auto">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
            <span className="mb-2 block text-lg font-semibold text-primary">
              Pricing Table
            </span>
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
              Our Pricing Plan
            </h2>
            <p className="text-base text-body-color">
              Choose the plan that fits your needs.
            </p>
          </div>
        </div>
      </div>

      <div className="-mx-4 flex flex-wrap justify-center">
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="relative z-10 mb-10 overflow-hidden rounded-xl border border-primary border-opacity-20 bg-white py-10 px-8 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12">
            <span className="mb-4 block text-lg font-semibold text-primary">
              Starter
            </span>
            <h2 className="mb-5 text-[42px] font-bold text-dark">
              $0
              <span className="text-base font-medium text-body-color">
                / forever
              </span>
            </h2>
            <p className="mb-8 border-b border-[#F2F2F2] pb-8 text-base text-body-color">
              Perfect for trying out Sample features.
            </p>
            <div className="mb-7">
              <div className="mb-1 flex leading-loose text-body-color">
                <span className="text-2xl font-medium text-body-color">
                  <TiTick className="mt-1" />
                </span>
                <p className="text-center">Record videos, audios, and Screen</p>
              </div>

              <div className="mb-1 flex leading-loose text-gray-400">
                <span className="text-lg font-medium text-body-color">
                  <RxCross2 className="mt-2 pr-0" />
                </span>
                <p className="text-center pl-2">Share videos with a link</p>
              </div>

              <div className="mb-1 flex leading-loose text-body-color">
                <span className="text-2xl font-medium text-body-color">
                  <TiTick className="mt-1" />
                </span>
                <p className="text-center">Download videos instantly</p>
              </div>

              <div className="mb-1 flex leading-loose text-body-color">
                <span className="text-2xl font-medium text-body-color">
                  <TiTick className="mt-1" />
                </span>
                <p className="text-center">Video library</p>
              </div>

              <div className="mb-1 flex leading-loose text-body-color">
                <span className="text-2xl font-medium text-body-color">
                  <TiTick className="mt-1" />
                </span>
                <p className="text-center">Knowledge base</p>
              </div>
            </div>
            <Link
              href="https://app.sample.com/signup"
              className="block w-full rounded-md border border-[#D4DEFF] bg-transparent p-4 text-center text-base font-semibold text-primary transition hover:border-primary hover:bg-primary hover:text-white"
            >
              Start Free
            </Link>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="relative z-10 mb-10 overflow-hidden rounded-xl border border-primary border-opacity-20 bg-white py-10 px-8 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12">
            <span className="mb-4 block text-lg font-semibold text-primary">
              Essential{" "}
              <span className="border-solid border-2 border-green-400 rounded-lg bg-green-100 p-1 text-sm">
                Popular
              </span>
            </span>
            <h2 className="mb-5 text-[42px] font-bold text-dark">
              $29
              <span className="text-base font-medium text-body-color">
                / month
              </span>
            </h2>
            <p className="mb-8 border-b border-[#F2F2F2] pb-8 text-base text-body-color">
              Advanced cloud-based recording
            </p>
            <div className="mb-7">
              <div className="mb-1 flex leading-loose text-body-color">
                <span className="text-2xl font-medium text-body-color">
                  <TiTick className="mt-1" />
                </span>
                <p className="text-center">Record videos, audios, and Screen</p>
              </div>

              <div className="mb-1 flex leading-loose text-body-color">
                <span className="text-2xl font-medium text-body-color">
                  <TiTick className="mt-1" />
                </span>
                <p className="text-center">Share videos with a link</p>
              </div>

              <div className="mb-1 flex leading-loose text-body-color">
                <span className="text-2xl font-medium text-body-color">
                  <TiTick className="mt-1" />
                </span>
                <p className="text-center">Download videos instantly</p>
              </div>

              <div className="mb-1 flex leading-loose text-body-color">
                <span className="text-2xl font-medium text-body-color">
                  <TiTick className="mt-1" />
                </span>
                <p className="text-center">Video library</p>
              </div>

              <div className="mb-1 flex leading-loose text-body-color">
                <span className="text-2xl font-medium text-body-color">
                  <TiTick className="mt-1" />
                </span>
                <p className="text-center">Standard support</p>
              </div>
            </div>
            <Link
              href="https://app.sample.com/signup"
              className="block w-full rounded-md border border-primary bg-primary p-4 text-center text-base font-semibold text-white transition hover:bg-opacity-90"
            >
              Start 14-day Free Trial
            </Link>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="relative z-10 mb-10 overflow-hidden rounded-xl border border-primary border-opacity-20 bg-white py-10 px-8 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12">
            <span className="mb-4 block text-lg font-semibold text-primary">
              Professional
            </span>
            <h2 className="mb-5 text-[42px] font-bold text-dark">
              $79
              <span className="text-base font-medium text-body-color">
                / month
              </span>
            </h2>
            <p className="mb-8 border-b border-[#F2F2F2] pb-8 text-base text-body-color">
              Perfect for Professionals.
            </p>
            <div className="mb-7">
              <div className="mb-1 flex leading-loose text-body-color">
                <span className="text-2xl font-medium text-body-color">
                  <TiTick className="mt-1" />
                </span>
                <p className="text-center">Record videos, audios, and Screen</p>
              </div>

              <div className="mb-1 flex leading-loose text-body-color">
                <span className="text-2xl font-medium text-body-color">
                  <TiTick className="mt-1" />
                </span>
                <p className="text-center">Share videos with a link</p>
              </div>

              <div className="mb-1 flex leading-loose text-body-color">
                <span className="text-2xl font-medium text-body-color">
                  <TiTick className="mt-1" />
                </span>
                <p className="text-center">Download videos instantly</p>
              </div>

              <div className="mb-1 flex leading-loose text-body-color">
                <span className="text-2xl font-medium text-body-color">
                  <TiTick className="mt-1" />
                </span>
                <p className="text-center">Video library</p>
              </div>

              <div className="mb-1 flex leading-loose text-body-color">
                <span className="text-2xl font-medium text-body-color">
                  <TiTick className="mt-1" />
                </span>
                <p className="text-center">Priority support</p>
              </div>
            </div>
            <Link
              href="https://app.sample.com/signup"
              className="block w-full rounded-md border border-[#D4DEFF] bg-transparent p-4 text-center text-base font-semibold text-primary transition hover:border-primary hover:bg-primary hover:text-white"
            >
              Choose Professional
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Pricing;
