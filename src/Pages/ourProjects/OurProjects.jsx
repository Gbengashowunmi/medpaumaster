import React, { useEffect, useState } from "react";
import HeadFoot from "../../component/HeadFoot";
import PageHead from "../../component/pageHead/PageHead";
import "./ourprojects.scss";
import { videos } from "../../component/Data";
export default function OurProjects() {
  const [video, setVideos] = useState([]);

  useEffect(() => {
    setVideos(videos);
  }, []);
  console.log(video);
  return (
    <HeadFoot
      pageTitle="Our Projects"
      description="Projects page of medpau international Limited"
    >
      <PageHead
        heading="Our Projects"
        image="/images/breadcrumb-image-1.jpg"
        capsHead="OUR PROJECTS"
      />
      <section className="videos">
        {video &&
          video.map((video) => {
            const { videoUrl, id, description, title } = video;

            return (
              <div className="video_wrapper" key={id}>
                <div className="decription">
                  <h5 style={{textTransform:"uppercase"}}>{title}</h5>
                  <p>{description}</p>
                </div>
                <iframe
                  width="560"
                  height="315"
                  src={videoUrl}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="frame"
                ></iframe>
              </div>
            );
          })}
      </section>
    </HeadFoot>
  );
}
