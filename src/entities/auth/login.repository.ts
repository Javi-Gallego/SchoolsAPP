
import { User } from "../user/user.model";

// export const findUserByEmail = async (email: string) => {
//   const user = await User.findOne({
//     where: { email: email },
//     relations: ["roles"],
//     select: {
//       id: true,
//       firstName: true,
//       passwordHash: true,
//       email: true,
//       profilePhoto: true,
//       schoolId: true,
//     },
//   });

//   return user;
// };

export const findUserByEmail = async (email: string) => {

  const user = await User.createQueryBuilder("user")
    .where("user.email = :email", { email })
    .leftJoinAndSelect("user.roles", "userRole")
    .leftJoinAndSelect("userRole.role", "role")
    .addSelect("user.passwordHash")
    // .select([
    //   "user.id",
    //   "user.firstName",
    //   "user.email",
    //   "user.profilePhoto",
    //   "user.schoolId",
    //   "role.name"
    // ])
    .getOne();
console.log(user)
  if (user) {
    // Mapear los roles a un array de nombres de roles
    const roleNames = user.roles.map(userRole => userRole.role.name);
    console.log(roleNames)
  }

  return user;
};
