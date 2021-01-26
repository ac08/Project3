import React from "react";
import { Card, Button } from "react-bootstrap";
import logo from "./athlete.png"


export default function FrontCard({flipCard, profile}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{profile.firstName}</Card.Title>
        <Card.Text>
          {profile.profileType} 
        </Card.Text>
        <Card.Text>
          Summary of some of the information that is in the database.
        </Card.Text>
        <Button onClick={flipCard} variant="dark">Click to Flip</Button>
      </Card.Body>
    </Card>
  )
}