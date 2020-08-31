import React, { useState } from "react";
import Modal from "./Modal.js";
import ImageGrid from "./Image.grid";
import "./Gallery.css";
import Team from "./team";

const pics = [
  {
    pic: "/assets/Gallery/1.JPG",
    title: "Title",
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae tempore, ipsam",
  },
  {
    pic: "/assets/Gallery/2.JPG",
    title: "Title",
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae tempore, ipsam",
  },
  {
    pic: "/assets/Gallery/3.JPG",
    title: "Title",
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae tempore, ipsam",
  },
  {
    pic: "/assets/Gallery/4.JPG",
    title: "Title",
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae tempore, ipsam",
  },
  {
    pic: "/assets/Gallery/5.JPG",
    title: "Title",
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae tempore, ipsam",
  },
  {
    pic: "/assets/Gallery/6.JPG",
    title: "Title",
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae tempore, ipsam",
  },
  {
    pic: "/assets/Gallery/7.JPG",
    title: "Title",
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae tempore, ipsam",
  },
];

const teams = [
  {
    pic: "/assets/Gallery/1.JPG",
    name: "Title",
    designation:
      "Lorem ipsum dolor",
  },
  {
    pic: "/assets/Gallery/2.JPG",
    name: "Title",
    designation:
      "Lorem ipsum dolor",
  },
  {
    pic: "/assets/Gallery/3.JPG",
    name: "Title",
    designation:
      "Lorem ipsum dolor",
  },
]

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [checkWidth, setCheckWidth] = useState(true);

  const mobileWidth = (event) => {
    if (window.innerWidth < 768) {
      setCheckWidth(false);
    } else {
      setCheckWidth(true);
    }
  };

  window.addEventListener("resize", mobileWidth);

  return (
    <>
      <div className="container text-center" style={{ marginTop: "69px" }}>
        <h1 className="display-1">GALLERY</h1>
        <div className="Galleryline1 mt-2 mx-auto"></div>
        <div className="Galleryline2 mt-1 mb-5 mx-auto"></div>
        <ImageGrid pics={pics} setSelectedImg={setSelectedImg} />
        {selectedImg && checkWidth && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
        <h1 className="display-1 mt-5">Our Team</h1>
        <div className="Galleryline1 mx-auto"></div>
        <div className="Galleryline2 mt-1 mb-5 mx-auto"></div>
        <Team team={teams}/>
      </div>
    </>
  );
};

export default Gallery;
