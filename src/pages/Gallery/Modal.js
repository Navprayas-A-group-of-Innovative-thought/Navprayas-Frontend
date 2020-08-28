import React from 'react';

const Modal = ({ selectedImg, setSelectedImg }) => {

    const closeClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    }

    return(
        <div className="backdrop w-100 h-100" onClick={ closeClick }>
            <img className="d-block mw-60"src={ selectedImg } alt="enlarged pic" />
        </div>
    );
}

export default Modal;