import { reviews } from "../constants";
import ReviewCard from "./ReviewCard";

const CustomerReviews = () => {
  return (
    <div className=" text-center max-w-md m-auto ">
      <h2 className="text-3xl font-montserrat font-semibold">
        What Our <span className="text-coral-red">Customer</span> Says?
      </h2>
      <p className="mt-4 info-text">
        Hear Genuine Stories from our satisfied customers about thier
        exceptional experiences with us
      </p>
      {reviews.map((review) => (
        <ReviewCard key={review.customerName} {...review} />
      ))}
    </div>
  );
};
export default CustomerReviews;
