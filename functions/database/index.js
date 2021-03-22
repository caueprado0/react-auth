const { connect: MongoConnect } = require("mongoose");
const DotEnv = require("dotenv");
const packageJson = require("pjson");
const pickBy = require("lodash.pickby");

DotEnv.config();

const host = process.env.MONGODB_HOST || "localhost";
const port = process.env.MONGODB_PORT || 27017;
const database = process.env.MONGODB_DATABASE || packageJson.name;

const url = process.env.MONGODB_URL
  ? process.env.MONGODB_URL
  : `mongodb://${host}:${port}/${database}`;

exports.connect = async () => {
  await MongoConnect(
    url,
    pickBy(
      {
        user: process.env.MONGODB_USERNAME || null,
        pass: process.env.MONGODB_PASSWORD || null,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
      },
      null
    )
  );
};
