import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

const reviews: Review[] = [
  {
    author_name: "Thusitha Ratnayake",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjViu86V26tI9ME_EcTP2_MrkubZs0Vu5F7BvWsn8kcfJ8JAspxcJw=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    text: "Designed photo frames  for my sister's and brother's birthdays,and more they were better than expected.Packaging was exceptional. loved your service hope to continue working with you, keep up the good work. Highly recommended, Best in the field.",
    relative_time_description: "3 years ago",
  },
  {
    author_name: "Andrew Rajendran",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjXe5r2t1PTKJZnM2R48ipVKouVwm06zflGF6GELA2XsuUDj2DM=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    text: "The photo quality was extremely good. The frame, the design and all in all it was just simply great. If you are looking for a place to get photo frames done for a reasonable amount then InstaPrint is just the right place. I will most certainly be giving my next orders and you should too.",
    relative_time_description: "3 years ago",
  },
  {
    author_name: "Ramin Premaratne",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjUgXnRJ06GxfqpzlT58Q1CCRsRFPzENaAuI1MYZSq9EuZvRhlCM6w=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    text: "Amazing quality, unbeatable prices, and fantastic service. InstaPrint has it all. You won't go wrong if you choose to order from here. I will definitely be using their services for all my future printing, framing and editing needs.",
    relative_time_description: "3 years ago",
  },
];

const RatingStars = ({ rating }: { rating: number }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<StarIcon key={i} className="text-yellow-400" />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<StarHalfIcon key={i} className="text-yellow-400" />);
    } else {
      stars.push(<StarOutlineIcon key={i} className="text-yellow-400" />);
    }
  }

  return <div className="flex">{stars}</div>;
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="flex items-center justify-center gap-2">
            <RatingStars rating={4.8} />
            <span className="text-lg font-semibold text-gray-700">
              4.8 Rating on Google
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex flex-col items-center mb-6">
                <div className="relative mb-4">
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <FormatQuoteIcon
                    className="absolute -bottom-2 -right-2 text-pink-500 bg-white rounded-full p-1 shadow-lg"
                    style={{ fontSize: "2rem" }}
                  />
                </div>
                <RatingStars rating={review.rating} />
                <h4 className="font-semibold text-lg mt-2">
                  {review.author_name}
                </h4>
                <p className="text-gray-500 text-sm">
                  {review.relative_time_description}
                </p>
              </div>
              <blockquote className="text-gray-700 text-center relative">
                <p className="line-clamp-4 text-sm leading-relaxed">
                  "{review.text}"
                </p>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://maps.google.com/?cid=15056250815353847544"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <img
              src="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png"
              alt="Google"
              className="w-6 h-6"
            />
            <span>Read more reviews on Google</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
