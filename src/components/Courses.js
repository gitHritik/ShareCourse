import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useState } from "react";

const courses = [
  {
    title: "The Complete Web Developer Course",
    price: "₹455",
    image: "/images/webDev.png",
    info: "Web develpomet course include 30 hours on-demand video,143 articlesFull lifetime accessAccess on mobile and TVCertificate of completion and many more stuff",
  },
  {
    title: "C++: From Beginner to Expert Course",
    price: "₹455",
    image: "/images/c++.jpg",
    info: "C++ course include 17 hours on-demand video9 articles119 downloadable resourcesFull lifetime accessAccess on mobile and TVCertificate of completion",
  },
  {
    title: "The Complete Python Pro Bootcamp for 2022",
    price: "₹455",
    image: "/images/python.jpg",
    info: "Python course include 17 hours on-demand video9 articles119 downloadable resourcesFull lifetime accessAccess on mobile and TVCertificate of completion",
  },
  {
    title: "The Complete Python Pro Bootcamp for 2022",
    price: "₹455",
    image: "/images/python.jpg",
    info: "Python course include 17 hours on-demand video9 articles119 downloadable resourcesFull lifetime accessAccess on mobile and TVCertificate of completion",
  },
  {
    title: "The Complete Web Developer Course",
    price: "₹455",
    image: "/images/webDev.png",
    info: "Web develpomet course include 30 hours on-demand video,143 articlesFull lifetime accessAccess on mobile and TVCertificate of completion and many more stuffs",
  },
  {
    title: "The Complete Python Pro Bootcamp for 2022",
    price: "₹455",
    image: "/images/python.jpg",
    info: "Python course include 17 hours on-demand video9 articles119 downloadable resourcesFull lifetime accessAccess on mobile and TVCertificate of completion",
  },
];

const Courses = () => {
  const [enroll, setEnrool] = useState(false);
  async function handleToken(token, courses) {
    const response = await axios.post("http://localhost:8080/checkout", {
      token,
      courses,
    });
    const { status } = response.data;
    if (status === "success") {
      alert("Success! Check email for details", { type: "success" });
      setEnrool(true);
    } else {
      alert("Something went wrong", { type: "error" });
    }
  }
  return (
    <>
      <div className="courses__container flex flex-col justify-center align-center  items-center">
        <div className="courses__title">
          <h2 className="font-bold text-3xl m-7">Courses We Provide</h2>
        </div>

        <div className="course__cartContainer mt-[24px] grid grid-cols-3 self-center ">
          {courses.map((course, index) => (
            <div className="course__cart border-2 rounded-xl border-black mb-14 ml-16 w-[80%]">
              <div className="course__cartlogo">
                <img src={course.image} alt="" />
              </div>
              <div className="course_cartInfo flex justify-center items-center flex-col">
                <div className="course__cartTitle mt-3 mx-3">
                  <h1 className="font-semibold text-xl">{course.title}</h1>
                </div>

                <div className="course__cartDetails mt-3 mx-3">
                  <p className="fontmedium">{course.info}</p>
                </div>
                <div className="course__cartPrice">
                  <h1 className="text-lg">
                    {" "}
                    <span className="font-semibold text-xl"> Price :</span>{" "}
                    {course.price}
                  </h1>
                </div>
                <div className="course__buttons flex ">
                  {enroll ? (
                    <StripeCheckout
                      token={handleToken}
                      stripeKey="pk_test_51KaimASI6i4F9vZjKiOFaruoefN681OFGYax24iLCFM6bQF9QKPIdkdQNTMTPspbqePx25Y9EY2yab2nMAjy0nVq001vrBNDfJ"
                      amount={course.price * 100}
                      name={course.title}
                      billingAddress
                      shippingAddress
                    >
                      <button className=" m-2 rounded-[30px] cursor-pointer  border-black border-2 px-5 py-1 font-semibold hover:bg-black hover:text-white mb-3">
                        Enroll
                      </button>
                    </StripeCheckout>
                  ) : (
                    <React.Fragment>
                      <StripeCheckout
                        token={handleToken}
                        stripeKey="pk_test_51KaimASI6i4F9vZjKiOFaruoefN681OFGYax24iLCFM6bQF9QKPIdkdQNTMTPspbqePx25Y9EY2yab2nMAjy0nVq001vrBNDfJ"
                        amount={course.price * 100}
                        name={course.title}
                        billingAddress
                        shippingAddress
                      >
                        <button className=" m-2 rounded-[30px] cursor-pointer  border-black border-2 px-5 py-1 font-semibold hover:bg-black hover:text-white mb-3">
                          Buy Now
                        </button>
                      </StripeCheckout>

                      <StripeCheckout
                        token={handleToken}
                        stripeKey="pk_test_51KaimASI6i4F9vZjKiOFaruoefN681OFGYax24iLCFM6bQF9QKPIdkdQNTMTPspbqePx25Y9EY2yab2nMAjy0nVq001vrBNDfJ"
                        amount={course.price * 100}
                        name={course.title}
                        billingAddress
                        shippingAddress
                      >
                        <button className=" rounded-[30px] cursor-pointer  border-black border-2 px-5 py-1 m-2 mb-3 font-semibold hover:bg-black hover:text-white">
                          Add To Cart
                        </button>
                      </StripeCheckout>
                    </React.Fragment>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
