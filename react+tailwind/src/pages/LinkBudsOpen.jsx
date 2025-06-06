import NavBar from "../components/NavBar";
import Card from "../components/Card";
import black_linkOpen from "../assets/images/openEarBlack.png";
import white_linkOpen from "../assets/images/openEarWhite.png";
import purple_linkOpen from "../assets/images/openEarPurple.png";
import talking from "../assets/images/LBOPEN.png";
import running from "../assets/images/LBRUNNING.png";
import rain from "../assets/images/LBRAIN.png";
import game from "../assets/images/LBGAMING.png";
import connect from "../assets/images/LBCONNECT.webp";
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

  const Buttons = () => {
    return (
      <div className="mx-5 my-2 flex">
        <Link to={"/linkBuds"}>
          <button
            onMouseEnter={() => setHoverOne(true)}
            onMouseLeave={() => setHoverOne(false)}
            className={`w-30 p-2 mr-5 cursor-pointer rounded-lg bg-neutral-400 ${
              hoverOne ? "border-1 scale-110" : "border-neutral-600 "
            }`}
          >
            Close Buds
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
          images={[black_linkOpen, white_linkOpen, purple_linkOpen]}
          btn={<Buttons />}
        />
      </main>

      <div className="w-full h-lvw">
        <h2
          ref={ref}
          className={`flex text-6xl my-21 transition-all duration-50 max-sm:flex  
            max-sm:justify-center max-sm:w-[540px] max-sm:text-4xl max-md:justify-center max-md:w-[650px] max-md:text-5xl md:justify-center md:w-[750px] lg:w-full  ${
              inView ? "animate-slowSlideUp3" : "opacity-0 translate-y-[300px]"
            }`}
        >
          Discover Link Buds Open Ear
        </h2>
        <div
          className="flex justify-center my-15 h-150 max-sm:flex max-sm:items-center 
             max-sm:w-full sm:flex  max-md:w-full md:w-full lg:w-full "
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3s3ZFI2o7KY?si=Br8Kvy-auPfdenB6&amp;start=21"
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
            src={talking}
            alt=""
            className="object-cover rounded-lg max-sm:w-500 max-md:w-[580px] max-md:mt-40 max-md:mb-12  md:mt-12  lg:w-[700px] lg:h-[330px] lg:ml-2 lg:mt-40"
          />
          <div className="flex flex-col items-center justify-center lg:w-full lg:mt-25">
            <h3 className="text-6xl max-sm:mt-20 max-sm:text-6xl max-md:text-8xl max-md:text-center max-md:absolute max-md:top-0 md:absolute md:top-0 lg:mt-55">
              Don’t Miss a Beat
            </h3>
            <p
              className="mb-25 text-xl opacity-60 max-sm:text-2xl max-md:text-2xl max-md:text-center 
             md:text-2xl  lg:w-full lg:ml-20  lg:mt-37 "
            >
              With Sony LinkBuds’ open-ear design, you can enjoy your favorite
              music while staying naturally connected to the people and world
              around you. Perfect for conversations, commuting, and everyday
              life — without ever hitting pause.
            </p>
          </div>
        </div>
        <div
          className="flex flex-row-reverse w-full p-15 mt-20 max-md:flex-col max-sm:flex max-sm:items-center 
            max-sm:justify-center max-sm:w-full sm:flex  max-md:w-full max-md:relative md:flex-col md:w-full md:relative lg:flex-row-reverse lg:w-full "
        >
          <img
            src={running}
            alt=""
            className="object-cover rounded-lg  w-150 max-sm:w-500 md:w-full md:mt-12 md:h-auto  max-md:w-full  max-md:mt-50 max-md:mb-12 lg:ml-15"
          />

          <div className="flex flex-col items-center justify-center lg:w-full lg:mt-25">
            <h3 className="text-6xl max-sm:mt-20 max-sm:text-6xl max-md:text-8xl max-md:text-center max-md:absolute max-md:top-0 md:absolute md:top-0 lg:mt-57">
              Run Free
            </h3>
            <p
              className="mb-25 text-xl opacity-60 max-sm:text-2xl max-md:text-2xl max-md:text-center 
             md:text-2xl  lg:w-full lg:ml-20  lg:mt-37  "
            >
              With Sony LinkBuds' open-ear design, you can enjoy immersive audio
              while staying alert to your surroundings. Perfect for runners,
              cyclists, and outdoor adventurers who want safety without
              sacrificing sound
            </p>
          </div>
        </div>

        <div
          className="flex w-full p-15 max-md:flex-col max-sm:flex max-sm:items-center 
            max-sm:justify-center max-sm:w-full  max-md:w-full max-md:relative md:flex-col md:w-full md:relative lg:flex-row lg:w-full "
        >
          <img
            src={rain}
            alt=""
            className="object-cover rounded-lg max-sm:w-500 max-md:w-[580px] max-md:mt-40 max-md:mb-12  md:mt-12  lg:w-[700px] lg:h-[330px] lg:ml-2 lg:mr-2 lg:mt-40"
          />

          <div className="flex flex-col items-center justify-center lg:w-full lg:mt-35">
            <h3 className="text-2xl lg:ml-14  max-sm:mt-20 max-sm:text-6xl max-md:text-8xl max-md:text-center max-md:absolute max-md:top-0 md:absolute md:top-0 lg:mt-65">
              Weather-Proof Your Sound
            </h3>
            <p
              className="mb-25 text-xl opacity-60 max-sm:text-2xl max-md:text-2xl max-md:text-center 
             md:text-2xl  lg:w-full lg:ml-20  lg:mt-37   "
            >
              Whether you're caught in a drizzle or pushing through a sweaty
              workout, the IPX4-rated Sony LinkBuds are built to handle it.
            </p>
          </div>
        </div>

        <div
          className="flex flex-row-reverse w-full p-15 mt-20 max-md:flex-col max-sm:flex max-sm:items-center 
            max-sm:justify-center max-sm:w-full sm:flex  max-md:w-full max-md:relative  md:flex-col md:w-full md:relative lg:flex-row-reverse lg:w-full "
        >
          <img
            src={game}
            alt=""
            className="object-cover rounded-lg max-sm:w-500 max-md:w-full md:mt-12 md:w-full max-md:mt-40 max-md:mb-12 lg:w-full"
          />

          <div className="flex flex-col items-center justify-center lg:w-full lg:mt-35">
            <h3 className="text-6xl max-sm:mt-20 max-sm:text-7xl max-md:text-8xl max-md:absolute max-md:top-0 md:absolute md:top-0 lg:mt-50 lg:mr-15 ">
              Game On, Ears Open
            </h3>
            <p
              className="mb-25 text-xl opacity-60 max-sm:text-2xl max-md:text-2xl max-md:text-center 
             md:text-2xl  lg:w-full lg:ml-20 lg:mr-20  lg:mt-37  "
            >
              Enjoy well-balanced, high-quality audio with clear mid-to-high
              ranges, powered by our Integrated Processor V2 and the
              specially-designed 11-mm ring-shaped driver unit — giving you
              immersive in-game sound while staying aware of your surroundings.
            </p>
          </div>
        </div>
 <div
          className="flex w-full p-15 max-md:flex-col max-sm:flex max-sm:items-center 
            max-sm:justify-center max-sm:w-full  max-md:w-full max-md:relative md:flex-col md:w-full md:relative lg:flex-row lg:w-full "
        >
          <img
            src={connect}
            alt=""
            className="object-cover rounded-lg max-sm:w-500 max-md:w-[580px] max-md:mt-40 max-md:mb-12  md:mt-12  lg:w-[700px] lg:h-[330px] lg:ml-2 lg:mt-40"
          />

          <div className="flex flex-col items-center justify-center lg:w-full lg:mt-35">
            <h3 className="text-6xl max-sm:mt-20 max-sm:text-6xl max-md:text-8xl max-md:text-center max-md:absolute max-md:top-0 md:absolute md:top-0 lg:mt-65">
              Effortless Pairing
            </h3>
            <p
              className="mb-25 text-xl opacity-60 max-sm:text-2xl max-md:text-2xl max-md:text-center 
             md:text-2xl  lg:w-full lg:ml-20  lg:mt-37"
            >
             With seamless Bluetooth connectivity and Fast Pair technology,
              LinkBuds make setup effortless, so you can focus on what matters:
              enjoying your day, your way.
            </p>
          </div>
        </div>
       <Footer/>
      </div>
    </>
  );
};


export default LinkBuds;
