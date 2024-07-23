import Image from "next/image";
import Link from "next/link";
import downloadImage from "/hero/download.jpg";
import shareImage from "/hero/sharing-video.jpg";
import recordImage from "/hero/home.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#F3F4F6] pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]"
    >
      {/* -------------------- Step 1 ---------------------------------- */}
      <div className="container">
        <div
          className="wow fadeInUp bg-white rounded-3xl shadow-2xl"
          data-wow-delay=".2s"
        >
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="items-center justify-between overflow-hidden lg:flex">
                <div className="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]">
                  <span className="mb-5 inline-block bg-primary py-2 px-5 text-sm font-medium text-white rounded-2xl">
                    Step 1
                  </span>
                  <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]">
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                  </h2>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Enim eaque inventore doloribus corporis in eveniet dolorum
                    ab officia?
                  </p>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia voluptatum aspernatur perspiciatis architecto
                    commodi eum explicabo ducimus itaque?
                  </p>
                  <Link
                    href="https://app.example.com/signup"
                    className="inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg"
                  >
                    Get Started For Free
                  </Link>
                </div>
                <div className="text-center">
                  <div className="relative z-10 inline-block mr-10 ">
                    <Image
                      src={recordImage}
                      alt="image"
                      className="mx-auto lg:ml-auto rounded-lg border-gray-500 border-2 hidden md:block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------- Step 2 ---------------------------------- */}
      <div className="container mt-20">
        <div
          className="wow fadeInUp bg-white rounded-3xl shadow-2xl "
          data-wow-delay=".2s"
        >
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="items-center justify-between overflow-hidden lg:flex">
                <div className="text-center">
                  <div className="relative z-10 inline-block mx-auto ml-10 ">
                    <Image
                      src={downloadImage}
                      alt="image"
                      className="mx-auto lg:ml-auto rounded-lg border-gray-500 border-2  hidden md:block"
                    />
                  </div>
                </div>

                <div className="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]">
                  <span className="mb-5 inline-block bg-primary py-2 px-5 text-sm font-medium text-white rounded-2xl">
                    Step 2
                  </span>
                  <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]">
                    Easily Download/Share Your Video With a Link
                  </h2>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                    Once you are done recording your video, you will be directed
                    to your recorded video page where you will also see a link
                    to your video. Just copy the link and share it with your
                    recipients.
                  </p>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                    Your recipients don&apos;t need to have an account with
                    Sample to watch your video. They can simply click the link
                    you shared and watch it. They can also leave a comment or
                    emoji&apos;s to your video.
                  </p>
                  <Link
                    href="https://app.Sample.com/signup"
                    className="inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg"
                  >
                    Get Started For Free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------- Step 3 ---------------------------------- */}
      <div className="container mt-20">
        <div
          className="wow fadeInUp bg-white rounded-3xl shadow-2xl"
          data-wow-delay=".2s"
        >
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="items-center justify-between overflow-hidden lg:flex">
                <div className="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]">
                  <span className="mb-5 inline-block bg-primary py-2 px-5 text-sm font-medium text-white rounded-2xl">
                    Step 3
                  </span>
                  <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sequi, fugit? Nostrum aspernatur sit libero, quas amet
                    molestiae eos facere nihil obcaecati nesciunt error atque
                    magnam sed repellendus illum debitis.{" "}
                  </h2>
                  <p className="mb-9 text-base leading-relaxed text-body-color">
                    You can share your video on any social media of your choice
                    by just hitting a share icon.
                  </p>
                  {/* <p className="mb-9 text-base leading-relaxed text-body-color">
                  No need to install any software. All the settings are already
                  coded for maximum optimization so you don&apos;t have to mess
                  around with any settings either.
                </p> */}
                  <Link
                    href="https://app.Sample.com/signup"
                    className="inline-flex items-center justify-center rounded bg-primary py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg"
                  >
                    Get Started For Free
                  </Link>
                </div>
                <div className="text-center">
                  <div className="relative z-10 inline-block mr-10 ">
                    <Image
                      src={shareImage}
                      alt="image"
                      className="mx-auto lg:ml-auto rounded-lg border-gray-500 border-2 hidden md:block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
