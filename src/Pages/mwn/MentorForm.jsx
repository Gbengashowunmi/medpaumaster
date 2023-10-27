import React, { useState } from "react";
import emailjs from "emailjs-com";
// import "./contact.scss";
import HeadFoot from "../../component/HeadFoot";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
export default function MentorForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [disable, setDisable] = useState(true);
  const [input, setInput] = useState({
    full_name: "",
    email: "",
    number: "",
    y_o_f_e: "",
    job_role: "",
    mentored: "",
  });

  const navigate = useNavigate();
  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    if (
      input.email &&
      input.job_role &&
      input.y_o_f_e &&
      input.full_name &&
      input.number !== ""
    ) {
      setDisable(false);
    }
  };

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
    emailjs
      .sendForm(
        "service_w8k8na6",
        "template_2irnb4r",
        e.target,
        "LeDuweOEHNt0K5siy"
      )
      .then(
        (result) => {
          setLoading(false);
          setMessage(
            "Details Submitted Succesfully, We'll get in touch with you soon..."
          );

          // to reload after submission
          setTimeout(() => {
            navigate("/", { replace: true });
          }, 4000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <HeadFoot
      pageTitle="Medpau Mentee Form"
      description="Mentorship page || medpau international Limited Healthvest form for installmental payments, enquiries and outright purchase"
    >
      <div className="about-head">
        <div className="image">
          <div className="overlay"></div>
          <source type="image/webp" srcSet="image.webp" />
          <img src="/images/breadcrumb-image-1.jpg" alt="about-us" />
          <div
            className="texts"
            data-aos="zoom-in-right"
            data-aos-offset="50"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h2>MWN</h2>
            <p>
              <MdOutlineHome />
              <NavLink to="/">
                <span>HOME</span>
              </NavLink>{" "}
              <FaChevronRight />
              <span className="active">Medpau Women Network</span>
            </p>
          </div>
        </div>
      </div>
      <form className="finance-form" onSubmit={sendEmail}>
        <h4>
          Kindly fill the form below to signup as a mentor on medpau career
          development
        </h4>
        <p>
          Do you want to be a Mentee?
          <Link to="/mentee-form"> Become a mentee</Link>
        </p>
        <p>{message}</p>
        {/* <input type="hidden" name="contact_number" /> */}
        <TextField
          id="outlined-basic"
          label="Full Name"
          name="full_name"
          variant="outlined"
          className="input"
          onChange={handleInput}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          name="email"
          variant="outlined"
          className="input"
          onChange={handleInput}
        />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          name="number"
          variant="outlined"
          className="input"
          onChange={handleInput}
        />
        <TextField
          id="outlined-basic"
          label="Job Role"
          name="job_role"
          variant="outlined"
          onChange={handleInput}
          className="input"
        />
        <TextField
          id="outlined-basic"
          label="Years of field experience"
          name="y_o_f_e"
          variant="outlined"
          className="input"
          onChange={handleInput}
        />
        {/* <input
          type="checkbox"
          value="yes"
          // id="toolmakerID"
          name="mentored"
          onChange={handleInput}
        /> */}

        {/* mentored before */}
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            <strong>Have you been a mentor before?</strong>
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Yes"
            name="mentored"
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <Button type="submit" value="Send" disabled={disable}>
          {loading ? "Please wait..." : "Submit"}
        </Button>
        <p className="messag">{message}</p>
      </form>
    </HeadFoot>
  );
}
