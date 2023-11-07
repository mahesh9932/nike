import { useState } from "react";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

const Hero = () => {
  const [bigShoe, setBigShoe] = useState(bigShoe1);

  return (
    <section className="flex flex-col xl:flex-row justify-center align-center min-h-screen gap-10 max-container">
      <div className="xl:w-2/5 pt-28 z-10">
        <p className=" text-coral-red font-montserrat mb-10">
          Our Summer Collections
        </p>
        <h1 className="text-8xl max-sm:text-[70px] max-sm:leading-[80px]">
          <span className="xl:bg-white  xl:whitespace-nowrap  relative pr-10">
            The New Arrival
          </span>
          <br />
          <span className=" text-coral-red ">Nike</span> Shoes
        </h1>
        <p className=" text-slate-500 sm:max-w-sm mt-4">
          Discover stylish nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <div className="flex  flex-wrap w-full justify-start  max-sm:gap-6 gap-16   items-center mt-5">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className=" text-4xl">{stat.value}</p>
              <p className=" text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className=" bg-hero bg-cover bg-center flex flex-1 justify-center items-center relative">
        <img
          src={bigShoe}
          alt="shoe image"
          width={601}
          height={502}
          // className="relative z-10"
        />
        <div className="absolute flex gap-5 xl:gap-15 -bottom-[15px] max-md:-bottom-[45px]">
          {shoes.map((shoe) => (
            <ShoeCard shoe={shoe} setBigShoe={setBigShoe} bigShoe={bigShoe} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
