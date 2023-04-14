require('dotenv').config({ path: "./src/.env" }); //con esto se puede acceder al archivo env y aca ya estamos con un objeto llamado process

const STATUS_OK = 200;
const STATUS_ERROR = 404;
const DB_EMAIL = process.env.EMAIL ||"miguel@hotmail.com";
const DB_PASSWORD = process.env.PASSWORD || "@Model101";

function login(req, res) {
  const { password, email } = req.query;
  //login?email= adas&password=asdasd
  console.log(
    "lo que recibo es---->" +
      DB_PASSWORD +
      password +
      "y el email es ---->" +
      DB_EMAIL
  );

  if (!password || !email) {
    return res.status(500).json({ message: "Missing password or email" });
  }
  if (password === DB_PASSWORD && email === DB_EMAIL) {
    res.status(STATUS_OK).json({ access: true });
  } else {
    res.status(STATUS_ERROR).json({ access: false });
  }
}

module.exports = { login };
