import ProductPage from "../components/ProductPage";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section>
      <h2 className="text-4xl leading-normal font-palanquin font-semibold">
        Our <span className="text-coral-red">Popular</span> Products
      </h2>
      <p className=" text-slate-gray md:max-w-xl">
        Experince top notch quality and style with our sought-after
        selections.Discover a world of comfort, design and value{" "}
      </p>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-10 mt-12">
        {products.map((product) => (
          <ProductPage key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};
export default PopularProducts;
