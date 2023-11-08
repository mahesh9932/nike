import { offer, shoe7, shoe8 } from "../assets/images";

const SuperQualityProduct = () => {
  return (
    <div
      className="flex max-sm:flex-col max-sm:gap-10 justify-between max-container w-full"
      id="about-us"
    >
      <div className=" flex flex-1 flex-col gap-10 justify-center">
        <h2 className="text-4xl font-montserrat font-semibold">
          We provide <span className="text-coral-red">Super Quality</span> Shoes
        </h2>
        <p className="text-slate-gray md:max-w-md">
          Ensuring premium confiort style, our meticulously crafted footwear is
          designed to elevate your experience, providing you with unmatched
          quality, innovation and a touch of elegance
          <br />
          <br />
          Our dedication to detail and excellence ensure your satisfaction
        </p>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <img src={shoe8} alt="super quality shoe image" />
      </div>
    </div>
  );
};
export default SuperQualityProduct;
