import React from 'react'

const BoardAnnouncemetLinks = ({announcement}) => {
	const linkComponent  = announcement.map((a, i) => {
		return(
				<li>
					<i className="fas fa-angle-double-right"></i>
	        		<a href="#">{announcement[i].announce}</a>
	        		<p className="publishedDate">{announcement[i].publish}</p> 
	        		<hr className="announcementSeperator"></hr>
	        	</li>
	        )
	})
	return(
		<div>
			{linkComponent}
		</div>
	)
}


export default BoardAnnouncemetLinks;