const { getConnection } = require("../database/database.js");

const getUsers = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM `customer-solutions-db`.user_db;"
    );
    res.json(result);
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
};
const addUser = async (req, res) => {
  try {
    const {
      name,
      email,
      job,
      position,
      employee_number,
      sector,
      experience,
      country,
      city,
      customers,
      people,
      process,
      strategy,
      index,
    } = req.body;

    if (
      name === undefined ||
      email === undefined ||
      job === undefined ||
      position === undefined ||
      employee_number === undefined ||
      sector === undefined ||
      experience === undefined ||
      country === undefined ||
      city === undefined ||
      customers === undefined ||
      people === undefined ||
      process === undefined ||
      strategy === undefined ||
      index === undefined
    ) {
      res.status(400).json({ message: "Bad request. Please fill all fields" });
    }
    const user = {
      name,
      email,
      job,
      position,
      employee_number,
      sector,
      experience,
      country,
      city,
      customers,
      people,
      process,
      strategy,
      index,
    };

    const connection = await getConnection();
    const result = await connection.query("INSERT INTO user_db SET ?", user);

    res.json({ message: "Usuario añadido" });
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
};

module.exports = {
  getUsers,
  addUser,
};
