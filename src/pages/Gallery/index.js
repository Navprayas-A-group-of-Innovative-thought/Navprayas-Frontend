import React, { useState } from 'react';
import Modal from './Modal.js'
import ImageGrid from './Image.grid'
import './Gallery.css'

const pics = [
    {
        pic: "/assets/gallery/1.jpg",
        title:"Title",
        detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae tempore, ipsam"
    },
    {
        pic: "/assets/gallery/2.jpg",
        title:"Title",
        detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae tempore, ipsam"
    },
    {
        pic: "/assets/gallery/3.jpg",
        title:"Title",
        detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae tempore, ipsam"
    },
    {
        pic: "/assets/gallery/4.jpg",
        title:"Title",
        detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae tempore, ipsam"
    },
    {
        pic: "/assets/gallery/5.jpg",
        title:"Title",
        detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae tempore, ipsam"
    },
    {
        pic: "/assets/gallery/6.jpg",
        title:"Title",
        detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae tempore, ipsam"
    },
    {
        pic: "/assets/gallery/7.jpg",
        title:"Title",
        detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae tempore, ipsam"
    }

]

const Gallery = () => {

    const [selectedImg, setSelectedImg] = useState(null);
    const [checkWidth, setCheckWidth] = useState(true);

    const mobileWidth = (event) => {
        if(window.innerWidth < 768){
            setCheckWidth(false);
        }
        else{
            setCheckWidth(true);
        }
    }

    window.addEventListener("resize", mobileWidth);

    return(
        <>
            <div className="container text-center" style={{marginTop:'69px'}}>
                <h1 className="display-1">GALLERY</h1>
                <div className="Galleryline1 mt-2 mx-auto"></div>
                <div className="Galleryline2 mt-1 mb-5 mx-auto"></div>
                <ImageGrid pics={pics} setSelectedImg={setSelectedImg}/>
                { selectedImg && checkWidth && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
            </div>
        </>
    );

}

export default Gallery;