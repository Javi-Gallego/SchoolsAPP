import bcrypt from "bcrypt";
import { ValidationError } from "../../utils/handleError";
import { createUser, emailInUse } from "./register.repository";
import { Request } from "express";
import { createUserRole } from "../user_role/user_role.controller";

export const getRegisterService = async (req: Request) => {
  console.log("Registering user");
  console.log(req.body.userData)
  const { firstName, lastName, secondLastName, birthdate, phone,
    address, email, password, schoolId, roleId } = req.body.userData;
    console.log("1");
  if ( !firstName || !lastName || !secondLastName || !birthdate || !address ||
    !email || !password || !schoolId
  ) {
    console.log("1.1");
    throw new ValidationError("All the fields are required");
  }
  console.log("2");
  if (firstName.length < 3 || firstName.length > 10) {
    throw new ValidationError(
      "User name must contain between 3 and 10 characters"
    );
  }
  console.log("3");
  if (password.length < 6 || password.length > 10) {
    throw new ValidationError(
      "Password must contain between 6 and 10 characters"
    );
  }
  console.log("4");
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if (!validEmail.test(email)) {
    throw new ValidationError("Email format invalid");
  }
  console.log("5");
  await emailInUse(email);

  const passwordEncrypted = bcrypt.hashSync(password, 5);
  console.log("6");
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
  console.log("7");
  if (!newUser) {
    throw new ValidationError("User not created");
  }

  const userRole = await createUserRole(newUser.id, roleId);
  
  return newUser;
};
