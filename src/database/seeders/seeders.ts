import { parentStudentSeedDatabase } from "./seeders_parents_students";
import { roleSeedDatabase } from "./seeders_roles";
import { schoolSeedDatabase } from "./seeders_schools";
import { userSeedDatabase } from "./seeders_users";
import { userRoleSeedDatabase } from "./seeders_users_roles";

const callSeeders = async () => {
  await schoolSeedDatabase();
  await roleSeedDatabase();
  await userSeedDatabase();
  await userRoleSeedDatabase();
  await parentStudentSeedDatabase();
};

callSeeders();
