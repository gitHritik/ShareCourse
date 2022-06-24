import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    company: "",
    job: "",
    message: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.value;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, company, job, message } = user;
    const response = await axios.post("/contact", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        company,
        job,
        message,
      }),
    });
    const res = await response.json();
    console.log(res);
  };

  return (
    <div className="contact__container">
      <h1 className="text-center text-3xl font-bold m-3  mb-3">Contact us</h1>
      <div className="contact__Bigcontainer flex justify-between align-middle items-center ">
        <div className="contact_info mb-[95px] flex flex-col justify-center align-middle items-center w-[100%]">
          <div className="contact__title">
            <h2 className="font-bold text-3xl m-7">
              <h1 className="font-bold text-3xl m-7">Get your demo</h1>
            </h2>
          </div>
          <div className="contact__desc">
            <p>
              See why leading organizations choose ShareCourse Business as their
              destination for employee learning.
            </p>
          </div>
          <div className="contact__demo">
            <div className="contact__demoTitle">
              <h3 className="font-bold text-2xl m-7">
                In your demo, learn more about:{" "}
              </h3>
            </div>
            <div className="contact__demoDesc">
              <ol className="list-disc">
                <li>
                  Unlimited access to 16,000+ top courses selected from
                  ShareC.in – anytime, on any device
                </li>
                <li>
                  Fresh content taught by global instructors – for any learning
                  style
                </li>
                <li>Actionable learning insights and admin functionality</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="contact__form ">
          <form method="POST" className="flex flex-col pr-[87px] py-[2px] ">
            <input
              className="w-[400px] focus:outline-none border-2 border-[#dfd3d3] rounded-lg  py-[11px] px-[8px] mx-[10px] my-[1px]"
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputs}
              onch
              placeholder="Email"
              required={true}
            />
            <input
              className="border-2 focus:outline-none  border-[#dfd3d3] rounded-lg py-[11px] px-[8px] mx-[10px] my-[1px]"
              type="text"
              placeholder="name"
              name="name"
              value={user.name}
              onChange={handleInputs}
              required={true}
            />
            <input
              className="border-2 focus:outline-none  border-[#dfd3d3] rounded-lg py-[11px] px-[8px] mx-[10px] my-[1px]"
              type="text"
              placeholder="Company Name"
              name="company"
              value={user.company}
              onChange={handleInputs}
              required={true}
            />
            <input
              className="border-2 focus:outline-none  border-[#dfd3d3] rounded-lg py-[11px] px-[8px] mx-[10px] my-[1px]"
              type="text"
              placeholder="Job Title"
              required={true}
            />
            <textarea
              className="border focus:outline-none -2 border-[#dfd3d3] rounded-lg py-[11px] px-[8px] mx-[10px] my-[1px]"
              placeholder="What are your training needs?"
              name="message"
              value={user.message}
              onChange={handleInputs}
              required={true}
            ></textarea>
            <button
              onClick={PostData}
              className="navbar_loginBu focus:outline-none tton m-3  rounded-[30px] cursor-pointer  border-[#dfd3d3] border-2 px-7 py-2 font-semibold hover:bg-black hover:text-white"
            >
              Get In Touch
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
