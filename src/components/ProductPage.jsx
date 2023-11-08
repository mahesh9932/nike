const ProductPage = ({ imgURL, name, price }) => {
  return (
    <div className="m-auto">
      <img src={imgURL} alt={name} width={200} heigh={200} />
      <h3 className="mt-2 font-palanquin font-semibold text-xl">{name}</h3>
      <p className="mt-2 font-palanquin text-coral-red font-semibold">
        {price}
      </p>
    </div>
  );
};
export default ProductPage;
