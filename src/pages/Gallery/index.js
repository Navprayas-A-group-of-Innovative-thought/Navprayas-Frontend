import React, { useState } from "react";
import Modal from "../../components/Gallery.imagegrid/Modal";
import ImageGrid from "../../components/Gallery.imagegrid";
import "./Gallery.css";
import Team from "../../components/Gallery.team";
import galleryImages from "../../shared/galleryImages";

const pics = galleryImages.pics;
const teams = galleryImages.teams;
console.log(pics);


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
