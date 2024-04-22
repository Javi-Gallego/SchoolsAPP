import { ValidationError } from "../../utils/handleError";
import { User } from "../user/user.model";

export const emailInUse = async (email: string) => {
    const isUser = await User.findOne({
      where: { email: email },
    });

    if (isUser) {
      console.log("Email in use");
      throw new ValidationError("Email already in use");
    }
};

export const createUser = async (
  firstName: string,
  lastName: string,
  secondLastName: string,
  birthday: Date,
  address: string,
  email: string,
  password: string,
  schoolId: number
) => {
  try {
    const newUser = await User.create({
      firstName: firstName,
      lastName: lastName,
      secondLastName: secondLastName,
      birthday: birthday,
      address: address,
      profilePhoto: "",
      email: email,
      passwordHash: password,
      schoolId: schoolId,
    }).save();

    console.log("NewUser:",newUser);


    return newUser;
  } catch (error) {
    console.log(error);
  }
};
