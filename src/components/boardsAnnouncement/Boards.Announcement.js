import React from 'react'
import './Boards.Announcement.css'
import BoardsAnnouncementLinks from './Boards.Announcement.Links'
import { Link } from 'react-router-dom'
import { announcemets } from '../../shared/announcement'

// Boards Announcement Start-------
const BoardsAnnouncement = (props) => {
  return (
    <>
      <div className='mt-3 w-100 ml-4'>
        <h3 className='boardTitle title font-weight-bold'>ANNOUNCEMENTS</h3>
        <div className='line1'></div>
        <div className='line2'></div>
      </div>
      <div className='card'>
        <div className='card-body scroll'>
          <BoardsAnnouncementLinks announcement={announcemets} />
        </div>
        <div class='card-footer bg-transparent border-0'>
          <Link to='/viewAllAnnouncement' className='cbtn btn'>
            VIEW ALL ANNOUNCEMENTS
          </Link>
        </div>
      </div>
    </>
  )
}

export default BoardsAnnouncement
