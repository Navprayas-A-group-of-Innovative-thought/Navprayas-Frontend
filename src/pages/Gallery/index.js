import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "./image";
import "./Gallery.css";

const gallery = [
  {
    id: 0,
    image: "/assets/gallery/1.jpg",
  },
  {
    id: 1,
    image: "/assets/gallery/2.jpg",
  },
  {
    id: 2,
    image: "/assets/gallery/3.jpg",
  },
  {
    id: 3,
    image: "/assets/gallery/4.jpg",
  },
  {
    id: 4,
    image: "/assets/gallery/5.jpg",
  },
  {
    id: 5,
    image: "/assets/gallery/6.jpg",
  },
  {
    id: 0,
    image: "/assets/gallery/7.jpg",
  },
];

const Gallery = () => {
  return (
    <>
      <Container className="text-center" style={{ marginTop: "69px" }}>
        <h1 className="GalleryTitle">GALLERY</h1>
        <div className="Galleryline1"></div>
        <div className="Galleryline2"></div>
        <Row>
          {gallery.map((img) => {
            return (
              <div key={img.id} className="col-6 col-md-4">
                <Image pic={img.image} />
              </div>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Gallery;
