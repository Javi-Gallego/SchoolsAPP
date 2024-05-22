import { User } from "../../entities/user/user.model";
import { AppDataSource } from "../db";

export const userSeedDatabase = async () => {
  try {
    await AppDataSource.initialize();

    const User1 = new User();
    User1.firstName = "Super_Admin";
    User1.lastName = "Super";
    User1.secondLastName = "Admin";
    User1.email = "super_admin@gmail.com";
    User1.passwordHash =
      "$2b$08$aqubbCeubz8w6cj6HiT0.uU9QKUKcNxysvGMf1GcY3WujtuWw8uJq";
    User1.birthday = new Date("1990-01-01");
    User1.address = "Calle Falsa 123";
    User1.schoolId = 1;
    await User1.save();

    const User2 = new User();
    User2.firstName = "Administración";
    User2.lastName = "El Drac";
    User2.secondLastName = "Escola";
    User2.email = "admin@gmail.com";
    User2.passwordHash =
      "$2b$08$aqubbCeubz8w6cj6HiT0.uU9QKUKcNxysvGMf1GcY3WujtuWw8uJq";
    User2.birthday = new Date("1990-01-01");
    User2.address = "Calle Falsa 123";
    User2.schoolId = 1;
    await User2.save();

    const User3 = new User();
    User3.firstName = "Javier";
    User3.lastName = "Gallego";
    User3.secondLastName = "Garrido";
    User3.email = "javier@gmail.com";
    User3.phone = 655960481;
    User3.passwordHash =
      "$2b$08$aqubbCeubz8w6cj6HiT0.uU9QKUKcNxysvGMf1GcY3WujtuWw8uJq";
    User3.birthday = new Date("1984-01-29");
    User3.address = "Calle rio Jarama n34";
    User3.schoolId = 1;
    await User3.save();

    const User4 = new User();
    User4.firstName = "Silvia";
    User4.lastName = "Perelló";
    User4.secondLastName = "Sanchis";
    User4.email = "silvia@gmail.com";
    User4.phone = 630322991;
    User4.passwordHash =
      "$2b$08$aqubbCeubz8w6cj6HiT0.uU9QKUKcNxysvGMf1GcY3WujtuWw8uJq";
    User4.birthday = new Date("1978-09-07");
    User4.address = "Calle rio Jarama n34";
    User4.schoolId = 1;
    await User4.save();

    const User5 = new User();
    User5.firstName = "Raúl";
    User5.lastName = "Gallego";
    User5.secondLastName = "Perelló";
    User5.email = "raulgallego@escolaeldrac.com";
    User5.passwordHash =
      "$2b$08$aqubbCeubz8w6cj6HiT0.uU9QKUKcNxysvGMf1GcY3WujtuWw8uJq";
    User5.birthday = new Date("2019-08-04");
    User5.address = "Calle rio Jarama n34";
    User5.schoolId = 1;
    await User5.save();

    const User6 = new User();
    User6.firstName = "Vicente";
    User6.lastName = "García";
    User6.secondLastName = "González";
    User6.email = "vicente@gmail.com";
    User6.phone = 650486235;
    User6.passwordHash =
      "$2b$08$aqubbCeubz8w6cj6HiT0.uU9QKUKcNxysvGMf1GcY3WujtuWw8uJq";
    User6.birthday = new Date("1975-03-20");
    User6.address = "Calle de la marmota n2 pta4";
    User6.schoolId = 1;
    await User6.save();

    const User7 = new User();
    User7.firstName = "Amparo";
    User7.lastName = "Martínez";
    User7.secondLastName = "Garrido";
    User7.email = "amparo@gmail.com";
    User7.phone = 669874523;
    User7.passwordHash =
      "$2b$08$aqubbCeubz8w6cj6HiT0.uU9QKUKcNxysvGMf1GcY3WujtuWw8uJq";
    User7.birthday = new Date("1977-05-13");
    User7.address = "Calle de la marmota n2 pta4";
    User7.schoolId = 1;
    await User7.save();

    const User8 = new User();
    User8.firstName = "Vicente";
    User8.lastName = "García";
    User8.secondLastName = "Martínez";
    User8.email = "vicentemartinez@escolaeldrac.com";
    User8.passwordHash =
      "$2b$08$aqubbCeubz8w6cj6HiT0.uU9QKUKcNxysvGMf1GcY3WujtuWw8uJq";
    User8.birthday = new Date("2019-07-22");
    User8.address = "Calle de la marmota n2 pta4";
    User8.schoolId = 1;
    await User8.save();

    const User9 = new User();
    User9.firstName = "David";
    User9.lastName = "García";
    User9.secondLastName = "Martínez";
    User9.email = "davidgarcia@escolaeldrac.com";
    User9.passwordHash =
      "$2b$08$aqubbCeubz8w6cj6HiT0.uU9QKUKcNxysvGMf1GcY3WujtuWw8uJq";
    User9.birthday = new Date("2021-04-26");
    User9.address = "Calle de la marmota n2 pta4";
    User9.schoolId = 1;
    await User9.save();

    const User10 = new User();
    User10.firstName = "Yolanda";
    User10.lastName = "Sanz";
    User10.secondLastName = "Perez";
    User10.email = "yola@gmail.com";
    User10.phone = 698654125;
    User10.passwordHash =
      "$2b$08$aqubbCeubz8w6cj6HiT0.uU9QKUKcNxysvGMf1GcY3WujtuWw8uJq";
    User10.birthday = new Date("1976-04-10");
    User10.address = "Calle principal n23";
    User10.schoolId = 1;
    await User10.save();

    const User11 = new User();
    User11.firstName = "Ricardo";
    User11.lastName = "Gómez";
    User11.secondLastName = "Gómez";
    User11.email = "ricardo@gmail.com";
    User11.phone = 628123125;
    User11.passwordHash =
      "$2b$08$aqubbCeubz8w6cj6HiT0.uU9QKUKcNxysvGMf1GcY3WujtuWw8uJq";
    User11.birthday = new Date("1977-04-10");
    User11.address = "Calle secundaria n32";
    User11.schoolId = 1;
    await User11.save();

    const User12 = new User();
    User12.firstName = "Alberto";
    User12.lastName = "Chicote";
    User12.secondLastName = "Valero";
    User12.email = "alberto@gmail.com";
    User12.phone = 608654125;
    User12.passwordHash =
      "$2b$08$aqubbCeubz8w6cj6HiT0.uU9QKUKcNxysvGMf1GcY3WujtuWw8uJq";
    User12.birthday = new Date("1990-04-10");
    User12.address = "Calle terciaria n43";
    User12.schoolId = 1;
    await User12.save();

    const User13 = new User();
    User13.firstName = "Ana";
    User13.lastName = "Calatayud";
    User13.secondLastName = "Calatayud";
    User13.email = "ana@gmail.com";
    User13.phone = 634625874;
    User13.passwordHash =
      "$2b$08$aqubbCeubz8w6cj6HiT0.uU9QKUKcNxysvGMf1GcY3WujtuWw8uJq";
    User13.birthday = new Date("1993-04-10");
    User13.address = "Calle de la petunia n85";
    User13.schoolId = 1;
    await User13.save();

    const User14 = new User();
    User14.firstName = "Soraya";
    User14.lastName = "Buj";
    User14.secondLastName = "Buj";
    User14.email = "soraya@gmail.com";
    User14.phone = 696636710;
    User14.passwordHash =
      "$2b$08$aqubbCeubz8w6cj6HiT0.uU9QKUKcNxysvGMf1GcY3WujtuWw8uJq";
    User14.birthday = new Date("1976-04-10");
    User14.address = "Calle sin nombre n8";
    User14.schoolId = 1;
    await User14.save();

    const User15 = new User();
    User15.firstName = "Jose";
    User15.lastName = "Gallego";
    User15.secondLastName = "Fernández";
    User15.email = "jose@gmail.com";
    User15.phone = 655471258;
    User15.passwordHash = "$2b$08$aqubbCeubz8w6cj6HiT0.uU9QKUKcNxysvGMf1GcY3WujtuWw8uJq";
    User15.birthday = new Date("1989-01-12");
    User15.address = "Calle de la nutria n1";
    User15.schoolId = 1;
    await User15.save();

    const User16 = new User();
    User16.firstName = "Paula";
    User16.lastName = "Perelló";
    User16.secondLastName = "Garcia";
    User16.email = "paula@gmail.com";
    User16.phone = 630582930;
    User16.passwordHash = "$2b$08$aqubbCeubz8w6cj6HiT0.uU9QKUKcNxysvGMf1GcY3WujtuWw8uJq";
    User16.birthday = new Date("1988-02-01");
    User16.address = "Calle de la nutria n1";
    User16.schoolId = 1;
    await User16.save();

    const User17 = new User();
    User17.firstName = "Leo";
    User17.lastName = "Gallego";
    User17.secondLastName = "Perelló";
    User17.email = "leogallego@escolaeldrac.com";
    User17.passwordHash = "$2b$08$aqubbCeubz8w6cj6HiT0.uU9QKUKcNxysvGMf1GcY3WujtuWw8uJq";
    User17.birthday = new Date("2019-04-09");
    User17.address = "Calle de la nutria n1";
    User17.schoolId = 1;
    await User17.save();

    const User18 = new User();
    User18.firstName = "Antonio";
    User18.lastName = "Martínez";
    User18.secondLastName = "Fernández";
    User18.email = "antonio@gmail.com";
    User18.phone = 655441258;
    User18.passwordHash = "$2b$08$aqubbCeubz8w6cj6HiT0.uU9QKUKcNxysvGMf1GcY3WujtuWw8uJq";
    User18.birthday = new Date("1989-01-12");
    User18.address = "Avenida principal n5 pta1";
    User18.schoolId = 1;
    await User18.save();

    const User19 = new User();
    User19.firstName = "Laura";
    User19.lastName = "Garcia";
    User19.secondLastName = "Garcia";
    User19.email = "laura@gmail.com";
    User19.phone = 630542930;
    User19.passwordHash = "$2b$08$aqubbCeubz8w6cj6HiT0.uU9QKUKcNxysvGMf1GcY3WujtuWw8uJq";
    User19.birthday = new Date("1988-02-01");
    User19.address = "Avenida principal n5 pta1";
    User19.schoolId = 1;
    await User19.save();

    const User20 = new User();
    User20.firstName = "Lucía";
    User20.lastName = "Martínez";
    User20.secondLastName = "Garcia";
    User20.email = "luciamartinez@escolaeldrac.com";
    User20.passwordHash = "$2b$08$aqubbCeubz8w6cj6HiT0.uU9QKUKcNxysvGMf1GcY3WujtuWw8uJq";
    User20.birthday = new Date("2019-11-22");
    User20.address = "Avenida principal n5 pta1";
    User20.schoolId = 1;
    await User20.save();

    console.log("--------------------------------------------------");
    console.log("----------- Users created successfully -----------");
    console.log("--------------------------------------------------");
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};
