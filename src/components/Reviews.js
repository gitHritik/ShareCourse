import React from "react";

const reviews = [
  {
    name: "John Doe",
    rating: "🌟🌟🌟🌟🌟",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Hritik Roshan",
    rating: "🌟🌟🌟",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Riya Patel",
    rating: "🌟🌟🌟🌟",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=61",
  },
  {
    name: "Dhnanjay Bhatia",
    rating: "🌟🌟🌟",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
];

const Reviews = () => {
  return (
    <div className="reviews__container flex flex-col justify-center align-middle items-center m-5">
      <h2 className="text-center text-3xl font-bold m-3  mb-3">Reviews</h2>
      <div className="reviews__cartContainer flex justify-center flex-col items-center">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="reviews__cart flex bg-[#f0eff2] rounded-[18px] px-[16px] py-[27px] border-2 border-[#dfd3d3] justify-center items-center m-5 border-b-2  "
          >
            <div className="reviews__cartInfo ml-7 ">
              <div className="review__starRating ">
                <span>{review.rating} </span>
              </div>
              <div className="review__cartReview">
                <p className="font-medium text-base">{review.desc} </p>
              </div>
              <div className="review__name mb-3">
                <p className="font-bold underline text-lg">{review.name} </p>
              </div>
            </div>
            <div className="reviews__cartLogo w-[19%] h-[84px] mb-[42px] border-2 border-black rounded-[62%] mx-4">
              <img
                className="w-[100%] h-[12vh] rounded-[72%]"
                src={review.image}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
