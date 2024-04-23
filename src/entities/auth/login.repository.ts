import { User } from "../user/user.model";

export const findUserByEmail = async (email: string) => {
  const user = await User.findOne({
    where: { email: email },
    relations: ["roles"],
    select: {
      id: true,
      firstName: true,
      passwordHash: true,
      email: true,
      profilePhoto: true,
      schoolId: true,
    },
  });

  return user;
};
