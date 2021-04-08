import { NextApiRequest, NextApiResponse } from "next";
// import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

const KEY = `${process.env.JWTSECRET}`;

interface User {
  username: string;
  password: string;
  role: string;
}

const authUsers: User[] = [
  { username: "marcin", password: "marcin", role: "admin" },
  // { username: "samsung", password: "SmsNG531$*", role: "admin" },
];

export const Login = (req: NextApiRequest, res: NextApiResponse) => {
  // console.log(reqUser, "prosto z requestu");
  // console.log(authUsers, "authusers");
  // console.log(authUsers.some(el => el.login === reqUser.login && el.password=== reqUser.password),"czy zawieara")
  // console.log(authUsers.some(el => ((el.password === reqUser.password) && (el.username === reqUser.username))),"czy zawieara")
  const reqUser: User = req.body;

  if (
    authUsers.some(
      (el) =>
        el.password === reqUser.password && el.username === reqUser.username
    )
  ) {
    const jwtBody = {
      "https://hasura.io/jwt/claims": {
        "x-hasura-allowed-roles": ["samsungadmin", "admin"],
        "x-hasura-default-role": "admin",
      },
      iat: Date.now() / 1000 - 30,
      username: reqUser.username,
      id_user: 6,
    };
    //TODO Implement login system

    const token = jwt.sign(jwtBody, KEY, {
      algorithm: "HS256",
      expiresIn: 60 * 60 * 24,
      //S, M, H
    });

    return res.json({ token: token });
  } else {
    res.statusCode = 400;
  }
  res.end();
};

export default Login;

// const FnStringRtn = (arg: string): string => {
//     return 0;
// }
