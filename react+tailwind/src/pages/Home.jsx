import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import postMalone from "../assets/images/sony_postMalone.webp";
import xm6Gem_gen from "../assets/images/Gemini_Generated_.png";
import ult from "../assets/images/ult.jpg";
import link_buds from "../assets/images/link_buds.png";
import ConcertPost from "../assets/images/post-malone-concert.webp";
import postMalone2 from "../assets/images/postMalone2.jpg";
import VideoBG from "../components/VideoBG";
import VideoXM6 from "../assets/videos/XM6_Video.mp4";
import VideoUlt from "../assets/videos/ULT_PowerSound.mp4";
import VideoOlivia from "../assets/videos/Olivia.mp4";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect } from "react";


function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px 90% 0px",
  });
 useEffect(() => {
    const hasAlerted = sessionStorage.getItem("hasAlerted");

    if (!hasAlerted) {
      alert("This website may not be optimized for some devices. Use Control + Scroll wheel. Recommended: 80% - 100%");
      sessionStorage.setItem("hasAlerted", "true");
    }
  }, []);
  

  return (
    <main >
      <NavBar />
      <div className="bg-black w-full h-240 relative max-sm:w-full max-sm:h-[800px] max-md:w-full lg:w-full max-lg:w-full text-white flex items-center justify-center ">
        <img
          src={postMalone}
          alt="Post-MaloneIMG"
          className="w-full h-auto absolute max-sm:top-30 rounded-lg max-sm:w-54 max-sm:left-10 max-sm:rounded-lg max-md:w-62 max-md:left-6 max-md:top-43 md:w-71 md:top-32 md:left-13
          animate-slideInRight "
        />
        <img
          src={ConcertPost}
          alt="WH-1000XM6IMG"
          className="w-full h-auto absolute right-96 max-sm:top-4 rounded-lg max-sm:w-50 max-sm:h-auto max-sm:right-10 max-sm:rounded-lg 
          max-md:w-76 max-md:top-15 max-md:right-12 md:w-67 md:right-5 md:top-125
          opacity-75 animate-slideInleft"
        />
        <img
          src={postMalone2}
          alt="postMaloneIMG"
          className="w-60 h-auto absolute  top-0 rounded-lg max-sm:hidden max-sm:w-50 max-sm:h-auto max-sm:right-0 max-sm:top-120 max-sm:rounded-lg 
          max-md:top-100 max-md:w-50 max-md:right-10  opacity-72 animate-slideInleft md:right-12 md:top-12"
        />
        <div
          className="w-100 h-60 bg-[#242525] absolute left-70 top-140 flex flex-col items-center justify-center rounded-lg 
        max-sm:top-130 max-sm:w-96 max-sm:left-[65px] max-sm:rounded-lg max-md:w-150 max-md:left-15 md:w-96 md:left-11   animate-slideInRight"
        >
          <p className="text-[#8c8f8fc4] text-center">
            Post Malone is an American rapper, singer, and songwriter known for
            his genre-bending music that incorporates elements of hip hop, pop,
            rock, and increasingly, country, as evidenced by his recent
            collaborations and album "F-1 Trillion."
          </p>
          <br />
          <p className="text-[#c3ceced8] text-center">-Post Malone</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-montserrat animate-slideUp max-sm:text-4xl lg:text-6xl md:text-5xl">
            No Noise. Just Music.
          </p>
          <br />
          <p className="font-montserrat animate-slowSlideUp2 max-sm:text-4xl lg:text-6xl md:text-5xl">SONY</p>
        </div>
        
      </div>

      <div
        className="bg-black flex w-full  relative max-sm:w-full max-sm:h-450 max-md:w-full max-md:h-450 md:h-450  lg:flex-row
       text-white items-center justify-center "
      >
        <p
          ref={ref}
          className={`max-sm:text-2xl max-md:text-4xl md:text-4xl max-lg:text-9xl font-montserrat transition-all duration-50 absolute top-96 ${
            inView ? "animate-slowSlideUp3" : ""
          }`}
        >
          Introducing Sony's New Products
        </p>
          
        
        <div className="flex items-center justify-center gap-10 max-sm:flex-col max-md:flex-col md:flex-col lg:w-full lg:flex-row">
          <Link to="/WH-1000XM6">
          <div className={`rounded-md cursor-pointer lg:w-90 bg-white shadow-lg shadow-white/50 ${
                inView ? "animate-slowSlideUp3" : ""
              }`}>
            <img
              src={xm6Gem_gen}
              alt="XM6-IMG"
              ref={ref}
              className={`w-110  lg:h-50  h-63 lg:w-90 rounded-sm  cursor-pointer  hover:scale-105 duration-300 ease-out  `}
            />

          </div>
          </Link>

          <Link to="/ultTower">
          <div ref={ref} className={`lg:w-90 bg-white shadow-lg shadow-white/50 rounded-md  ${
                inView ? "animate-slowSlideUp4" : ""
              }`}>
            <img
              src={ult}
              alt="ULT_TOWER-IMG"
              ref={ref}
              className={`w-110 lg:w-90 rounded-sm  cursor-pointer  hover:scale-105 duration-300 ease-out `}
            />

          </div>
          </Link>
          <Link to="/linkBuds">
          <div className={`lg:w-90 bg-white shadow-lg shadow-white/50 rounded-md ${
                inView
                  ? "animate-slowSlideUp5"
                  : "opacity-0 translate-y-[300px]"
              }`}>
            <img
              src={link_buds}
              alt="LINK_BUDS-IMG"
              ref={ref}
              className={`w-110 lg:w-90 rounded-sm  cursor-pointer  hover:scale-105 duration-300 ease-out `}
            />

          </div>
          </Link>
          
        </div>
      </div>

      <VideoBG video={VideoXM6} />
      <VideoBG video={VideoUlt} />
       <VideoBG video={VideoOlivia} />
       
       <Footer/>
    </main>
  );
}

export default Home;
