import React, { useEffect, useState } from "react";
import "../component/headFoot.scss";
import { HiMenuAlt3 } from "react-icons/hi";

import {
  FaChevronRight,
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { Button, Divider, Menu, MenuItem } from "@mui/material";
import Modal from "@mui/material/Modal";
import Newsletter from "./newsletterForm/Newsletter";
import { Helmet } from "react-helmet";

export default function HeadFoot({ children, pageTitle, description }) {
  const [isOpen, setIsOpen] = useState(false);
  // show and hide shop Category handler and state
  // const [showShopCategory, setShowShopCategory] = useState(false);
  // const handleShop = () => {
  //   setShowShopCategory(!showShopCategory);
  // };

  // terms and condition
  const [showTerms, setShowTerms] = useState(false);
  const handleTerms = () => {
    setShowTerms(true);
  };

  // mwp modal

  const [openMwpModal, setOpenMwpModal] = useState(false);
  const handleOpenMwpModal = () => setOpenMwpModal(true);
  const handleCloseMwpModal = () => {
    setOpenMwpModal(false);
    setShowTerms(false);
  };

  // healthvest modal
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setShowTerms(false);
  };

  //handle menu toggler
  const handleToggle = () => {
    setIsOpen(!isOpen);
    // setShowShopCategory(false);
  };
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".nav");
    const scrollTop = window.scrollY;
    scrollTop >= 40
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  // menu from material ui
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="head-foot-wrapper">
      <Helmet>
        <title>Medpau {pageTitle}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div
        onClick={handleToggle}
        className={`${isOpen ? "overlay" : "show"}`}
      ></div>
      <header className="nav">
        <div className="comapany-icon">
          <div className="logo">
            <Link to="/">
              <source type="image/webp" srcSet="image.webp" />

              <img
                src="/images/WhatsApp_Image_2023-01-23_at_9.13.05_AM-removebg-preview.png"
                alt="logo"
              />
            </Link>{" "}
          </div>

          <div onClick={handleToggle}>
            <HiMenuAlt3 className={`nav-bar ${isOpen ? "white" : ""}`} />
          </div>
        </div>
        <ul className={`navbar-content ${isOpen ? "open" : ""}`}>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <div className="shop_dropdown_wrapper">
            <li onClick={handleClick}>Shop</li>
          </div>

          {/* shop dropdown  */}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <NavLink to="/shop">
              <MenuItem onClick={handleClose}>See All Products</MenuItem>
            </NavLink>
            <Divider />
            <NavLink to="/shop/Hemodialysis">
              <MenuItem onClick={handleClose}>Go to Hemodialysis</MenuItem>
            </NavLink>
            <Divider />
            <NavLink to="/shop/ICU Equipment">
              <MenuItem onClick={handleClose}>Go to ICU Equipment</MenuItem>
            </NavLink>
            <Divider />
            <NavLink to="/shop/Diagnostic Imaging Equipment">
              <MenuItem onClick={handleClose}>
                Go to Diagnostic Imaging Equipment
              </MenuItem>
            </NavLink>
            <Divider />
            <NavLink to="/shop/Operating Theatre Equipment">
              <MenuItem onClick={handleClose}>
                Go to Operating Theater Equipment
              </MenuItem>
            </NavLink>
            <Divider />
            <NavLink to="/shop/Morgue and Body handling">
              <MenuItem onClick={handleClose}>
                Go to Morgue and Body handling
              </MenuItem>
            </NavLink>
          </Menu>
          {/* shop dropdown ends  */}

          <NavLink to="/service">
            <li>Service</li>
          </NavLink>
          <NavLink to="/our-blogs ">
            <li>Blogs</li>
          </NavLink>
          <NavLink to="/our-projects ">
            <li>Our Projects</li>
          </NavLink>

          {/* <NavLink to="/medpau-women-network"> */}
          <li onClick={handleOpenMwpModal}> Medpau Impact Projects(MIP)</li>
          {/* </NavLink> */}

          <Button
            variant="contained"
            className="appointment-btn"
            onClick={handleOpenModal}
          >
            Healthvest
          </Button>
        </ul>

        {/* modal for mwn  */}

        <Modal
          open={openMwpModal}
          onClose={handleCloseMwpModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="healthvest_wrapper">
            {/* //cancel or close modal button  */}
            <div className="cancel" onClick={handleCloseMwpModal}>
              X
            </div>

            {/* modal header  */}
            {
              <>
                <h2 className="light-blue-bg-text">What do you want to do?</h2>
                <div className="modal-btns">
                  <ul>
                    <NavLink to="/medpau-women-network">
                      <Button className="appointment-btn">
                        Medpau Women Network
                      </Button>
                    </NavLink>
                    <NavLink to="/medpau-women-network">
                      <Button className="appointment-btn">
                        Medpau Graduate Training Program
                      </Button>
                    </NavLink>

                    <NavLink to="/event">
                      <Button className="appointment-btn">Medpau Events</Button>
                    </NavLink>
                    <NavLink to="/mgtp">
                      <Button className="appointment-btn">Careers</Button>
                    </NavLink>
                    {/* <NavLink to="/event">
                      <li>IWD</li>
                    </NavLink> */}
                    <NavLink to="/faq">
                      <Button className="appointment-btn">FAQ</Button>
                    </NavLink>
                  </ul>
                </div>
              </>
            }
          </div>
        </Modal>

        {/* modal for healthvest  */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="healthvest_wrapper">
            <div className="cancel" onClick={handleCloseModal}>
              X
            </div>
            {!showTerms ? (
              <>
                {" "}
                <h2 className="light-blue-bg-text">What is HealthVest?</h2>
                <p>
                  HealthVest is a medical equipment financing platform which
                  facilitates convenient way for individuals and businesses to
                  purchase the necessary goods they need without breaking their
                  bank. With this platform, users are able to spread out
                  payments over a length of time up to five years at competitive
                  interest rates with no hidden costs. This makes it easier for
                  consumers or companies who didn't have the money upfront, but
                  still needed these products, to acquire them - especially
                  those that can be quite costly such as medical imaging
                  devices, diagnostic instruments, ventilators and more.
                  Healthvest also allows people invest in Healthcare by funding
                  assets(medical equipment) and projects for a
                  return-on-investment. They can also find partnerships and
                  become part owners of a healthcare business or set up their
                  own healthcare business.
                </p>{" "}
                <div className="modal-btns">
                  <a href="/files/HEALTHVEST.pdf" download>
                    <Button className="appointment-btn" onClick={handleTerms}>
                      Learn More
                    </Button>
                  </a>
                  <Link to="/financial-support">
                    <Button
                      variant="contained"
                      className="appointment-btn"
                      onClick={handleCloseModal}
                    >
                      Apply for healthvest
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h2 className="light-blue-bg-text">Terms and Condition</h2>{" "}
                <p> More about HealthVest is downloading. kindly read it </p>{" "}
                <div className="modal-btns">
                  <Button
                    variant="contained"
                    className="appointment-btn"
                    onClick={handleCloseModal}
                  >
                    Close
                  </Button>
                  <Link to="/financial-support">
                    <Button
                      variant="contained"
                      className="appointment-btn"
                      onClick={handleCloseModal}
                    >
                      Apply for healthvest
                    </Button>
                  </Link>
                </div>{" "}
              </>
            )}
          </div>
        </Modal>
      </header>

      {children}

      {/* FOOTER */}
      <div className="footer_newsletter">
        <Newsletter />
      </div>
      <footer>
        <div
          className="about"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="30"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <h3>MEDPAU</h3>
          <p>
            At MedPau, we believe smart innovations in healthcare is key to
            advancement of a society which translates to better economy and
            quality of life.
          </p>
          <ul>
            <Link to="//www.facebook.com/Medpau1" target="_blank">
              <li>
                <FaFacebookF />
              </li>
            </Link>
            <a href="mailto:Info@medpau.net">
              <li>
                <FaGooglePlusG />
              </li>
            </a>
            <Link to="//linkedin.com/company/medpau/" target="_blank">
              <li>
                <FaLinkedinIn />
              </li>
            </Link>
            <Link
              to="//twitter.com/medpauintl?s=11&t=zBroa9mFl_fitJFK1HbUcQ"
              target="_blank"
            >
              <li>
                <FaTwitter />
              </li>
            </Link>
          </ul>
        </div>
        <div
          className="courses"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="30"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div className="head">
            <h3>Medpau Impact Projects </h3>
            <hr />
          </div>
          <ul>
            <NavLink
              to="/medpau-women-network"
              target="blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>
                <FaChevronRight />
                Medpau Women Network (MWN)
              </li>
            </NavLink>
            <NavLink
              to="//medpauimpacts.com/mgtp/"
              target="blank"
              rel="noopener noreferrer"
            >
              <li>
                <FaChevronRight />
                Medpau Graduate Training Program
              </li>
            </NavLink>
            <NavLink
              to="//medpauimpacts.com/wkd/"
              target="blank"
              rel="noopener noreferrer"
            >
              {" "}
              <li>
                <FaChevronRight />
                World Kidney Day
              </li>
            </NavLink>
            <NavLink to="/event">
              <li>
                <FaChevronRight />
                Events - International Women's Day
              </li>
            </NavLink>
            <NavLink to="/faq">
              <li>
                <FaChevronRight />
                FAQ
              </li>
            </NavLink>
          </ul>
        </div>
        <div
          className="recent-posts"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="30"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div className="head">
            <h3>Recent Posts</h3>
            <hr />
          </div>
        </div>
        <div
          className="contact-us"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="30"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div className="head">
            <h3>Contact Us</h3>
            <hr />
          </div>
          <ul>
            <li>
              <FaPhone />{" "}
              <a href="tel:+2349085323596">
                <span>+234908 532 3596</span>{" "}
              </a>
            </li>
            <a href="tel:+233256885072">
              <li>
                {" "}
                <FaPhone /> <span>+23325 688 5072</span>{" "}
              </li>
            </a>

            <a href="mailto:Info@medpau.net">
              <li>
                <MdEmail /> <span>Info@medpau.net</span>
              </li>
            </a>
            <li>
              <MdLocationPin />
              <span>3, Tunde Gafar Close, Off Adeniyi Jones, Ikeja, Lagos</span>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
