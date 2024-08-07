import Link from "next/link";

const Cta = () => {
  return (
    <section className=" py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="relative z-10 overflow-hidden rounded bg-primary py-12 px-8 md:p-[70px]">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <span className="mb-2 text-base font-semibold text-white capitalize">
                Experience the next generation video quality.
                <br className="hidden xs:block" /> No credit card required
              </span>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[38px] lg:mb-0 capitalize">
                Get started for <br className="hidden xs:block" />
                free today
              </h2>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="flex flex-wrap lg:justify-end">
                <Link
                  href="https://www.Sample.com/pricing"
                  className="my-1 mr-4 inline-block rounded bg-white bg-opacity-[15%] py-4 px-6 text-base font-medium text-white transition hover:bg-opacity-100 hover:text-primary md:px-9 lg:px-6 xl:px-9"
                >
                  See Plans
                </Link>
                <Link
                  href="https://app.Sample.com/signup"
                  className="my-1 inline-block rounded bg-[#13C296] py-4 px-6 text-base font-medium text-white transition hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9"
                >
                  Start Free
                </Link>
              </div>
              <p className="text-dimWhite mt-1 flex flex-col items-end">
                No credit card required.
              </p>
            </div>
          </div>

          <div>
            <span className="absolute top-0 left-0 z-[-1]">
              <svg
                width="189"
                height="162"
                viewBox="0 0 189 162"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="16"
                  cy="-16.5"
                  rx="173"
                  ry="178.5"
                  transform="rotate(180 16 -16.5)"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-157"
                    y1="-107.754"
                    x2="98.5011"
                    y2="-106.425"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0.07" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="absolute bottom-0 right-0 z-[-1]">
              <svg
                width="191"
                height="208"
                viewBox="0 0 191 208"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="173"
                  cy="178.5"
                  rx="173"
                  ry="178.5"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-3.27832e-05"
                    y1="87.2457"
                    x2="255.501"
                    y2="88.5747"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0.07" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
