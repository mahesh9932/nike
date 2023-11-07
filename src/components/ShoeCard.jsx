const ShoeCard = ({ shoe, setBigShoe, bigShoe }) => {
  const clickHandler = () => {
    setBigShoe(shoe.bigShoe);
  };
  return (
    <div
      className={`border-2 bg-hero bg-cover bg-center rounded-xl p-4 max-md:p-1 max-sm:rounded-full ${
        bigShoe == shoe.bigShoe ? "border-coral-red" : "border-white"
      }`}
      onClick={clickHandler}
    >
      <img
        src={shoe.thumbnail}
        alt="shoe image"
        width={"100px"}
        height={"80px"}
      ></img>
    </div>
  );
};
export default ShoeCard;
