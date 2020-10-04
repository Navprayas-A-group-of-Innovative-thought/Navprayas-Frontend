import React from 'react'

const ImageGrid = ({ pics, setSelectedImg }) => {
  return (
    <div className='row'>
      {pics.map((p) => {
        return (
          <div className='col-md-6 col-lg-4 pr-0'>
            <div style={{ marginBottom: '10px' }}>
              <div
                className='GalleryImageDiv'
                onClick={() => setSelectedImg(p.pic)}
              >
                <figure>
                  <img className='w-100' src={p.pic} alt={p.title} />
                </figure>
                <div className='details w-100 h-100'>
                  <h4>{p.title}</h4>
                  <p>{p.detail}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ImageGrid
