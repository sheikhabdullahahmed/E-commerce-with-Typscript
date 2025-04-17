import React from "react";

const Hero: React.FC = () => {
  return (
    <React.Fragment>
      <div data-aos="zoom-in" className="mb-4 flex justify-center">
        <div
          className="w-[90%] max-w-[1200px] h-[400px] 
                     lg:h-[350px] md:h-[320px] sm:h-[280px] xs:h-[240px]
                     bg-[url('https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2020/02/sofa-bg-banner.jpg')] 
                     bg-no-repeat bg-cover bg-center
                     flex items-center justify-center px-8 py-6
                     md:px-6 md:py-5
                     sm:px-4 sm:py-4
                     xs:px-3 xs:py-3"
        >
          <div className="text-center">
            <h1
              data-aos="fade-up"
              className="text-2xl font-semibold uppercase text-[#000000]
                         md:text-xl sm:text-lg xs:text-base"
            >
              Style <br /> Comfort & <br /> Affordable
            </h1>

            <button
              data-aos="fade-up"
              className="mt-3 w-fit mx-auto rounded bg-[#000000] px-3 py-1.5 text-white hover:bg-[#333333]
                         text-xs sm:text-[10px]"
            >
              Explore Store
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;