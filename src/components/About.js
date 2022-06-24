import React from "react";

const About = () => {
  return (
    <div
      className="about__container flex
    flex-col justify-center align-middle items-center "
    >
      <div
        className="about__info flex flex-col justify-center items-center text-black"
        style={
          {
            //   backgroundImage: `url("/images/about.webp")`,
          }
        }
      >
        <h1 className="font-bold text-4xl m-7">About Us</h1>
        <div className="about__title m-4">
          <h2 className="font-semibold text-3xl ">
            Inspire and grow with people
          </h2>
        </div>
        <div className="about__subtitle mx-16 m-4 mb-4">
          <p className="text-2xl">
            At ShareCourse we’ve seen again and again how the seemingly simple
            act of creating can be a force for growth, change, and discovery in
            people’s lives. We want to inspire and multiply the kind of creative
            exploration that furthers expression, learning and application.
          </p>
        </div>
      </div>
      <div className="about__hire flex flex-col  items-center mt-8">
        <div className="about__hire-title">
          <h2 className="font-bold text-3xl mt-3 mb-3">What we hire?</h2>
        </div>
        <div className="cartContainer flex justify-around items-center mt-7">
          <div className="hire__cart mr-[148px]">
            <div className="hire_Cartlogo">
              <img className="w-[100px]" src="/images/hire1.svg" alt="" />
            </div>
            <div className="hire__cartSubtitle w-[143px]">
              <h1 className="font-bold text-xl mb-2">Members to</h1>
              <p>Get inspired. Learn new skills. Make discoveries.</p>
            </div>
          </div>
          <div className="hire__cart mr-[148px]">
            <div className="hire_Cartlogo">
              <img className="w-[100px]" src="/images/hire2.svg" alt="" />
            </div>
            <div className="hire__cartSubtitle w-[143px]">
              <h1 className="font-bold text-xl mb-2">Employees to</h1>
              <p>Share expertise. Earn money. Give back.</p>
            </div>
          </div>
          <div className="hire__cart">
            <div className="hire_Cartlogo">
              <img className="w-[100px]" src="/images/h3.svg" alt="" />
            </div>
            <div className="hire__cartSubtitle w-[143px]">
              <h1 className="font-bold text-xl mb-2">Teachers to</h1>
              <p>Be curious. Make an impact. Live a full life.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
