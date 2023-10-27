import React from "react";
import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
// import ProductCard from "./productCard/ProductCard";
import TeamMember from "./TeamMember";
export default function TeamMwn() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="item">
        <TeamMember
          image="/images/rejoice.jpeg"
          name="REJOICE AZODO-PAUL"
          position="Founder and managing director"
        />
      </div>
      <div className="item">
        <TeamMember
          image="/images/ESTHER.jpg"
          name="GODWINS ESTHER"
          position="President"
        />
      </div>
      <div className="item">
        <TeamMember
          image="/images/debby.jpeg"
          name="Deborah Ayeko"
          position="Vice President"
        />
      </div>
      <div className="item">
        <TeamMember
          image="/images/promise 2.jpg"
          name="promise Iheanacho"
          position="Pr & Communications"
        />
      </div>
      <div className="item">
        <TeamMember
          image="/images/blessing.jpeg"
          name="Blessing Opara"
          position="membership coordinator"
        />
      </div>

      <div className="item">
        <TeamMember
          image="/images/judith.jpeg"
          name="Judith Obasi"
          position="Programs Coordinator
"
        />
      </div>
    </Slider>
  );
}
