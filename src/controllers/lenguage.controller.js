const { getConnection } = require("./../database/database.js");

const getUsers = async (req, res) => {
  const connection = await getConnection();
  const result = await connection.query(
    "SELECT * FROM `customer-solutions-db`.user_db;"
  );

  console.log(result);

  res.json(result);
};

module.exports = {
  getUsers,
};
