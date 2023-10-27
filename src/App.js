import React from "react";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ScrollToTopNav from "./component/ScrollToTopNav";
import Shop from "./Pages/shop/Shop";
import ProductDetail from "./Pages/ProductDetails/ProductDetail";
import Service from "./Pages/service/Service";
import Faq from "./Pages/FAQ/Faq";
import About from "./Pages/about/About";
import Mgtp from "./Pages/mgtp/Mgtp";
import Payment from "./Pages/payment/Payment";
import Event from "./Pages/event/Event";

import Category from "./Pages/category/Category";
import ChatMuna from "./component/ChatMuna";
import HealthVestForm from "./Pages/healthvest_form/HealthVestForm";
import DeliveryForm from "./Pages/delivery/DeliveryForm";
import Error404 from "./Pages/404/Error404";
import OurBlogs from "./Pages/ourBlogs/OurBlogs";
import Mwn from "./Pages/mwn/Mwn";
import MwnForm from "./Pages/mwn/MwnForm";
import MenteeForm from "./Pages/mwn/MenteeForm";
import MentorForm from "./Pages/mwn/MentorForm";
import OurProjects from "./Pages/ourProjects/OurProjects";
// import Mwn2 from "./Pages/mwn/Mwn2";
  
AOS.init();
function App() {
  return (
    <div className="App">
      <ChatMuna />
      <BrowserRouter>
        {/* scroll to top icon  */}
        <ScrollToTop className="scroll_up" smooth={true} />
        {/* scroll to top of the page on new page  */}
        <ScrollToTopNav />

        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="shop" element={<Shop />}></Route>
          <Route path="payment" element={<Payment />}></Route>
          <Route path="mgtp" element={<Mgtp />}></Route>
          <Route path="event" element={<Event />}></Route>
          <Route path="financial-support" element={<HealthVestForm />}></Route>
          <Route path="medpau-women-network-form" element={<MwnForm />}></Route>
          <Route path="our-blogs" element={<OurBlogs />}></Route>
          <Route path="faq" element={<Faq />}></Route>
          <Route path="details/:id" element={<ProductDetail />}></Route>
          <Route path="shop/:category" element={<Category />}></Route>
          <Route path="service" element={<Service />}></Route>
          <Route path="medpau-women-network" element={<Mwn />}></Route>
          {/* <Route path="medpau-women-network" element={<Mwn2 />}></Route> */}
          <Route path="mwn-form" element={<MwnForm />}></Route>
          <Route path="our-projects" element={<OurProjects />}></Route>
          <Route path="mentee-form" element={<MenteeForm />}></Route>
          <Route path="mentor-form" element={<MentorForm />}></Route>
          <Route path="deliveryform" element={<DeliveryForm />}></Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
