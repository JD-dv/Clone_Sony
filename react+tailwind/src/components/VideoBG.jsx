const VideoBG = ({video}) => {
  return (
   <div className="bg-black w-full h-300 relative max-sm:w-full max-md:w-full max-sm:h-auto md:w-full md:h-auto max-lg:w-530 ">
  <>
    <video
      src={video}
      autoPlay
      loop
      muted
      playsInline
      className="w-full max-sm:w-520 max-md:w-515 max-lg:w-529"
    ></video>
  </>
</div>
  );
};

export default VideoBG;
