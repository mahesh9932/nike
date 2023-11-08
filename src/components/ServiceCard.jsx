const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="shadow-3xl w-full py-6 px-4 rounded-3xl">
      <div className=" rounded-full bg-coral-red  w-12 h-12 flex justify-center items-center">
        <img src={imgURL} alt="icon" />
      </div>

      <h2 className="text-2xl font-semibold font-montserrat my-4">{label}</h2>
      <p className="info-text">{subtext}</p>
    </div>
  );
};
export default ServiceCard;
