import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My name is <span className="purple">Iamagenus </span>
            from <span className="purple"> Pittsburgh, PA.</span>
            <br /> I am a self taught Web Crafter and also have a BS in Business Administration
            <br />
            Additionally, I am currently employed as a software developer and ecommerce specialist at
            R&L Supply.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing PC Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Spending time with my wife and my daughter
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Iamagenus</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
