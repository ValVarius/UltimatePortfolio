const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
require("dotenv").config();
console.log(process.env.PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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

    // var transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   host: "smtp.gmail.com",
    //   port: 465,
    //   secure: true,
    //   auth: {
    //     user: "valvarius1@gmail.com",
    //     pass: process.env.PASSWORD,
    //   },
    // });

    // var mailOptions = {
    //   from: "valvarius1@gmail.com",
    //   to: "notitiami@gmail.com, notitiami@yahoo.com",
    //   subject: "Sending Email using Node.js[nodemailer]",
    //   html: htmlEmail,
    // };

    var transporter = nodemailer.createTransport({
      service: "yahoo",
      host: "smtp.mail.yahoo.com",
      port: 465,
      secure: false,
      auth: {
        user: "valvarius1@yahoo.com",
        pass: process.env.PASSWORD,
      },
      debug: false,
      logger: true,
    });

    var mailOptions = {
      from: "valvarius1@yahoo.com",
      to: "notitiami@gmail.com, notitiami@yahoo.com",
      subject: "Sending Email using Node.js[nodemailer]",
      html: htmlEmail,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return res.send(err);
      }

      console.log("Message sent: %s", info.accepted);
      console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));

      res.send(info);
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
