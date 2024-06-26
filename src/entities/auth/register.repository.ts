import { ValidationError } from "../../utils/handleError";
import { User } from "../user/user.model";

export const emailInUse = async (email: string) => {
    const isUser = await User.findOne({
      where: { email: email },
    });

    if (isUser) {
      throw new ValidationError("Email already in use");
    }
};

export const createUser = async (
  firstName: string,
  lastName: string,
  secondLastName: string,
  birthdate: Date,
  address: string,
  email: string,
  password: string,
  schoolId: number,
  phone?: number
) => {
  try {
    const newUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      secondLastName: secondLastName,
      birthday: birthdate,
      address: address,
      profilePhoto: "",
      email: email,
      passwordHash: password,
      schoolId: schoolId,
    }).save();

    if (phone) {
      newUser.phone = phone;
    }
    await newUser.save();

    return newUser;
  } catch (error) {
    console.log(error);
  }
};
