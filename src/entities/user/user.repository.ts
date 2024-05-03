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
    if (filters.firstName) {
      query = query.where("user.name = :name", {
        first_name: filters.firstName,
      });
    }
    if (filters.email) {
      query = query.andWhere("user.email = :email", { email: filters.email });
    }

    // Si se proporcionó un filtro de roleName, añade un INNER JOIN para roles
    if (filters.roleName) {
        const roles = await Role.createQueryBuilder("role")
          .where("role.name LIKE :roleName", { roleName: `%${filters.roleName}%` })
          .getMany();
  
        const roleIds = roles.map(role => role.id);
        if(roleIds.length > 0){
        query = query.innerJoin("user.roles", "userRole")
                     .innerJoinAndSelect("userRole.role", "role", "role.id IN (:...roleIds)", { roleIds });
}
      }

    const users = await query.getMany();

    return users;
  } catch (error) {
    console.log(error);
  }
};
