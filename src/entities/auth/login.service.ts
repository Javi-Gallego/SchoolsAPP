import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Request } from "express";
import {
  ForbiddenError,
  NotFoundError,
  ValidationError,
} from "../../utils/handleError";
import { findUserByEmail } from "./login.repository";

export const getLoginService = async (req: Request) => {

  const { email, password } = req.body;

  if (!email || !password) {
    throw new ValidationError("Email and password are required");
  }

  const user = await findUserByEmail(email);

  if (!user) {
    throw new NotFoundError("User not found");
  }

  const passwordMatch = bcrypt.compareSync(password, user.passwordHash);

  if (!passwordMatch) {
    throw new ForbiddenError("Password incorrect");
  }

  const token = jwt.sign(
    {
      userId: user.id,
      firstName: user.firstName,
      profilePhoto: user.profilePhoto,
      schoolId: user.schoolId,
      roles: user.roles.map((userRole) => userRole.role.name),
      schoolLogo: user.school.logo,
      children: user.parentid.map(parentStudent => parentStudent.student)
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: 86400,
    }
  );

  return token;
};
