import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import Spinner from "../Spinner";

export default function MailForm() {
  const [mailState, setMailState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isloading, setIsLoading] = useState({
    status: false,
    messageSent: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMailState({
      ...mailState,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(mailState);
    setIsLoading({
      status: true,
    });

    axios
      .post("/api/form", {
        mailState,
      })
      .then((res) => {
        console.log(res);

        setMailState({
          name: "",
          email: "",
          message: "",
        });
        setIsLoading({
          status: false,
          messageSent: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container badge" id="mailBadge">
      <div className="top">
        <div className="dot" id="mailDot"></div>
      </div>

      <form className="bottom" id="form">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="form-group">
          <label htmlFor="name">Leave Your Name</label>
          <input
            value={mailState.name}
            type="text"
            name="name"
            className="form-control"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email address</label>
          <input
            value={mailState.email}
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">A Message For Me</label>
          <textarea
            value={mailState.message}
            className="form-control"
            name="message"
            rows="4"
            onChange={handleInputChange}
          ></textarea>
        </div>

        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleFormSubmit}
          disabled={isloading.status}
        >
          {isloading.status && <Spinner />}
          {isloading.status && <span>Sending</span>}
          {!isloading.status && <span>Send</span>}
        </button>

        <p>
          {isloading.messageSent && <br />}
          {isloading.messageSent && <span>Thank you for your message!</span>}
        </p>
        <br />
      </form>
    </div>
  );
}
