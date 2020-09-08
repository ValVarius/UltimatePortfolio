const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const path = require("path");
require("dotenv").config();

const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

const accessToken = oauth2Client.getAccessToken();

const PORT = process.env.PORT || 3001;

// console.log(process.env.PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: "valvarius1@gmail.com",
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: accessToken,
  },
});

app.post("/api/form", (req, res) => {
  console.log(req.body.mailState);

  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
        <li>Name: ${req.body.mailState.name}
        <li>Email: ${req.body.mailState.email}
        </ul>
        <h3>Message</h3>
        <p>${req.body.mailState.message}</p>
        `;

    var mailOptions = {
      from: "valvarius1@gmail.com",
      to: "notitiami@gmail.com, notitiami@yahoo.com",
      subject: "Sending Email with Secure OAuth using Node.js[nodemailer]",
      html: htmlEmail,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return res.send(err);
      } else {
        transporter.close();
        console.log("Message sent: %s", info.accepted);
        console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));

        res.send(info);
      }
    });
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
