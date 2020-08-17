import React from 'react';
import {
    CardDeck
  } from 'reactstrap';
import "./recentActivity.css";
import RecentActivityCard from "./recentActivityCard.component" 

const RecentActivity =  () => {
  return(
    <CardDeck className="card-deck">
        <RecentActivityCard />
        <RecentActivityCard />
        <RecentActivityCard />
    </CardDeck>
  )
    
}

export default RecentActivity
