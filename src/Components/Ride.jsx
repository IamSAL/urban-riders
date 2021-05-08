import React from "react";
import { SubmitButton } from "./StyledComponents/StyledComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const Ride = () => {
  return (
    <div className="ridefinalpage ">
      <div className="ride-page-msg">
        <h3>Thanks for Trying!</h3>
        <p>
          Your rider is never gonna arrive as its just a demo app to practice
          react-router,oauth and opensource map apis. You can see the soure
          below.
        </p>
        <div className="actions">
          <SubmitButton as={Link} to="/">
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>view again
          </SubmitButton>
          <SubmitButton
            as="a"
            target="_blank"
            href="https://github.com/IamSAL/urban-riders"
            style={{ backgroundColor: "gray" }}
          >
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>View Source
          </SubmitButton>
        </div>
      </div>
    </div>
  );
};

export default Ride;
