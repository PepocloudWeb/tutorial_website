import Image from "next/image";
import Link from "next/link";
import aboutImage from "../public/about/about-image.jpg";

const AboutCom = () => {
  return (
    <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center justify-between">
          <div className="w-full px-4 lg:w-6/12">
            <div className="-mx-3 flex items-center sm:-mx-4">
              <div className="min-w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  <Image
                    src={aboutImage}
                    alt=""
                    className="min-w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Why Choose Sample
              </span>
              <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
                Our passion is to serve people with our quality software.
              </h2>
              <p className="mb-8 text-base text-body-color">
                We strive to serve you as best as possible by giving you a
                top-quality product and customer support. It is our aim to make
                a positive impact on you by helping you to grow business as much
                as possible.
              </p>
              <p className="mb-12 text-base text-body-color">
                Top quality has always been our approach to software products.
                Because providing you with a quality software is our main
                service to you, we would only give you a product that we would
                use on our business.
              </p>
              <Link
                href="https://Sample.com/signup"
                className="inline-flex items-center justify-center rounded-lg bg-primary py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
              >
                Get Started For Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCom;
