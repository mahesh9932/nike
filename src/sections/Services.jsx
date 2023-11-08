import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-20">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </div>
  );
};
export default Services;
