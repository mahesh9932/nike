import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="text-center mt-12">
      <div className=" m-auto flex object-fill object-center w-[100px] h-[100px] rounded-full overflow-hidden">
        <img src={imgURL} alt="customer-image" />
      </div>
      <p className="mt-2 font-semibold font-montserrat">{customerName}</p>
      <div className="flex m-auto justify-center gap-2 mt-2">
        <img src={star} />
        <p>({rating})</p>
      </div>
      <p className="mt-2 info-text">{feedback}</p>
    </div>
  );
};
export default ReviewCard;
