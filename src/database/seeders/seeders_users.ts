import { User } from "../../entities/user/user.model";
import { AppDataSource } from "../db";

export const userSeedDatabase = async() => {
    try {
        await AppDataSource.initialize()

        const User1 = new User()
        User1.firstName = "Super_Admin"
        User1.lastName = "Super"
        User1.secondLastName = "Admin"
        User1.email = "super_admin@gmail.com"
        User1.passwordHash = "$2b$08$aqubbCeubz8w6cj6HiT0.uU9QKUKcNxysvGMf1GcY3WujtuWw8uJq"
        User1.birthday = new Date("1990-01-01")
        User1.address = "Calle Falsa 123"
        User1.schoolId = 1
        await User1.save()

        const User2 = new User()
        User2.firstName = "Admin"
        User2.lastName = "Admin"
        User2.secondLastName = "Admin"
        User2.email = "admin@gmail.com"
        User2.passwordHash = "$2b$08$aqubbCeubz8w6cj6HiT0.uU9QKUKcNxysvGMf1GcY3WujtuWw8uJq"
        User2.birthday = new Date("1990-01-01")
        User2.address = "Calle Falsa 123"
        User2.schoolId = 1
        await User2.save()

        const User3 = new User()
        User3.firstName = "Javier"
        User3.lastName = "Gallego"
        User3.secondLastName = "Garrido"
        User3.email = "javier@gmail.com"
        User3.phone = 655960481
        User3.passwordHash = "$2b$08$aqubbCeubz8w6cj6HiT0.uU9QKUKcNxysvGMf1GcY3WujtuWw8uJq"
        User3.birthday = new Date("1984-01-29")
        User3.address = "Calle rio Jarama n34"
        User3.schoolId = 1
        await User3.save()

        console.log("--------------------------------------------------")
        console.log("----- Los users se han creado correctamente ------")
        console.log("--------------------------------------------------")
    } catch (error) {
        console.log(error)
    } finally {
        await AppDataSource.destroy()
    }
}