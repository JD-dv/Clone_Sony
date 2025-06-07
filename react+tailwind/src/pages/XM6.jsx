import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { useInView } from "react-intersection-observer";
import xm6Black from "../assets/images/xm6Black.png";
import xm6Blue from "../assets/images/xm6Blue.png";
import xm6Sand from "../assets/images/xm6Sand.png";
import xm6model from "../assets/images/xm6Model.png";
import threexm6 from "../assets/images/3xm6.png";
import noisexm6 from "../assets/images/NCXM6.png";
import Footer from "../components/Footer";

const XM6 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px 85% 0px",
  });

  return (
    <>
      <NavBar />
      <main
        className=" h-300 bg-neutral-200 flex max-sm:flex-col  max-sm:w-full  p-5 max-md:flex-col max-md:w-[750px]
      max-md:text-2xl  md:flex-col lg:flex-row w-full"
      >
        <Card
          title="WH-1000XM6"
          sentence="The Sony WH-1000XM6 headphones offer exceptional sound quality and industry-leading noise cancellation, 
        now with a returning foldable design for enhanced portability."
          price="$440"
          description="The Sony WH-1000XM6 headphones, launched May 15, 2025, deliver enhanced sound quality and Sony's most advanced noise cancellation yet. 
          They bring back the foldable design for improved portability, fitting into a smaller case. 
          With better call clarity, comfortable refinements, and a 30-hour battery."
          images={[xm6Black, xm6Blue, xm6Sand]}
        />
      </main>
      <div className="w-full h-lvw ">
        <h2
          ref={ref}
          className={`flex text-6xl my-21 transition-all duration-50 max-sm:flex  
            max-sm:justify-center max-sm:w-full max-sm:text-5xl max-md:justify-center max-md:w-[650px] max-md:text-6xl md:justify-center md:w-[750px] lg:w-full  ${
              inView ? "animate-slowSlideUp3" : "opacity-0 translate-y-[300px]"
            }`}
        >
          Discover Link Buds Fit
        </h2>
        <div
          className="flex justify-center my-15 h-150 max-sm:flex max-sm:items-center 
             max-sm:w-full sm:flex  max-md:w-[650px] md:w-[760px] lg:w-full "
        >
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/wtCmdWaXqYo?si=-oGc7ldDUjkP2e0p&amp;start=1"
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
            src={xm6model}
            alt=""
            className=" rounded-lg max-sm:w-500 max-md:w-[580px] max-md:mt-40 max-md:mb-12 md:mt-20  lg:w-[700px] lg:h-[330px] lg:ml-2 lg:mt-40 "
          />
          <div className="flex flex-col items-center justify-center lg:w-full lg:mt-25">
            <h3 className="text-6xl my-10 max-sm:text-7xl max-md:text-9xl max-md:absolute max-md:top-0 md:absolute md:top-0 lg:mt-55">
              Comfort
            </h3>
            <p
              className=" mb-25 text-xl opacity-60 mt-10 max-sm:text-2xl max-md:text-2xl max-md:text-center 
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
            src={threexm6}
            alt=""
            className="rounded-lg max-sm:w-500 max-md:w-[580px] max-md:mt-40 max-md:mb-12 md:mt-20  lg:w-[520px] lg:h-[340px] lg:ml-6 lg:mt-40 "
          />

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-6xl my-10 max-sm:text-7xl max-md:text-9xl max-md:absolute max-md:top-0 md:absolute md:top-0 lg:mt-40">
              Colors
            </h3>
            <p
              className=" mb-25 text-xl opacity-60 mt-10 max-sm:text-2xl max-md:text-2xl max-md:text-center 
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
            max-sm:justify-center max-sm:w-full max-sm:relative max-sm:mt-23  max-md:w-full max-md:relative md:flex-col md:w-full md:relative lg:flex-row lg:w-full "
        >
          <div className="flex items-center justify-center mt-25">
            <img
              src={noisexm6}
              alt=""
              className="object-cover rounded-lg mx-25 w-200  text-center max-sm:w-500 max-md:w-320 max-lg:w-450"
            />
          </div>

          <div className="flex flex-col items-center justify-center mt-25 ">
            <h3 className="text-6xl mb-12 max-sm:text-6xl max-sm:absolute max-sm:top-0 max-md:text-7xl md:absolute md:top-2 lg:w-justify-center lg:mt-35">
              Noice Cancel
            </h3>
            <p
              className=" text-2xl opacity-70 flex max-sm:text-center max-sm:text-2xl max-sm:w-full
            max-md:text-xl max-md:text-center max-md:w-[550px]  md:text-2xl md:w-full  max-lg:text-2xl lg:ml-25 lg:mt-25"
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
        <Footer/>
      </div>
      
    </>
  );
};

export default XM6;
