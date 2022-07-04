import jwt from "jsonwebtoken";

export class AuthServices {
  public createToken(id: number) {
    const token = jwt.sign({ id: id }, "acoes", {
      expiresIn: 3600000 * 5,
    });

    return token;
  }
}