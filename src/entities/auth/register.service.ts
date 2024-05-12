import "dotenv/config";
import bcrypt from "bcrypt";
import Mailjet from "node-mailjet";
import { Request } from "express";
import { ValidationError } from "../../utils/handleError";
import { createUser, emailInUse } from "./register.repository";
import { createUserRole } from "../user_role/user_role.controller";



async function sendRegisterEmail(email: string, name: string, password: string) {
  
  if (!process.env.MJ_APIKEY_PUBLIC || !process.env.MJ_APIKEY_PRIVATE) {
    throw new ValidationError('The environment variables MJ_APIKEY_PUBLIC and DB_USER must be defined');
  }
  const mailjet = Mailjet.apiConnect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

  const request = mailjet
    .post("send", { 'version': 'v3.1' })
    .request({
      "Messages": [
        {
          "From": {
            "Email": "galgar@gmail.com",
            "Name": "Escola El Drac"
          },
          "To": [
            {
              "Email": email,
              "Name": name
            }
          ],
          "Subject": "¡Bienvenid@ a APP School!",
          "TextPart": "Bienvenido a nuestro servicio " + name + ". Tu contraseña es: " + password + ". Por favor, cámbiala en tu primer inicio de sesión.",
          "HTMLPart": `<h1>¡Bienvenido a APP School ${name}!</h1><h3>Tu contraseña es: "${password}". Por favor, cámbiala en tu primer inicio de sesión</h3><h3>¡Disfruta del servicio!</h3>`
        }
      ]
    });

  try {
    const response = await request;

  } catch (error) {
    console.log(error);
  }
}

export const getRegisterService = async (req: Request) => {
  const { firstName, lastName, secondLastName, birthdate, phone,
    address, email, password, schoolId, roleId } = req.body;
    
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

  await createUserRole(newUser.id, roleId);

  await sendRegisterEmail(email, firstName, password);

  return newUser;
};
