import { connect } from "../../database";
import user from "../model";

export const create = async function (event) {
  try {
    await connect();
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
