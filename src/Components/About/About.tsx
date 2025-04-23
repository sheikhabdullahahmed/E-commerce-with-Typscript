import React from "react";

import AboutPhoto1 from "../../assets/about-photo-1.png";
import AboutPhoto2 from "../../assets/about-photo-2.png";
import AboutPhoto3 from "../../assets/about-photo-3.png";
import AboutPhoto4 from "../../assets/about-photo-4.png";
import Navbar from "../Navbar/Navbar";

const About = () => {
  return (
    <React.Fragment>
      <Navbar/>
    <section  className="mb-24 max-w-screen-2xl mx-auto px-12">
      <div className="flex flex-col xs:flex-row justify-between items-start mb-12">
  

        <button className="rounded-sm mx-0 my-6 bg-secondary-gray px-8 py-3 shadow-2xl shadow-[#244D4D]/40 text-heading-color-3 hover:text-p-color font-medium text-lg">
          Learn more
        </button>
      </div>
      <div className="flex flex-col-reverse xl:flex-row justify-between xl:my-0 my-6">
        <div className="justify-start sm:justify-center md:justify-start grid md:grid-cols-8">
          <div className="flex xl:hidden"></div>
          <div className="text-heading-color mr-12 col-span-3 xl:col-span-4 row-span-1">
            <h2 className="text-2xl font-extrabold leading-relaxed sm:text-3xl">
              <span className="text-5xl leading-normal">1.</span> <br />
              About Us
            </h2>
            <p className="text-p-color font-normal text-lg">
              Welcome to furni.shop, where modern furniture <br /> meets
              craftsmanship, quality, and innovation.
            </p>
          </div>
          <div className="text-heading-color col-span-3 xl:col-span-4 row-span-1">
            <h2 className="text-2xl font-extrabold leading-relaxed sm:text-3xl">
              <span className="text-5xl leading-normal">2.</span> <br />
              Our Furniture
            </h2>
            <p className="text-p-color font-normal text-lg">
              Explore our stunning collection of modern <br /> furniture
              designed to elevate your <br /> living space.
            </p>
          </div>
          <div className="flex xl:hidden"></div>
          <div className="flex xl:hidden"></div>
          <div className="text-heading-color mr-12 col-span-3 xl:col-span-4 row-span-1">
            <h2 className="text-2xl font-extrabold leading-relaxed sm:text-3xl">
              <span className="text-5xl leading-normal">3.</span> <br />
              How We Help
            </h2>
            <p className="text-p-color font-normal text-lg">
              Transform your home with our expert <br /> guidance, curated
              content, and <br /> personalized consultations.
            </p>
          </div>
          <div className="text-heading-color col-span-3 xl:col-span-4 row-span-1">
            <h2 className="text-2xl font-extrabold leading-relaxed sm:text-3xl">
              <span className="text-5xl leading-normal">4.</span> <br />
              Happy Clients
            </h2>
            <p className="text-p-color font-normal text-lg">
              Discover inspiring success stories <br /> from customers who have
              transformed <br /> their spaces with us.
            </p>
          </div>
          <div className="flex xl:hidden"></div>
        </div>
        <div className="xl:my-0 flex items-center justify-center xl:justify-end mb-12">
          <div className="grid grid-cols-2 grid-rows-[7] items-center xl:gap-4 gap-6">
            <img
              src={AboutPhoto1}
              className="col-span-1 row-span-2 self-end pt-12 rounded-sm "
            />
            <img
              src={AboutPhoto2}
              className="col-span-1 row-span-5 self-start rounded-sm"
            />
            <img
              src={AboutPhoto3}
              className="col-span-1 row-span-5 self-end rounded-sm"
            />
            <img
              src={AboutPhoto4}
              className="col-span-1 row-span-2 self-start pb-12 rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
    </React.Fragment>
  );
};

export default About;
