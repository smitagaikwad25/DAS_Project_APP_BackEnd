
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

export const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return { error: "User not found" };
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return { error: "Invalid password" };
  }
  const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, SECRET_KEY, {
    expiresIn: "1h",
  });

  return token
}