import React from "react";
import { useNavigate } from "react-router-dom";

const HomeCollectionItem = (props: { image: any; title: any; comment: any; reverse: any; }) => {
  const { image, title, comment, reverse } = props;
  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-col md:flex-row pt-3 gap-0 ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <div
        data-aos="fade-right"
        className="w-full md:w-1/3 p-2 text-center"
      >
        <img
          src={image}
          alt=""
          className="max-w-full md:h-full md:object-cover"
        />
      </div>
      <div
        data-aos="fade-left"
        className="w-full md:w-2/3 bg-[url('https://websitedemos.net/furniture-store-02/wp-content/uploads/sites/155/2018/01/pic36-free-img.jpg')] bg-center bg-no-repeat bg-cover bg-[#f4f4f4] flex items-center justify-center flex-col py-[50px] md:py-0"
      >
        <div className="w-[70%] md:w-[70%] max-w-full text-center md:text-left">
          <h2 className="font-medium text-[#000000]">{title}</h2>
          <h6 className="mt-3 text-[15px] font-medium text-[#000000]">
            {comment}
          </h6>
          <button
            onClick={() => navigate("/shop")}
            className="mt-4 bg-transparent border border-[#000000] text-[#000000] py-2 px-4 hover:bg-[#000000] hover:text-white transition"
          >
            View Collections
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCollectionItem;