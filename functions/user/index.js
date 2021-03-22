// const { create } = require("./crud");

exports.handler = async (event) => {
  const { httpMethod = "GET" } = event;
  switch (httpMethod) {
    case "GET":
      return { statusCode: 200, body: JSON.stringify({}) };
    case "POST":
      // return create(event);
      return { statusCode: 202, body: JSON.stringify({}) };
    default:
      return {
        statusCode: 405,
        body: JSON.stringify({}),
      };
  }
};
