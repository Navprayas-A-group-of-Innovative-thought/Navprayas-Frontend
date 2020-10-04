import React from 'react'
import { Col, Row, Container } from 'reactstrap'
import './recentActivity.css'
import RecentActivityCard from './recentActivityCard.component'

const RecentActivity = () => {
  return (
    <section className='activity-section'>
      <Container>
        <Row>
          <Col className='text-center'>
            <h4>Recent Activity</h4>
          </Col>
        </Row>
        <Row>
          <Col xs='12' md='4'>
            <RecentActivityCard />
          </Col>
          <Col xs='12' md='4'>
            <RecentActivityCard />
          </Col>
          <Col xs='12' md='4'>
            <RecentActivityCard />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default RecentActivity
