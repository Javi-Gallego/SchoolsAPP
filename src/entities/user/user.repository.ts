import { Role } from "../role/role.model";
import { User } from "./user.model";
import { queryFiltersE } from "./user.service";

export const getUsersRepository = async (
  filters: queryFiltersE,
  limit: number,
  skip: number
) => {
  try {

    let query = User.createQueryBuilder("user");
    if (filters.schoolId) {
        const schoolId = filters.schoolId;
        query = query.andWhere("user.schoolId = :schoolId", { schoolId });
      }
    if (filters.firstName) {
      query = query.andWhere("user.first_name LIKE :firstName", {
        firstName: `%${filters.firstName}%`,
        // name: filters.firstName,
      });
    }
    if (filters.email) {
      query = query.andWhere("user.email = :email", { email: filters.email });
    }

    // Si se proporcionó un filtro de roleName, añade un INNER JOIN para roles
    if (filters.roleNames && filters.roleNames.length > 0) {
      const roles = await Role.createQueryBuilder("role")
        .where("role.name IN (:...roleNames)", { roleNames: filters.roleNames })
        .getMany();
    
      const roleIds = roles.map(role => role.id);
      if(roleIds.length > 0){
        query = query.innerJoin("user.roles", "userRole")
                     .innerJoinAndSelect("userRole.role", "role", "role.id IN (:...roleIds)", { roleIds });
      }
    }

      // if (filters.roleName) {
      //   const roles = await Role.createQueryBuilder("role")
      //     .where("role.name LIKE :roleName", { roleName: `%${filters.roleName}%` })
      //     .getMany();
  
      //   const roleIds = roles.map(role => role.id);
      //   if(roleIds.length > 0){
      //   query = query.innerJoin("user.roles", "userRole")
      //                .innerJoinAndSelect("userRole.role", "role", "role.id IN (:...roleIds)", { roleIds });
      //   }
      // }

    const users = await query.getMany();

    return users;
  } catch (error) {
    console.log(error);
  }
};
