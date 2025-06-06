import { useState } from "react";

const Card = ({ title, sentence, price, description, images = [], btn }) => {
  const [defaultValueIMG, setDefaultValueIMG] = useState(0);

  return (
    <>
      <img
        src={images[defaultValueIMG]}
        alt=""
        className=" rounded-lg border-1 border-neutral-400 flex 
        mx-10 max-sm:my-10 h-120 animate-slowSlideUp max-sm:w-50 
        max-sm:h-auto  max-md:w-80 max-md:h-80 max-md:mt-20 md:w-90 md:h-96 md:flex lg:w-90 lg:h-[500px] lg:mt-15 "
      />
      <div className="flex flex-col w-full animate-slowSlideUp">
        <h1 className="text-8xl mb-5 mt-12 mx-12 max-sm:text-4xl max-md:text-7xl lg:text-7xl ">
          {title}
        </h1>
        <h3 className="pl-12  mx-1 max-sm:text-xl max-sm:w-93 max-md:text-2xl max-md:w-[590px] md:w-full lg:w-full lg:pr-27">
          {sentence}
        </h3>
        <h3 className="text-4xl mt-20 mx-12 mb-5 lg:text-4xl">
          Starting price: {price}
        </h3>
        <div className="max-sm:w-[400px] max-md:w-[440px] md:w-[450px] border-1 border-neutral-200 border-b-neutral-400 mb-10 mx-12"></div>
        <p className="pl-12 mb-3 max-sm:text-xl max-sm:w-93 max-md:w-[590px] md:w-full lg:w-full lg:pr-27">
          {description}
        </p>
        <div className="flex w-12 gap-3 mx-12 mt-5 ">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              onClick={() => setDefaultValueIMG(index)}
              alt="productSelection"
              className={`w-15 h-12  cursor-pointer border-1 rounded-lg ${
                defaultValueIMG === index
                  ? "border-black scale-110"
                  : "border-neutral-300 hover:scale-105"
              }  `}
            />
          ))}

          <div>{btn}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
