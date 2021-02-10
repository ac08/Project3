import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import API from "../../utils/API";

export default function GetCadetReg() {
  const [dbProfile, setdbProfile] = useState({
    firstName: "",
    lastName: "",
    age: "",
    graduationYear: "",
    phoneNumber: "",
    email: "",
    branch: "",
    height: "",
    weight: "",
    BMI: "",
    DesiredMilitaryOccupationalSpecialty: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdbProfile({
      ...dbProfile,
      [name]: value,
    });
  };

  const saveProfile = (event) => {
    event.preventDefault();
    API.saveProfile("cadet", dbProfile).then((dbProfile) => {
      console.log("From CadetRegForm.js", dbProfile);
      // clear the form some how!
    });
  };
  return (
    <>
      <Form className="container" style={{ color: "white" }}>
        <Form.Group controlId="formBasicText">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={dbProfile.firstName}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={dbProfile.lastName}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicNumber">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={dbProfile.age}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicNumber">
          <Form.Label>Graduation Year</Form.Label>
          <Form.Control
            type="number"
            name="graduationYear"
            value={dbProfile.graduationYear}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            name="phoneNumber"
            value={dbProfile.phoneNumber}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={dbProfile.email}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Branch</Form.Label>
          <Form.Control
            type="text"
            name="branch"
            value={dbProfile.branch}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicNumber">
          <Form.Label>Height</Form.Label>
          <Form.Control
            type="number"
            name="height"
            value={dbProfile.height}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicNumber">
          <Form.Label>Weight</Form.Label>
          <Form.Control
            type="number"
            name="weight"
            value={dbProfile.weight}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicNumber">
          <Form.Label>BMI</Form.Label>
          <Form.Control
            type="number"
            name="BMI"
            value={dbProfile.BMI}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Desired Occupation</Form.Label>
          <Form.Control
            type="text"
            name="DesiredMilitaryOccupationSpecialty"
            value={dbProfile.DesiredMilitaryOccupationalSpecialty}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Prior Work Experience</Form.Label>
          <Form.Control
            type="text"
            name="priorWorkExperience"
            value={dbProfile.priorWorkExperience}
            onChange={handleInput}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={saveProfile}>
          Submit
        </Button>
      </Form>
    </>
  );
}
