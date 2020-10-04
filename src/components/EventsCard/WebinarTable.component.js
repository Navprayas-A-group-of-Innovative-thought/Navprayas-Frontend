import React from 'react'

const WebinarTable = (props) => {
  return (
    <>
      <tr>
        <th scope='row'>{props.sr}</th>
        <td>{props.date}</td>
        <td>{props.name}</td>
        <td>{props.platform}</td>
        <td>
          <a href={props.knowMore}>Watch on youtube</a>
        </td>
      </tr>
    </>
  )
}

export default WebinarTable
