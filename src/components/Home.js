import React from "react";

const Home = () => {
  return (
    <div className="home__container flex flex-col justify-center items-center align-middle h-[80vh] bg-no-repeat">
      <div className="home__info flex justify-center items-center flex-col">
        <div className="home__title mb-6">
          <h1 className="text-5xl font-bold">ShareCourses</h1>
        </div>
        <div className="home__subtitle text-3xl m-3">
          <h2>
            Here you get the best course from the best faculties from all over
            the world
          </h2>
        </div>
        <div className="home__button mt-4">
          <button className="btn btn-primary border-black border-2 rounded-3xl px-5 py-2 bg-black text-white font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
