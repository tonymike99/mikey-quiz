import { v4 as uuid } from "uuid";
import bcyrpt from "bcryptjs";

/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Guest",
    lastName: "User",
    email: "guest_user@gmail.com",
    password: bcyrpt.hashSync("12345", 5),
  },
];
