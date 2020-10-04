import React from 'react'
import BoardsAnnouncement from '../boardsAnnouncement/Boards.Announcement'

const Announcements = () => {
  return (
    <section
      style={{
        padding: '10px',
        backgroundColor: '#f6f4f2',
        height: 'auto',
        textAlign: 'left'
      }}
    >
      <div className='container-lg'>
        <div className='row'>
          <div className='col-12 col-md-4'>
            <BoardsAnnouncement />
          </div>
          <div className='col-12 col-md-4'>
            <BoardsAnnouncement />
          </div>
          <div className='col-12 col-md-4'>
            <BoardsAnnouncement />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Announcements
