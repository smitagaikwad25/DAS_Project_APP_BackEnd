import { User } from "../models/user";

export const userRegistration = async (body) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(body.password, saltRounds);
  body.password = hashedPassword;
  const data = await User.create(body);
  return data;
};

export const adminRegistration = async (body) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(body.password, saltRounds);
  body.password = hashedPassword;
  const data = await User.create(body);
  return data;
};