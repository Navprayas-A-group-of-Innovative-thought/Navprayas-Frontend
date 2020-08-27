import React from 'react';

const Image = ({ pic }) => {
    return(
        <>
            <div className="GalleryImageDiv">
                <img className="GalleryImage" src={pic} alt="1"/>
                <div className="details">
                    <h4>Rangotsavdsad</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae tempore, ipsam</p>
                </div>
            </div>
        </>
    );
}

export default Image;