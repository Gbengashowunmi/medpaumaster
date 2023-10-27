import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./blog.scss";
import { blog } from "../Data";
export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    setBlogs(blog);
  }, []);

  return blogs.map((blog) => {
    const { title, id, image, shortDescription, link, date } = blog;

    return (
      <Link to={link} key={id} target="_blank">
        <div className="blog_wrapper">
          <img src={image} alt={title} />
          <section className="description">
            <h4>{title}</h4>
            <p className="short_desc">
              {`${shortDescription}`.substring(0, 35)}...
            </p>
            <p className="date">{date}</p>
            <Link to={link}>
              <span>
                <p>Read more</p> <FaChevronRight />
              </span>
            </Link>
          </section>
        </div>
      </Link>
    );
  });
}
