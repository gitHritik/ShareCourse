import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer__container bg-black text-white h-[56vh]">
      <div className="footer__containerLinks flex justify-around p-16  items-center align-middle">
        <div className=" footer_company">
          <h1 className="font-bold text-xl my-3">Company</h1>
          <ul>
            <li className="hover:underline hover:text-[#00FF84] ">
              <a className="font-normal" href="/">
                About
              </a>
            </li>
            <li className="hover:underline hover:text-[#00FF84]">
              <a className="font-normal" href="/">
                Careers
              </a>
            </li>
            <li className="hover:underline hover:text-[#00FF84]">
              <a className="font-normal" href="/">
                Press
              </a>
            </li>
            <li className="hover:underline hover:text-[#00FF84]">
              <a className="font-normal" href="/">
                Blog
              </a>
            </li>
            <li className="hover:underline hover:text-[#00FF84]">
              <a className="font-normal" href="/">
                Afilliate
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__communtiy">
          <h1 className="font-bold text-xl my-3">Community</h1>
          <ul>
            <li className="hover:underline hover:text-[#00FF84]">
              <a className="font-normal" href="/">
                About
              </a>
            </li>
            <li className="hover:underline hover:text-[#00FF84]">
              <a className="font-normal" href="/">
                Team plans
              </a>
            </li>
            <li className="hover:underline hover:text-[#00FF84]">
              <a className="font-normal" href="/">
                Refer a freind
              </a>
            </li>
            <li className="hover:underline hover:text-[#00FF84]">
              <a className="font-normal" href="/">
                Limited Memberships
              </a>
            </li>
            <li className="hover:underline hover:text-[#00FF84]">
              <a className="font-normal" href="/">
                Scholarships
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__teaching mb-5">
          <h1 className="font-bold text-xl my-3">Teaching</h1>
          <ul>
            <li className="hover:underline hover:text-[#00FF84]">
              <a className="font-normal" href="/">
                Becoming a teacher
              </a>
            </li>
            <li className="hover:underline hover:text-[#00FF84]">
              <a className="font-normal" href="/">
                Teaching Academy
              </a>
            </li>
            <li className="hover:underline hover:text-[#00FF84]">
              <a className="font-normal" href="/">
                Teacher Handbook
              </a>
            </li>
            <li className="hover:underline hover:text-[#00FF84]">
              <a className="font-normal" href="/">
                Patnerships
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_domain">&copy;shareC.in 2022</div>
      </div>
      <div className="navbar__menu border-t-2 mx-16 border-t-[#00FF84] ">
        <ul className="flex space-x-8 mr-6 mt-5">
          <Link
            activeClass="active"
            to="home__container"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li className="hover:underline hover:text-[#00FF84]">
              <a className="font-normal" href="/">
                Home
              </a>
            </li>
          </Link>
          <Link
            activeClass="active"
            to="about__container"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li className="hover:underline hover:text-[#00FF84]">
              <a className="font-normal" href="/">
                About us
              </a>
            </li>
          </Link>
          <Link
            activeClass="active"
            to="courses__container"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li className="hover:underline hover:text-[#00FF84]">
              <a className="font-normal" href="/">
                Courses
              </a>
            </li>
          </Link>
          <Link
            activeClass="active"
            to="reviews__container"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li className="hover:underline hover:text-[#00FF84]">
              <a className="font-normal" href="/">
                Reviews
              </a>
            </li>
          </Link>
          <Link
            activeClass="active"
            to="contact__container"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li className="hover:underline hover:text-[#00FF84]">
              <a className="font-normal" href="/">
                Contact
              </a>
            </li>
          </Link>
          <div className="footer_domain">&copy;shareC.in 2022</div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
