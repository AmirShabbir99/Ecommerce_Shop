import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-2 items-center pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-10">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Bin Sadiq Cosmatics
            </h1>
            <p>
              Your one-stop shop for all your cosmetic needs. We provide high-
              quality beauty products at affordable prices.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2  sm:grid-cols-2  md:pl-10">
           

            {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Lahore ,Pakistan</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>0309 2972551</p>
                </div>
                 <div className="flex items-center gap-3 mt-3">
                  <p>m.amirshabbir99@gmail.com</p>
                </div>
<div className="flex items-center gap-3 mt-3">
                 <p className="text-gray-200 dark:text-gray-100 text-sm">
        &copy; {new Date().getFullYear()} Amir Shabbir. All rights reserved.
      </p>
      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
