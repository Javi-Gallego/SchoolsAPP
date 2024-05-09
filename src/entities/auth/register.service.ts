import bcrypt from "bcrypt";
import { ValidationError } from "../../utils/handleError";
import { createUser, emailInUse } from "./register.repository";
import { Request } from "express";
import { createUserRole } from "../user_role/user_role.controller";

export const getRegisterService = async (req: Request) => {

  const { firstName, lastName, secondLastName, birthdate, phone,
    address, email, password, schoolId, roleId } = req.body.userData;

  if ( !firstName || !lastName || !secondLastName || !birthdate || !address ||
    !email || !password || !schoolId
  ) {

    throw new ValidationError("All the fields are required");
  }

  if (firstName.length < 3 || firstName.length > 10) {
    throw new ValidationError(
      "User name must contain between 3 and 10 characters"
    );
  }

  if (password.length < 6 || password.length > 10) {
    throw new ValidationError(
      "Password must contain between 6 and 10 characters"
    );
  }

  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if (!validEmail.test(email)) {
    throw new ValidationError("Email format invalid");
  }

  await emailInUse(email);

  const passwordEncrypted = bcrypt.hashSync(password, 5);

  const newUser = await createUser(
    firstName,
    lastName,
    secondLastName,
    birthdate,
    address,
    email,
    passwordEncrypted,
    schoolId,
    phone
  );

  if (!newUser) {
    throw new ValidationError("User not created");
  }

  const userRole = await createUserRole(newUser.id, roleId);
  
  return newUser;
};
