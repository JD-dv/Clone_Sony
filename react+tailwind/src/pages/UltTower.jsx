import NavBar from "../components/NavBar";
import Card from "../components/Card";
import ultTower9Main from "../assets/images/ULTTOWER9.webp";
import ultField5Main from "../assets/images/ULTFIELDPROPER.png";
import ultTowerPostMalon from "../assets/images/ULTTOWERPOSTMALONE.png";
import party from "../assets/images/ULTTOWER9PARTY.png";
import guitar from "../assets/images/ULTTOWER9GUITAR.png";
import sound from "../assets/images/ULTTOWER9SOUND.png";
import ult5PostMalone from "../assets/images/ULT5POSTMALONE.png";
import ult5mModel from "../assets/images/ULT5FIELDMODEL.png";
import Footer from "../components/Footer";

import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Link } from "react-router-dom";

const ultTower = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px 85% 0px",
  });
  const [hoverOne, setHoverOne] = useState(false);
  const [hoverTwo, setHoverTwo] = useState(false);

  return (
    <>
      <NavBar />
      <main
        className=" h-300 bg-neutral-200 flex max-sm:flex-col  max-sm:w-[620px] max-sm:h-400 p-5 max-md:flex-col max-md:w-[750px] max-md:h-430
      max-md:text-2xl  md:flex-col lg:flex-row w-full "
      >
        <Card
          title="Ult Tower 9 & Ult Field 5"
          sentence="Experience powerful, immersive sound wherever you go with the Sony ULT series. The ULT Tower 9 brings the party home with deep bass, vibrant lighting, and room-filling audio—perfect for large gatherings and epic sound experiences. On the move? The ULT Field 5 is your portable companion, delivering rich sound and punchy bass in a compact, durable design. Whether you're at home or outdoors, Sony has the sound to match your vibe."
          price="UT9: $899 | UF5: $329"
          description="The Sony ULT Tower 9 and ULT Field 5 are designed to deliver powerful audio experiences with comfort, convenience, and versatility in mind. The Tower 9 brings immersive, bass-rich sound and dynamic lighting to your home setup, perfect for long sessions of non-stop music without losing clarity or energy. Meanwhile, the Field 5’s portable and rugged design offers on-the-go sound with a compact build that’s easy to carry and use in any environment. Whether indoors or outdoors, both speakers provide exceptional performance without compromise."
          images={[ultTower9Main, ultField5Main]}
        />
      </main>

      <div className="w-full h-lvw">
        <h2
          ref={ref}
          className={`flex text-6xl my-21 transition-all duration-50 max-sm:flex  
            max-sm:justify-center max-sm:w-[540px] max-sm:text-2xl max-md:justify-center max-md:w-full max-md:text-4xl md:justify-center md:w-full lg:w-full   ${
              inView ? "animate-slowSlideUp3" : "opacity-0 translate-y-[300px]"
            }`}
        >
          Discover Sony's Ult Tower And Field
        </h2>
        <div
          className="flex justify-center my-15 h-150 max-sm:flex max-sm:items-center 
             max-sm:w-full max-sm:flex-col   max-md:w-full max-md:flex-col  md:w-full md:flex-col md:justify-center md:items-center lg:w-full lg:flex-col lg:justify-center lg:items-center "
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_PeXzakD2x8?si=ZE9BhTYXDPhon_LK"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="max-sm:mb-5 w-full md:w-[500px] md:mb-5 max-md:my-3 lg:w-[650px] lg:mb-5"
          ></iframe>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/LjKY4jB6LWQ?si=YnHcDU7y5yg7b4PT"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className=" w-full md:w-[500px] max-md:my-3 lg:w-[650px]"
          ></iframe>
        </div>

        <div
          className="flex w-full p-15 max-md:flex-col max-sm:flex max-sm:items-center 
            max-sm:justify-center max-sm:w-full  max-md:w-full max-md:relative md:flex-col md:w-full md:relative lg:flex-row lg:w-full
           "
        >
          <img
            src={ultTowerPostMalon}
            alt=""
            className="object-cover rounded-lg max-sm:w-500 max-md:w-full max-md:mt-45 max-md:mb-12 lg:w-[520px] lg:h-[350px] lg:mt-15   "
          />
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-6xl  max-sm:text-3xl max-md:text-5xl max-md:absolute md:mb-10 max-md:top-28 md:w-full lg:ml-20 mt-10 lg:text-5xl">
              Power That Fills the Room
            </h3>
            <p
              className=" mb-15 text-xl opacity-60  max-sm:text-2xl max-md:text-2xl max-md:text-center 
             md:text-2xl  lg:w-full lg:ml-20  lg:mt-9"
            >
              Experience next-level sound with the Sony ULT Tower 9. Designed to
              dominate your space, this speaker delivers deep bass, immersive
              audio, and lighting effects that match your vibe. Perfect for
              house parties or personal jam sessions.
            </p>
          </div>
        </div>

        <div
          className="mb-20 flex flex-row-reverse w-full p-15 mt-20 max-md:flex-col max-sm:flex max-sm:items-center 
            max-sm:justify-center max-sm:w-full sm:flex  max-md:w-full max-md:relative  md:flex-col md:w-full md:relative lg:flex-row-reverse lg:w-full"
        >
          <img
            src={party}
            alt=""
            className="rounded-lg  w-200  max-md:mt-45 text-center max-sm:w-500 max-md:w-320 max-lg:w-450 max-sm:mt-25"
          />

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-6xl mt-10  max-sm:text-3xl max-sm:top-10 max-md:text-5xl max-md:absolute max-md:top-28 md:mb-10 md:w-full lg:text-5xl">
              Vibe Mode: With Tower 9
            </h3>
            <p
              className=" mb-25 text-xl opacity-60 max-md:mt-10 max-sm:text-2xl max-md:text-2xl max-md:text-center 
             md:text-2xl  lg:w-full lg:ml-5  lg:mt-10 lg:pr-5"
            >
              The Sony ULT Tower 9 brings people together with powerful sound
              and pulsing lights. Whether it’s a casual hangout or full-on dance
              night, this speaker turns every moment into a party.
            </p>
          </div>
        </div>

        <div
          className="flex w-full p-15 max-md:flex-col max-sm:flex max-sm:items-center 
            max-sm:justify-center max-sm:w-full  max-md:w-full max-md:relative md:flex-col md:w-full md:relative lg:flex-row lg:w-full "
        >
          <img
            src={guitar}
            alt=""
            className="rounded-lg  max-md:mt-45 text-center max-sm:w-100   max-lg:w-450 max-sm:mt-25"
          />

          <div className="flex flex-col items-center justify-center mt-11">
            <h3 className="text-6xl max-sm:text-3xl max-sm:top-20 max-md:text-5xl max-md:absolute max-md:top-38  md:mb-10 md:w-full lg:text-5xl lg:ml-20">
              Where Sound Meets Soul
            </h3>
            <p
              className=" mb-20 text-xl opacity-60 max-sm:text-2xl max-md:text-2xl max-md:text-center 
             md:text-2xl  lg:w-full lg:ml-20  lg:mt-10"
            >
              Place your guitar beside the Sony ULT Tower 9 and feel the music
              come alive. Perfect for musicians and music lovers, this setup
              sets the tone for creative energy and deep audio resonance.
            </p>
          </div>
        </div>

        <div
          className="flex flex-row-reverse w-full p-15 mt-20 max-md:flex-col max-sm:flex max-sm:items-center 
            max-sm:justify-center max-sm:w-full sm:flex  max-md:w-full max-md:relative  md:flex-col md:w-full md:relative lg:flex-row-reverse lg:w-full"
        >
          <img
            src={sound}
            alt=""
            className="rounded-lg  w-200  max-md:mt-45 text-center max-sm:w-500 max-md:w-320 max-lg:w-450 max-sm:mt-25"
          />

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-6xl mt-15 max-sm:top-8 max-sm:text-3xl max-md:text-5xl max-md:absolute max-md:top-22 md:mb-10 md:w-full lg:text-5xl">
              ULTimate Bass
            </h3>
            <p
              className=" mb-25 text-xl opacity-60  max-sm:text-2xl max-md:text-2xl max-md:text-center max-md:mt-10
             md:text-2xl  lg:w-full lg:ml-5  lg:mt-10 lg:pr-5 "
            >
              The Sony ULT Tower 9 delivers unmatched audio clarity with booming
              bass that you can feel. Whether you're blasting beats or chilling
              with tunes, expect rich, powerful sound every time.
            </p>
          </div>
        </div>
        <hr />
        <div
          className="flex w-full p-15 max-md:flex-col max-sm:flex max-sm:items-center 
            max-sm:justify-center max-sm:w-full  max-md:w-full max-md:relative md:flex-col md:w-full md:relative lg:flex-row lg:w-full lg:h-115 "
        >
          <img
            src={ult5PostMalone}
            alt=""
            className=" rounded-lg  w-200  max-md:mt-45 text-center max-sm:w-full max-md:w-320 max-lg:w-450 max-sm:mt-25"
          />

          <div className="flex flex-col items-center justify-center mt-11">
            <h3 className="text-6xl max-sm:text-3xl  max-sm:top-20 max-md:text-5xl max-md:absolute max-md:top-34  md:mb-10 md:w-full lg:text-5xl lg:ml-20">
              Power in Your Hands
            </h3>
            <p
              className=" mb-25 text-xl opacity-60 max-sm:text-2xl max-md:text-2xl max-md:text-center 
             md:text-2xl lg:w-full lg:mt-10 lg:ml-20"
            >
              Take the party anywhere with the Sony ULT Field 5. This portable
              speaker packs serious bass and clear sound in a rugged,
              water-resistant design—perfect for beach days, backyard hangs, or
              on-the-go playlists.
            </p>
          </div>
        </div>

        <div
          className="flex flex-row-reverse w-full p-15 mt-20 max-md:flex-col max-sm:flex max-sm:items-center 
            max-sm:justify-center max-sm:w-full sm:flex  max-md:w-full max-md:relative  md:flex-col md:w-full md:relative lg:flex-row-reverse lg:w-full"
        >
          <img
            src={ult5mModel}
            alt=""
            className="rounded-lg  w-200  max-md:mt-45 text-center max-sm:w-500 max-md:w-320 max-lg:w-450 max-sm:mt-25"
          />

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-6xl mt-10 max-sm:top-10 max-sm:text-5xl max-md:text-5xl max-md:absolute max-md:top-24 md:mb-10 md:w-full lg:text-5xl">
              Anywhere You Go.
            </h3>
            <p
              className=" mb-25 text-xl opacity-60  max-sm:text-2xl max-sm:mt-10 max-md:text-2xl max-md:text-center max-md:mt-10
             md:text-2xl  lg:w-full lg:ml-5  lg:mt-24 pr-5 "
            >
              The Sony ULT Field 5 delivers punchy bass and rich audio in a
              compact, easy-to-carry speaker. With long battery life and durable
              build, it’s your ultimate outdoor sound companion.
            </p>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default ultTower;
