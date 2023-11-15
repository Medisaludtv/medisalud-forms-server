const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema(
  {
    name: {
      type: String
    },
    surname: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    phone: {
      type: Number
    },
    userLevel: {
      type: Number
    }
  }
);

export const Users = mongoose.model("Users", UsersSchema);