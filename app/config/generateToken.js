import { SignJWT } from "jose";

export const generateToken = (_id, time) => {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const alg = "HS256";
    return new SignJWT({})
      .setProtectedHeader({ alg })
      .setExpirationTime(time)
      .setIssuedAt()
      .setSubject(_id)
      .sign(secret);
  } catch (error) {
    throw error;
  }
};
