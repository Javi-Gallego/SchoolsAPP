import { Role } from "../role/role.model";
import { User } from "./user.model";
import { queryFiltersE } from "./user.service";
import dayjs from "dayjs";

export const getUsersRepository = async (
  filters: queryFiltersE,
  limit: number,
  skip: number
) => {
  try {
    let query = User.createQueryBuilder("user")
      .leftJoinAndSelect("user.roles", "user_role")
      .leftJoinAndSelect("user_role.role", "role1")
      .leftJoinAndSelect("user.studentid", "parentStudent1")
      .leftJoinAndSelect("parentStudent1.parent", "student")
      .leftJoinAndSelect("user.parentid", "parentStudent2")
      .leftJoinAndSelect("parentStudent2.student", "parent");

    if (filters.schoolId) {
      const schoolId = filters.schoolId;
      query = query.andWhere("user.schoolId = :schoolId", { schoolId });
    }
    if (filters.id) {
      const id = filters.id;
      query = query.andWhere("user.id = :id", { id });
    }
    if (filters.firstName) {
      query = query.andWhere("user.first_name LIKE :firstName", {
        firstName: `%${filters.firstName}%`,
      });
    }
    if (filters.email) {
      query = query.andWhere("user.email = :email", { email: filters.email });
    }

    if (filters.roleNames && filters.roleNames.length > 0) {
      const roles = await Role.createQueryBuilder("role")
        .where("role.name IN (:...roleNames)", { roleNames: filters.roleNames })
        .getMany();

      const roleIds = roles.map((role) => role.id);
      if (roleIds.length > 0) {
        query = query
          .innerJoin("user.roles", "userRole")
          .innerJoinAndSelect(
            "userRole.role",
            "role",
            "role.id IN (:...roleIds)",
            { roleIds }
          );
      }
    }
    // query = query.take(limit).skip(skip);
    let firstusers = await query.getMany();

    let users = firstusers.map((user) => {
      return {
        ...user,
        birthday: dayjs(user.birthday).add(2, "hour").toDate(),
        roles: user.roles.map((user_role) => user_role.role.name),
        parentid: user.parentid ? user.parentid.map((parent) => ({
          ...parent,
          student: {
            ...parent.student,
            birthday: parent.student && parent.student.birthday ? dayjs(parent.student.birthday).add(2, "hour").toDate() : null,
          }
        })) : [],
        studentid: user.studentid ? user.studentid.map((student) => ({
          ...student,
          parent: {
            ...student.parent,
            birthday: student.parent && student.parent.birthday ? dayjs(student.parent.birthday).add(2, "hour").toDate() : null,
          }
        })) : [],
      };
    });

    return users;
  } catch (error) {
    console.log(error);
  }
};

// export const getUsersRepository = async (
//   filters: queryFiltersE,
//   limit: number,
//   skip: number
// ) => {
//   try {

//     let query = User.createQueryBuilder("user");
//     // .leftJoin("user.roles", "user_role")
//     // .leftJoin("user_role.role", "role")
//     // .leftJoin("user.parentid", "parent", "role.name = :parentName")
//     // .leftJoin("user.studentid", "student", "role.name = :studentName")
//     // .setParameters({ parentName: 'parent', studentName: 'student' })
//     // .where("user.school_id = :schoolId", { schoolId: 1 })
//     // .andWhere("role.id IN (:...roleIds)", { roleIds: [4] })
//     // .select([
//     //     "user.id",
//     //     "user.first_name",
//     //     "user.last_name",
//     //     "user.second_last_name",
//     //     "user.birthday",
//     //     "user.address",
//     //     "user.email",
//     //     "user.phone",
//     //     "user.profile_photo",
//     //     "user.school_id",
//     //     "role.id",
//     //     "role.name",
//     //     "parent.parent_id",
//     //     "student.student_id"
//     // ]);

//     // query = query.leftJoinAndSelect("user.roles", "role1");

//     // query = query.leftJoinAndMapMany(
//     //   "user.children",
//     //   ParentStudent,
//     //   "ps1",
//     //   "ps1.parentId = user.id AND role1.name = 'parent'"
//     // );
//     // query = query.leftJoinAndMapMany(
//     //   "user.parents",
//     //   ParentStudent,
//     //   "ps2",
//     //   "ps2.studentId = user.id AND role1.name = 'student'"
//     // );

//     if (filters.schoolId) {
//         const schoolId = filters.schoolId;
//         query = query.andWhere("user.schoolId = :schoolId", { schoolId });
//       }
//     if (filters.firstName) {
//       query = query.andWhere("user.first_name LIKE :firstName", {
//         firstName: `%${filters.firstName}%`,
//         // name: filters.firstName,
//       });
//     }
//     if (filters.email) {
//       query = query.andWhere("user.email = :email", { email: filters.email });
//     }

//     // Si se envía un filtro de roleName, añade un INNER JOIN para roles
//     if (filters.roleNames && filters.roleNames.length > 0) {
//       const roles = await Role.createQueryBuilder("role")
//         .where("role.name IN (:...roleNames)", { roleNames: filters.roleNames })
//         .getMany();

//       const roleIds = roles.map(role => role.id);
//       if(roleIds.length > 0){
//         query = query.innerJoin("user.roles", "userRole")
//                      .innerJoinAndSelect("userRole.role", "role", "role.id IN (:...roleIds)", { roleIds });
//       }
//     }

//     const users = await query.getMany();

//     return users;
//   } catch (error) {
//     console.log(error);
//   }
// };
