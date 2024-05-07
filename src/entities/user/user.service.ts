import { FindOperator, Like } from "typeorm";
import { ValidationError } from "../../utils/handleError";
import { Request } from "express";
import { getUsersRepository } from "./user.repository";

export interface queryFiltersE {
  email?: FindOperator<string>;
  firstName?: string;
  lastName?: FindOperator<string>;
  // roleName?: string;
  roleNames?: string[];
  schoolId?: number;
//   role?: {
//     name: FindOperator<string>;
//   };
}

export const getUsersService = async (req: Request) => {
  const limit = Number(req.query.limit) || 10;
  const page = Number(req.query.page) || 1;
  const skip = (page - 1) * limit;

  if (limit > 100) {
    throw new ValidationError("Limit should be less than 100");
  }

  const queryFilters: queryFiltersE = {};

  if (req.query.email && typeof req.query.email === "string") {
    queryFilters.email = Like(`%${req.query.email}%`);
  }
  if (req.query.firstName && typeof req.query.firstName === "string") {
    queryFilters.firstName = req.query.firstName;
  }
  if (req.query.lastName && typeof req.query.lastName === "string") {
    queryFilters.lastName = Like(`%${req.query.lastName}%`);
  }
  // if (req.query.roleName && typeof req.query.roleName === "string") {
  //   queryFilters.roleName = req.query.roleName;
  // }
  if (req.query.roleName && typeof req.query.roleName === "string") {
    queryFilters.roleNames = req.query.roleName.split(",");
  }
  if (req.query.schoolId && typeof req.query.schoolId === "string") {
    queryFilters.schoolId = parseInt(req.query.schoolId);
  }
//   if (req.query.role) {
//     queryFilters.role = { name: Like(`%${req.query.role}%`) };
//   }

  const users = await getUsersRepository(queryFilters, limit, skip);

  return users;
};
