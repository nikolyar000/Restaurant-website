import React from 'react'
import Image1 from "../../assets/hero/women.png"
import Image2 from "../../assets/hero/shopping.png"
import Image3 from "../../assets/hero/sale.png"

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        {/* background pattern */}
        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45-z-9"></div>
        {/* hero section */}
        <div className="container pb-8 sm:pb-0">
            <div>
                <div className="grid-cols-1 sm:grid-cols-2">
                    {/* text content section */}
                    <div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">Lorem ipsum dolor sit.

                        </h1>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, repellat 
                            ipsum!
                        </p>
                        <div>
                            <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 founded-full">
                                Order Now
                            </button>
                        </div>
                    </div>
                    {/* text content section */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero