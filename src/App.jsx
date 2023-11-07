import Nav from "./components/Nav";
import { Hero } from "./sections";
const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section id="#hero" className="padding-l max-xl:padding-r padding-b z-10">
        <Hero />
      </section>
      <section>Popular Products</section>
      <section>Super Quality</section>
      <section>Services</section>
      <section>Special offer</section>
      <section>Customer Reviews</section>
      <section>Subscribe</section>
      <section>Footer</section>
    </main>
  );
};

export default App;
