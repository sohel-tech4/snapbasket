import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-screen px-6">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
        <img
          src="https://i.ibb.co.com/Nr24jJm/pngtree-visualizing-e-commerce-in-benin-through-3d-rendering-for-social-media-image-3640688.jpg"
          alt="Snap Basket Featured Product"
          className="md:max-w-max w-max rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
        />
        <div className="text-center lg:text-left">
          <h1 className="md:text-6xl text-4xl font-extrabold text-[#1E88E5]">
            Welcome to Snap Basket
          </h1>
          <p className="py-6 text-lg text-gray-600">
            Discover a wide variety of top-quality products, from everyday
            essentials to exclusive deals. Shop with confidence and save more on
            every purchase!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn bg-[#FA552F] btn-lg text-white hover:bg-[#1E88E5] hover:text-white ">
              Shop Now
            </button>
            <button className="btn btn-outline btn-lg border-[#1E88E5] text-[#1E88E5] hover:bg-[#1E88E5] hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
