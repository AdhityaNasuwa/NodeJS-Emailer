const { rejects } = require("assert");
const { resolve } = require("path");
const nodemailer = require("nodemailer");
const temp = require("./temp");
const chalk = require("chalk");

const kirimEmail = (email, cc, bcc, subjek, type) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sk1.community025@gmail.com",
      pass: "sk1.password",
    },
  });

  const mailOptions = {
    from: "sk1.community025@gmail.com",
    name: "Google",
    to: email,
    cc: cc,
    bcc: bcc,
    subject: subjek,
    html: "<center>" + temp(type) + "</center>",
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log("Email sent: " + info.response);
    statusCode("Berhasil", "Email telah terkirim");
  });
};

const statusCode = (status, keterangan) => {
  console.clear();
  if (status == "Berhasil") {
    var warna = "green";
  } else {
    var warna = "red";
  }
  console.log(
    chalk`{yellow Status : {${warna} ${status}} \nKeterangan :\n{${warna} ${keterangan}}}`
  );
};

module.exports = { kirimEmail, statusCode };
