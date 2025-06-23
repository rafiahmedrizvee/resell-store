import ReviewCard from "./ReviewCard";
import review1 from "../../../assets/images/review1.jpg"
import review2 from "../../../assets/images/review2.jpg"
import review3 from "../../../assets/images/review3.jpg"
import review4 from "../../../assets/images/review4.png"

const reviews = [
  {
    id: 1,
    name: "Rafi Ahmed",
    image: review1,
    review: "Excellent service! I got the latest model at the best price. Highly recommend this shop.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rizvee",
    image: review2,
    review: "Good quality and fast delivery. I'm satisfied with my purchase.",
    rating: 4,
  },
  {
    id: 3,
    name: "Mazharul Alam",
    image: review3,
    review: "Affordable prices and friendly staff. Will shop here again!",
    rating: 5,
  },
  {
    id: 4,
    name: "Roxas",
    image: review4,
    review: "Wide variety of choices and great deals. The website is easy to use too.",
    rating: 4,
  },
];

const ReviewSection = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;