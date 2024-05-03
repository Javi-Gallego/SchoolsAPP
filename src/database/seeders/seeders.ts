import { courseSeedDatabase } from "./seeders_courses";
import { parentStudentSeedDatabase } from "./seeders_parents_students";
import { roleSeedDatabase } from "./seeders_roles";
import { schoolSeedDatabase } from "./seeders_schools";
import { stageSeedDatabase } from "./seeders_stages";
import { subjectSeedDatabase } from "./seeders_subjects";
import { userSeedDatabase } from "./seeders_users";
import { userRoleSeedDatabase } from "./seeders_users_roles";

const callSeeders = async () => {
  await schoolSeedDatabase();
  await roleSeedDatabase();
  await userSeedDatabase();
  await userRoleSeedDatabase();
  await parentStudentSeedDatabase();
  await stageSeedDatabase();
  await courseSeedDatabase();
  await subjectSeedDatabase();
};

callSeeders();
