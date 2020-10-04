import React from 'react'

const Archive = ({ announcement, changeContent }) => {
  const uniqueYear = (announcement) => {
    const data = new Map()
    for (const obj of announcement) {
      data.set(obj.publish.split('-')[2], obj)
    }
    const year = [...data.values()]
    return year
  }

  const test = (e, id) => {
    changeContent(id)
  }

  const year = uniqueYear(announcement).map((a, i) => {
    return (
      <div>
        <a href='#' onClick={(e) => test(e, a.publish.split('-')[2])}>
          {a.publish.split('-')[2]}
        </a>
        <hr className='announcementSeperator m-0 p-0'></hr>
      </div>
    )
  })

  return (
    <div class='sidebar shadow-lg'>
      <h4 className='pt-3 pl-3 sidebarTitle'>Archive</h4>
      <hr className='announcementSeperator m-0 p-0'></hr>
      {year}
    </div>
  )
}

export default Archive
