
import { Notification } from "../../entities/notification/notification.model";
import { AppDataSource } from "../db";

export const notificationsSeedDatabase = async () => {
  try {
    await AppDataSource.initialize();

    const Notification1 = new Notification();
    Notification1.title = "Bienvenida";
    Notification1.message = "Bienvenido a la plataforma de educación donde podrás informarte de todo lo que pasa en el colegio.";
    Notification1.publisherId = 2;
    Notification1.schoolId = 1;
    await Notification1.save();

    const Notification2 = new Notification();
    Notification2.title = "Festival fin de curso";
    Notification2.message = "El próximo viernes 25 de junio tendrá lugar el festival de fin de curso en el patio del colegio a partir de las 17:00. ¡No te lo pierdas!";
    Notification2.publisherId = 2;
    Notification2.schoolId = 1;
    await Notification2.save();

    const Notification3 = new Notification();
    Notification3.title = "Reunión de padres clase Trens";
    Notification3.message = "El próximo martes 22 de junio tendrá lugar una reunión de padres en el aula 3 a las 16:00.";
    Notification3.publisherId = 11;
    Notification3.schoolId = 1;
    Notification3.stageId = 1;
    Notification3.courseId = 1;
    await Notification3.save();

    console.log("--------------------------------------------------");
    console.log("------- Notifications created successfully -------");
    console.log("--------------------------------------------------");
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};