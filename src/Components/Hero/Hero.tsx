import React from "react";
import { Link } from "react-router-dom";
import heroBcg from "../../assets/img1.jpeg";
import heroBcg2 from "../../assets/img2.jpeg";

export interface HeroProps {
  title?: string;
  description?: string;
  image1?: string;
  image2?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Explore Our Furniture Range! ",
  description = "Furniture is one such part of our homes that cannot be missed out in any of the cases. It makes our home aesthetically valuable by giving us all the comfort and relaxation that we desire. Certainly, one cannot deny the fact that a home is not complete without the right set of furniture.",
  image1 = heroBcg,
  image2 = heroBcg2,
}) => {
  return (
    <section className=" w-full flex flex-col lg:grid lg:grid-cols-2 lg:gap-6 px-4 sm:px-6 lg:px-8 py-6 overflow-hidden">
      {/* Text Section */}
      <article className="flex flex-col justify-center items-center text-center lg:text-left max-w-2xl mx-auto lg:mx-0 mb-6 lg:mb-0">
        <h1 className="text-2xl text-blue-950 sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight whitespace-pre-line max-w-xl sm:max-w-2xl lg:max-w-2xl">
          {title}
        </h1>

        <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base lg:text-lg overflow-hidden text-ellipsis">
          {description}
        </p>
      </article>

      {/* Image Section */}
      <article className="flex justify-center items-center w-full">
        <div className="w-full max-w-3xl flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="flex-1 min-w-0">
            <img
              src={image1}
              alt="Main furniture"
              className="w-full h-64 sm:h-80 lg:h-full object-cover rounded-lg shadow-lg max-w-full"
            />
          </div>
          <div className="flex-1  relative">
            <img
              src={image2}
              alt="Secondary furniture"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg max-w-full"
            />
            <div className="absolute inset-0 bg-blue-200 opacity-30 rounded-lg -z-10"></div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
