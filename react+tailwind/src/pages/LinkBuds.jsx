import NavBar from "../components/NavBar";
import Card from "../components/Card";
import black_link from "../assets/images/newLinkBudsBlack.png";
import white_link from "../assets/images/newLinkBuds.png";
import purple_link from "../assets/images/newLinkBudsPurple.png";
import active from "../assets/images/linkbudsActive.png";
import colors from "../assets/images/colorLinkBuds.png";
import noiseCancel from "../assets/images/activenoiseLinkBuds.png";
import olivia from "../assets/images/oliviaBuds.png";
import Footer from "../components/Footer";

import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Link } from "react-router-dom";

const LinkBuds = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px 85% 0px",
  });
  const [hoverOne, setHoverOne] = useState(false);
  const [hoverTwo, setHoverTwo] = useState(false);

  const Buttons = () => {
    return (
      <div className="mx-5 my-2 flex">
        <Link to={"/linkBuds-openEar"}>
          <button
            onMouseEnter={() => setHoverTwo(true)}
            onMouseLeave={() => setHoverTwo(false)}
            className={`w-30 p-2 cursor-pointer rounded-lg bg-neutral-400 ${
              hoverTwo ? "border-1 scale-110" : "border-neutral-600  "
            }`}
          >
            Open Buds
          </button>
        </Link>
      </div>
    );
  };

  return (
    <>
      <NavBar />
      <main
        className=" h-300 bg-neutral-200 flex max-sm:flex-col  max-sm:w-[620px]  p-5 max-md:flex-col max-md:w-[750px]
      max-md:text-2xl  md:flex-col lg:flex-row w-full"
      >
        <Card
          title="Link Buds Fit"
          sentence="Sony LinkBuds fit offer a comfortable and secure closed design. 
        This allows them to effectively seal the ear properly, 
        providing a stable fit that enhances both audio quality and noise cancellation for an undisturbed listening experience."
          price="$215"
          description="The Sony LinkBuds are engineered for exceptional comfort and a secure fit, allowing for all-day wear without fatigue. Their innovative open-ring design ensures a stable position in your ear while keeping you connected to your surroundings. This unique construction provides a truly &#39;barely there&#39; feel, making them ideal for continuous use in various environments."
          images={[black_link, white_link, purple_link]}
          btn={<Buttons />}
        />
      </main>

      <div className="w-full h-lvw">
        <h2
          ref={ref}
          className={`flex text-6xl my-21 transition-all duration-50 max-sm:flex  
            max-sm:justify-center max-sm:w-[540px] max-sm:text-5xl max-md:justify-center max-md:w-[650px] max-md:text-6xl md:justify-center md:w-[750px] lg:w-full  ${
              inView ? "animate-slowSlideUp3" : "opacity-0 translate-y-[300px]"
            }`}
        >
          Discover Link Buds Fit
        </h2>
        <div
          className="flex justify-center my-15 h-150 max-sm:flex max-sm:items-center 
             max-sm:w-full sm:flex  max-md:w-full md:w-full lg:w-full "
        >
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/GAzbueaJ4rc?si=cNLopYK3-Kv5O-ke&amp;start=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div
          className="flex w-full p-15 max-md:flex-col max-sm:flex max-sm:items-center 
            max-sm:justify-center max-sm:w-full  max-md:w-full max-md:relative md:flex-col md:w-full md:relative lg:flex-row lg:w-full "
        >
          <img
            src={active}
            alt=""
            className="object-cover rounded-lg max-sm:w-500 max-md:w-[580px] max-md:mt-40 max-md:mb-12 md:mt-20  lg:w-[700px] lg:h-[330px] lg:ml-2 lg:mt-40"
          />
          <div className="flex flex-col items-center justify-center lg:w-full lg:mt-25">
            <h3 className="text-6xl max-sm:mt-20 max-sm:text-7xl max-md:text-8xl max-md:absolute max-md:top-0 md:absolute md:top-0 lg:mt-55">
              Comfort
            </h3>
            <p
              className="mb-25 text-xl opacity-60 max-sm:text-2xl max-md:text-2xl max-md:text-center 
             md:text-2xl  lg:w-full lg:ml-20  lg:mt-37"
            >
              Small, light, and smart, with a secure and comfortable fit{" "}
              <span className="font-bold">even when exercising</span> thanks to
              the newly developed Fitting Supporters and Earbud Tips to keep you
              connected throughout your day.
            </p>
          </div>
        </div>

        <div
          className="flex flex-row-reverse w-full p-15 mt-20 max-md:flex-col max-sm:flex max-sm:items-center 
            max-sm:justify-center max-sm:w-full sm:flex  max-md:w-full max-md:relative  md:flex-col md:w-full md:relative lg:flex-row-reverse lg:w-full "
        >
          <img
            src={colors}
            alt=""
            className="object-cover rounded-lg max-sm:w-500 max-md:w-[580px] max-md:mt-40 max-md:mb-12 md:mt-20  lg:w-[520px] lg:h-[340px] lg:ml-6 lg:mt-40 "
          />

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-6xl max-sm:mt-20 max-sm:text-7xl max-md:text-8xl max-md:absolute max-md:top-0 md:absolute md:top-0 lg:mt-40">
              Colors
            </h3>
            <p
              className=" mb-25 text-xl opacity-60  max-sm:text-2xl max-md:text-2xl max-md:text-center 
             md:text-2xl  lg:w-full lg:ml-5  lg:mt-44"
            >
              The Sony LinkBuds offer a beautiful range of colors to choose
              from, allowing you to express your personal style. Whether you
              prefer a classic shade or something more vibrant, there's a hue to
              complement every look. These carefully selected colors ensure your
              LinkBuds are not just a listening device, but also a fashionable
              accessory.
            </p>
          </div>
        </div>

        <div
          className="flex w-full p-15 max-md:flex-col max-sm:flex max-sm:items-center 
            max-sm:justify-center max-sm:w-full  max-md:w-full max-md:relative md:flex-col md:w-full md:relative lg:flex-row lg:w-full  "
        >
          <img
            src={noiseCancel}
            alt=""
            className="object-cover rounded-lg w-full  text-center max-sm:w-500 max-md:w-full max-lg:w-full  max-md:mt-35 lg:mr-12"
          />

          <div className="flex flex-col items-center justify-center mt-15">
            <h3 className="text-6xl max-sm:mt-20 max-sm:text-7xl max-md:text-8xl max-md:absolute max-md:top-0 lg:mb-10">
              Noice Cancel
            </h3>
            <p
              className="mb-25 text-xl text-center opacity-60  max-sm:text-2xl flex max-sm:text-center max-sm:w-full max-md:text-2xl max-md:text-center
            max-lg:text-3xl max-lg:text-center"
            >
              The LinkBuds Fit with their closed design deliver impressive noise
              cancellation, effectively minimizing a wide range of external
              distractions. This allows you to fully immerse yourself in your
              audio, providing a tranquil and undisturbed listening experience
              whether you're commuting, working, or simply enjoying your
              favorite music.
            </p>
          </div>
        </div>

        <div
          className="flex flex-row-reverse w-full p-15 mt-20 max-md:flex-col max-sm:flex max-sm:items-center 
            max-sm:justify-center max-sm:w-full sm:flex  max-md:w-full max-md:relative  md:flex-col md:w-full md:relative lg:flex-row-reverse lg:w-full "
        >
          <img
            src={olivia}
            alt=""
            className="object-cover rounded-lg max-sm:w-500 max-md:w-[580px] max-md:mt-40 max-md:mb-12 md:mt-20  lg:w-[520px] lg:h-[340px] lg:ml-6 lg:mt-40 "
          />

          <div className="flex flex-col items-center justify-center lg:mt-40">
            <h3 className="text-6xl my-10 max-sm:text-center max-sm:text-7xl max-md:text-9xl max-md:absolute max-md:top-0">
              Find Focus in the Chaos.
            </h3>
            <p
              className="mb-25 text-xl text-center opacity-60  max-sm:text-3xl flex max-sm:text-center max-sm:w-full max-md:text-4xl max-md:text-center
            max-lg:text-3xl max-lg:text-center"
            >
              Whether you're surrounded by the rush of the city or lost in your
              own world, Sony LinkBuds Fit stay secure and sound-focused. With
              industry-leading noise cancellation and a snug, all-day fit, you
              can tune into what matters, even when everything else is moving
              around you.
            </p>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default LinkBuds;
