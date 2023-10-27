import { FaPhone } from "react-icons/fa";
import HeadFoot from "../../component/HeadFoot";
import PageHead from "../../component/pageHead/PageHead";
import "./mwn.scss";
import ChooseUsCard from "../../component/chooseUsCard/ChooseUsCard";
import TeamMember from "../../component/teamMember/TeamMember";
import TeamMwn from "../../component/teamMember/TeamMwn";
import { Link, NavLink } from "react-router-dom";
import { Button, Modal } from "@mui/material";
import { useState } from "react";

export default function Mwn() {
  // mwp modal
  const [openMwpModal, setOpenMwpModal] = useState(false);
  const handleOpenMwpModal = () => setOpenMwpModal(true);
  const handleCloseMwpModal = () => {
    setOpenMwpModal(false);
    // setShowTerms(false);
  };
  return (
    <HeadFoot
      pageTitle="Medpau Women Network"
      description="Medpau Women Network"
    >
      <PageHead
        heading="Medpau Women Network"
        image="/images/breadcrumb-image-1.jpg"
        capsHead="MWN"
      />
      <aside className="what-about-us">
        <div className="img">
          <source type="image/webp" srcSet="image.webp" />
          <img src="/images/mwn-hero.jpeg" alt="about-us" />
        </div>
        <div className="details">
          <h4 className="light-blue-bg-text">
            ABOUT MEDPAU WOMEN NETWORK (MWN){" "}
          </h4>
          <p>
            Medpau Women Network is an Impact program under Medpau International
            Limited, designed to provide empowerment to women in healthcare
            careers, facilitating career growth and professional development.
            The aim of this initiative is to groom women, especially in the
            healthcare industry, towards a great career start and endless
            progress. The Women's network also provides a sense of community to
            women, providing them with adequate support and a safe environment
            which encourages inclusion, networking and personal development.{" "}
            <br /> <br /> We are an impact driven community, providing support,
            mentorship and platform for women in healthcare to grow, develop
            their capacity and rise in their career. Our goal is to build a
            network of impact driven women tearing down barriers, challenging
            the status, driving change, rise to top leadership positions and in
            turn, create opportunities for those coming behind them.
          </p>
        </div>
      </aside>

      {/* about mwn  */}
      <section className="about_mwn">
        <h3 className="light-blue-bg-text">What MWN stands for</h3>

        <div className="choose-us-wrapper">
          <div className="vision_wrapper mwp_vision">
            {/* mission  */}
            <div
              className="vision_mission"
              data-aos="zoom-in"
              data-aos-offset="20"
              data-aos-delay="10"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <h3>Our Mission</h3>
              <p>
                To build a community of impact-driven women who would be
                equipped to rise above barriers in the work place, creating more
                growth opportunities for healthcare career women in Nigeria, and
                beyond.
              </p>
            </div>
            {/* vision  */}
            <div
              className="vision_mission"
              data-aos="zoom-in"
              data-aos-offset="20"
              data-aos-delay="10"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <h3>Our Vision</h3>
              <p>
                To create a network of women who are confident, self-reliant and
                impact-driven leaders in the society, who contribute to societal
                development and human empowerment.
              </p>
            </div>

            {/* core values  */}
            <div
              className="vision_mission"
              data-aos="zoom-in"
              data-aos-offset="20"
              data-aos-delay="10"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <h3>Our Core Values</h3>
              <p>
                Our values are that all women, not just in the healthcare
                community alone, become self-sustaining, well respected,
                authentic, and truly empowered.
                {/* The MWN is committed to
                enhancing women's skills to support their advancement in their
                respective workplace. We are a learning organization as we
                encourage our women to take risks and make mistakes, to learn
                and grow and get better, stronger, and smarter. */}
                <ul>
                  <li>Empowerment</li>
                  <li>Integrity</li>
                  <li>Resilience</li>
                  <li>Leadership Development</li>
                </ul>
              </p>
            </div>

            {/* <img src="/images/about_us.jpg" alt="" /> */}
          </div>

          {/* core values  */}
          <div className="core_values">
            <div className="core_value_head ">
              <h3 className="light-blue-bg-text">What we do</h3>
              {/* <p>
                Our values are that all women, not just in the healthcare
                community alone, become self-sustaining, well respected,
                authentic, and truly empowered. The MWN is committed to
                enhancing women's skills to support their advancement in their
                respective workplace. We are a learning organization as we
                encourage our women to take risks and make mistakes, to learn
                and grow and get better, stronger, and smarter.
              </p> */}
            </div>
            <div className="values_wrapper">
              <div
                className="core_value"
                data-aos="zoom-in"
                data-aos-offset="20"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <h5 className="value_head">Networking</h5>
                <img src="/images/networking.jpg" alt="" />
                <p>
                  Networking more than ever is the key to getting ahead. We are
                  a create a community where professional women in healthcare
                  can connect, receive or give support and build or strengthen
                  relationships and connections within the industry.
                </p>
              </div>
              <div
                className="core_value"
                data-aos="zoom-in"
                data-aos-offset="20"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <h5 className="value_head">Capacity Building</h5>
                <img src="/images/capacity-building.jpg" alt="" />
                <p>
                  Developing and strengthening the instincts, and abilities of
                  women in healthcare and empowering them with the skills they
                  need to adapt, survive, and thrive in a fast-changing world.
                  This can be in form of workshops, or seminars.
                </p>
              </div>

              <div
                className="core_value"
                data-aos="zoom-in"
                data-aos-offset="20"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <h5 className="value_head">Mentorship</h5>
                <img src="/images/mentorship.jpg" alt="" />

                <p>
                  Providing a safe place where women in their entry and
                  mid-level career can ask question, gain deeper insights about
                  the industry, receive feedback and criticism needed grow. It
                  also provides opportunities for more experienced women to
                  impact younger professionals and give back to the society.
                </p>
              </div>
              <div
                className="core_value"
                data-aos="zoom-in"
                data-aos-offset="20"
                data-aos-delay="10"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <h5 className="value_head">Leadership Development</h5>
                <img src="/images/leadership.jpg" alt="" />

                <p>
                  Grooming young professional women to challenges status quo,
                  and redefine possibilities. The essence in transformation that
                  comes from within, so they can rise up to managerial and
                  leadership roles. They will in turn become advocates and
                  create opportunities for coming behind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* tree section  */}
      <section className="tree">
        <h5>
          With confidence, capacity, community, and the right collaborations,
          any woman can achieve anything.
        </h5>
        <div
          className="tree_content"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img src="/images/medpau-women.png" alt="" />
          <img src="/images/achieve.jpg" alt="" />
        </div>
      </section>

      {/* mwn section  */}
      <section className="choose-us">
        <h3>Medpau Women Network (MWN) Mentoring Program</h3>

        <p>
          Do you know what all female high achievers' women have in common?
          Someone who helped them see themselves in ways they may not otherwise
          see in themselves, someone who held their hands and helped them
          unleash their inner strength, someone who pushed them to grow and
          guided them through it. <br /> MWN Mentoring Program is designed to
          empower women and help them build skills needed to get ahead in their
          career and rise to leadership positions. It models young women in the
          healthcare industry into high performers, high achievers and agents of
          change.
        </p>
        {/* why sign up  */}
        <h3 className="light-blue-bg-text">
          Why sign up for MWN Mentoring Program?
        </h3>
        <p className="why_sgn_up">
          The MWN Mentoring program is designed to facilitates professional
          growth at different stages in your career journey, through
          collaborative learning, hands on projects, group discussion,
          peer-to-peer learning, 1-on-1 conversations. It creates a free and
          safe space where you to ask questions, receive support, build
          confidence, gain new perspectives and deeper insight into the
          Healthcare industry. <br />
          You will engage in group discussions, 1-on-1 as well as peer-to-peer
          learning. You will also engage with leaders from Senior and Management
          positions, benefit from their rich experiences and knowledge of the
          industry. They will also help you navigate your current challenges as
          well as challenges you are likely going to encounter in the future.
          You will also build strong and lifelong professional relationship, and
          connections. <br />
          By the time you finish this program, you will be able to clearly
          define and set your career goals, be guided to achieve them, receive
          and apply constructive feedback necessary to achieve those goals. You
          will chart your career path and build new skills needed to take on new
          roles, challenge yourself and rise to higher positions in your career.
        </p>
      </section>

      {/* our programs  */}

      <section className="our_programs choose-us">
        <h3 className="light-blue-bg-text">Our Programs</h3>

        <ul>
          <li>
            <strong> Career seminars:</strong> These are workshops and
            presentations open to all students in the medical field, aimed at
            providing them with a stepping ground into the career world as a
            healthcare professional.
          </li>
          <li>
            <strong>Membership Program: </strong> This program is accessible to
            paid early, mid and advanced healthcare professionals. With an
            annual membership fee of <strong> #3,000 only</strong>, participants
            of the mentorship program have access to the following; <br />{" "}
            <br />
            <p>✓ Capacity Building workshops</p>
            <p>✓ Leadership Seminars </p>
            <p>✓ Mentoring programs</p>
            <p>✓ Community Engagement programs</p>
            <p>✓ Impact Programs.</p>
          </li>
        </ul>
      </section>
      {/* team members  */}
      <section className="team-wrapper">
        <h4 className="light-blue-bg-text head">Meet The Team</h4>
        <TeamMwn />
      </section>

      <section className="footnote">
        <h5>Would you like to </h5>
        <ul>
          <Link to="/mwn-form">
            <li> Sign up for membership ?</li>
          </Link>
          <li> Become a volunteer ?</li>
          <li onClick={handleOpenMwpModal}> Sign up for mentorship ?</li>
          <li> See Upcoming Events ?</li>
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
            <>
              <h2 className="light-blue-bg-text">Sign up for mentorship</h2>
              <div className="modal-btns">
                <ul>
                  <NavLink to="/mentee-form">
                    <Button className="appointment-btn">
                      Sign up as a Mentee
                    </Button>
                  </NavLink>
                  <NavLink to="/mentor-form">
                    <Button className="appointment-btn">
                      Sign up as a Mentor
                    </Button>
                  </NavLink>
                </ul>
              </div>
            </>
          </div>
        </Modal>
      </section>
    </HeadFoot>
  );
}
