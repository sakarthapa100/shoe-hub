import { useState } from "react";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import React from "react";
import { shoes, statistics } from "../constants";
import { bigShoe1, bigShoe2} from "../assets/images";
import ShoeCard from "../components/ShoeCard";
const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection{" "}
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold ">
          <span className="relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Shoe-hub </span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg  leading-8 mt-6 mb-14 sm:max-w-sm ">
          Discover stylish Nike arrivals , quality comfort and innovation for
          your life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value} </p>
              <p className=" leading-7 font-montserrat text-slate-gray">
                {stat.label}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
<div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-h-screen max-xl:py-40 bg-primary bg-hero bg-cover xl:mt-[8rem]">
<img src={bigShoeImg} alt="hero-image" height={500} width={600} className="object-contain relative z-10"
/>

<div className="flex absolute sm:gap-6 gap-4 -bottom-[10%] sm:left-[10%]  ">
  {shoes.map((shoe)=>(
    <div key={shoe}>
<ShoeCard
imgURL ={shoe}
changeBigShoeImg= {(shoe)=> setbigShoeImg(shoe)}
bigShoeImg={bigShoeImg}
/>
    </div>
  ))}
</div>
</div>

    </section>
  );
};

export default Hero;
