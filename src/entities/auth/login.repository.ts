import { User } from "../user/user.model";


export const findUserByEmail = async (email: string) => {
  const user = await User.createQueryBuilder("user")
    .where("user.email = :email", { email })
    .leftJoinAndSelect("user.roles", "userRole")
    .leftJoinAndSelect("userRole.role", "role")
    .leftJoinAndSelect("user.school", "school")
    .leftJoinAndSelect("user.parentid", "parentStudent")
    .leftJoin("parentStudent.student", "student")
    .addSelect("user.passwordHash")
    .addSelect("student.id")
    .addSelect("student.firstName")
    .addSelect("student.lastName")
    .addSelect("student.secondLastName")
    .addSelect("student.profilePhoto")
    .getOne();

  // if (user) {
  //   // Mapear los roles a un array de nombres de roles
  //   const roleNames = user.roles.map(userRole => userRole.role.name);
  //   console.log(roleNames)
  //   // Mapear los hijos a un array de IDs de hijos
  //   const childIds = user.parentsStudents.map(parentsStudents => parentsStudents.studentId);
  //   console.log(childIds);
  // }

  return user;
};
