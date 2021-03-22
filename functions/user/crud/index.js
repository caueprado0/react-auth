const { connect } = require("../../database");
const user = require("../model");

const create = async (event) => {
  try {
    await connect;
    const body = JSON.parse(event.body);

    const result = user
      .findOneAndUpdate(
        {
          email: body.email,
        },
        body,
        {
          upsert: true,
          setDefaultsOnInsert: true,
          new: true,
        }
      )
      .lean();

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error }),
    };
  }
};

module.exports = { create };
