const formattedReturn = require("./helpers/formattedReturn");

const getUsers = require("./helpers/getUsers");
const createUser = require("./helpers/createUser");
const deleteUser = require("./helpers/deleteUser");
const updateUser = require("./helpers/updateUser");

exports.handler = async (event) => {
  const { httpMethod = "GET" } = event;
  if (httpMethod === "GET") {
    return await getUsers(event);
  } else if (httpMethod === "POST") {
    return await createUser(event);
  } else if (httpMethod === "PUT") {
    return await updateUser(event);
  } else if (httpMethod === "DELETE") {
    return await deleteUser(event);
  } else {
    return formattedReturn(405, {});
  }
};
