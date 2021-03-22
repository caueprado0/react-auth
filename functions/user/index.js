import { create } from "./crud";

exports.handler = async (event) => {
  const { httpMethod = "GET" } = event;
  switch (httpMethod) {
    case "POST":
      return create(event);
    default:
      return {
        statusCode: 405,
        body: JSON.stringify({}),
      };
  }
};
