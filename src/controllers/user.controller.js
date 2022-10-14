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
      date,
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
      pregunta_0,
      pregunta_1,
      pregunta_2,
      pregunta_3,
      pregunta_4,
      pregunta_5,
      pregunta_6,
      pregunta_7,
      pregunta_8,
      pregunta_9,
      pregunta_10,
      pregunta_11,
      pregunta_12,
      pregunta_13,
      pregunta_14,
      pregunta_15,
      pregunta_16,
      pregunta_17,
      pregunta_18,
      pregunta_19,
      pregunta_20,
      pregunta_21,
      pregunta_22,
      pregunta_23,
      pregunta_24,
      pregunta_25,
      pregunta_26,
      pregunta_27,
      pregunta_28,
      pregunta_29,
    } = req.body;

    if (
      date === undefined ||
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
      index === undefined ||
      pregunta_0 === undefined ||
      pregunta_1 === undefined ||
      pregunta_2 === undefined ||
      pregunta_3 === undefined ||
      pregunta_4 === undefined ||
      pregunta_5 === undefined ||
      pregunta_6 === undefined ||
      pregunta_7 === undefined ||
      pregunta_8 === undefined ||
      pregunta_9 === undefined ||
      pregunta_10 === undefined ||
      pregunta_11 === undefined ||
      pregunta_12 === undefined ||
      pregunta_13 === undefined ||
      pregunta_14 === undefined ||
      pregunta_15 === undefined ||
      pregunta_16 === undefined ||
      pregunta_17 === undefined ||
      pregunta_18 === undefined ||
      pregunta_19 === undefined ||
      pregunta_20 === undefined ||
      pregunta_21 === undefined ||
      pregunta_22 === undefined ||
      pregunta_23 === undefined ||
      pregunta_24 === undefined ||
      pregunta_25 === undefined ||
      pregunta_26 === undefined ||
      pregunta_27 === undefined ||
      pregunta_28 === undefined ||
      pregunta_29 === undefined
    ) {
      res.status(400).json({ message: "Bad request. Please fill all fields" });
    }
    const user = {
      date,
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
      pregunta_0,
      pregunta_1,
      pregunta_2,
      pregunta_3,
      pregunta_4,
      pregunta_5,
      pregunta_6,
      pregunta_7,
      pregunta_8,
      pregunta_9,
      pregunta_10,
      pregunta_11,
      pregunta_12,
      pregunta_13,
      pregunta_14,
      pregunta_15,
      pregunta_16,
      pregunta_17,
      pregunta_18,
      pregunta_19,
      pregunta_20,
      pregunta_21,
      pregunta_22,
      pregunta_23,
      pregunta_24,
      pregunta_25,
      pregunta_26,
      pregunta_27,
      pregunta_28,
      pregunta_29,
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
