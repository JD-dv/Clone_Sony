import X from "../assets/icons/twitter.png";
import Facebook from "../assets/icons/facebook (2).png";
import Instagram from "../assets/icons/instagram.png";
const Footer = () => {
  return (
    <footer className=" w-full h-110 bg-neutral-300 p-20 max-sm:full">
      <div>
        <p className="text-4xl mb-12">Sony</p>
        <p className="mb-10 w-full">
          Powered by the finest audio engineering innovations, delivering
          unmatched clarity and immersive sound experiences — setting the
          standard as the world’s leading sound system in performance,
          precision, and power.
        </p>
        <div className="flex gap-3 mb-4">
          <a href="https://x.com/sony?lang=en">
            <img src={X} alt="X link" className="h-12 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/sony/">
            <img
              src={Facebook}
              alt="Instagram link"
              className="h-12 cursor-pointer"
            />
          </a>
          <a href="https://www.facebook.com/Sony/">
            <img
              src={Instagram}
              alt="Facebook link"
              className="h-12 cursor-pointer"
            />
          </a>
        </div>
      </div>
      <div>
        <p>&copy; 2025 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
