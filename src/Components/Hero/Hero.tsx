import React from "react";
// import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <React.Fragment>
    <div data-aos="zoom-in" className="mb-4">
      <div
        className="h-[524px] bg-[url('https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2020/02/sofa-bg-banner.jpg')] bg-no-repeat bg-cover bg-[bottom_right] px-24 py-20 md:h-[430px] sm:px-10 sm:py-16 xs:px-6"
      >
        <h1
          data-aos="fade-up"
          className="text-6xl font-semibold uppercase text-[#your-main-color] md:text-5xl xs:text-4xl"
        >
          Style <br /> Comfort& <br /> Affordable
        </h1>
        <button
          data-aos="fade-up"
          className="mt-4 rounded bg-[#your-button-bg] px-4 py-2 text-white hover:bg-[#your-button-hover-bg]"
        >
          Explore Store
        </button>
      </div>
    </div>
    </React.Fragment>
  );
};

export default Hero;





