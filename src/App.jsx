import CustomerReviews from "./components/CustomerReviews";
import Nav from "./components/Nav";
import { Footer, Hero, SuperQualityProduct } from "./sections";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section id="home" className="padding-l max-xl:padding-r padding-b z-10">
        <Hero />
      </section>
      <section className="padding pt-0" id="products">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQualityProduct />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="  bg-slate-300 py-6">
        <CustomerReviews />
      </section>
      <section className="bg-black padding" id="contact-us">
        <Footer />
      </section>
    </main>
  );
};

export default App;
