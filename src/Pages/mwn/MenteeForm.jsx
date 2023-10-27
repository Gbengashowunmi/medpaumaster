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
export default function MenteeForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [disable, setDisable] = useState(true);
  const [input, setInput] = useState({
    full_name: "",
    email: "",
    number: "",
    category: "",
    level: "",
    expectations: "",
  });

  const navigate = useNavigate();
  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    if (
      input.email &&
      input.full_name &&
      input.number &&
      input.expectations !== ""
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
        "template_icvln69",
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
      pageTitle="Medpau Women Network Form"
      description="Mentorship page || medpau international Limited Healthvest form for instalmental payments, enquiries and outright purchase"
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
            <h2>MENTEE FORM</h2>
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
          Kindly fill the form below to signup as a mentee on medpau career
          development
        </h4>
        <p>
          Do you want to be a Mentor?{" "}
          <Link to="/mentor-form">Become a mentor</Link>
        </p>
        <p>{message}</p>
        <input type="hidden" name="contact_number" />
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
        {/* //Categories */}
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            <strong>Category</strong>
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Student"
            name="category"
          >
            <FormControlLabel
              value="Student"
              control={<Radio />}
              label="Student"
            />
            <FormControlLabel
              value="Professional"
              control={<Radio />}
              label="Professional"
            />
          </RadioGroup>
        </FormControl>
        {/* level */}
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            <strong>Level</strong>
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Entry Level"
            name="level"
          >
            <FormControlLabel
              value="Entry Level"
              control={<Radio />}
              label="Entry Level"
            />
            <FormControlLabel
              value="Mid Level"
              control={<Radio />}
              label="Mid Level"
            />
          </RadioGroup>
        </FormControl>
        {/* //expectations  */}
        <TextField
          id="outlined-multiline-static"
          label="What are your expectations?"
          multiline
          rows={5}
          name="expectations"
          defaultValue="I expect "
          onChange={handleInput}
        />
        <Button
          type="submit"
          value="Send"
          disabled={disable}
        >
          {loading ? "Please wait..." : "Submit"}
        </Button>
        <p className="messag">{message}</p>
      </form>
    </HeadFoot>
  );
}
