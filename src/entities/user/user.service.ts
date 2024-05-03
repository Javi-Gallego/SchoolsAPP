import { FindOperator, Like } from "typeorm";
import { ValidationError } from "../../utils/handleError";
import { Request } from "express";
import { getUsersRepository } from "./user.repository";

export interface queryFiltersE {
  email?: FindOperator<string>;
  firstName?: FindOperator<string>;
  lastName?: FindOperator<string>;
  roleName?: string;
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

  if (req.query.email) {
    queryFilters.email = Like(`%${req.query.email}%`);
  }
  if (req.query.firstName) {
    queryFilters.firstName = Like(`%${req.query.firstName}%`);
  }
  if (req.query.lastname) {
    queryFilters.lastName = Like(`%${req.query.lastName}%`);
  }
  if (req.query.roleName && typeof req.query.roleName === "string") {
    queryFilters.roleName = req.query.roleName;
  }
//   if (req.query.role) {
//     queryFilters.role = { name: Like(`%${req.query.role}%`) };
//   }

  const users = await getUsersRepository(queryFilters, limit, skip);
  return users;
};
