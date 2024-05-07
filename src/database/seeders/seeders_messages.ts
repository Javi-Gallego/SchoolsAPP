import { Message } from "../../entities/message/message.model";
import { AppDataSource } from "../db";

export const messageSeedDatabase = async () => {
  try {
    await AppDataSource.initialize();

    const message1 = new Message();
    message1.message = "Buenos días, ¿cómo estás?";
    message1.authorId = 6;
    message1.receiverId = 3;
    message1.seenReceiver = false;
    await message1.save();

    const message2 = new Message();
    message2.message = "Bien gracias, ¿pasa algo?";
    message2.authorId = 3;
    message2.receiverId = 6;
    message2.seenReceiver = false;
    await message2.save();

    const message3 = new Message();
    message3.message = "Vicente está malo y no va a poder ir al colegio";
    message3.authorId = 6;
    message3.receiverId = 3;
    message3.seenReceiver = false;
    await message3.save();

    const message4 = new Message();
    message4.message = "Pobre Vicente, espero que se mejore pronto";
    message4.authorId = 3;
    message4.receiverId = 6;
    message4.seenReceiver = false;
    await message4.save();

    const message5 = new Message();
    message5.message = "Buenos días, ¿A qué hora será la tutoría?";
    message5.authorId = 6;
    message5.receiverId = 11;
    message5.seenReceiver = false;
    await message5.save();

    const message6 = new Message();
    message6.message = "A las 11:30 en el patio de arriba os estaré esperando";
    message6.authorId = 11;
    message6.receiverId = 6;
    message6.seenReceiver = false;
    await message6.save();

    console.log("--------------------------------------------------");
    console.log("---------- Messages created successfully ---------");
    console.log("--------------------------------------------------");
  } catch (error) {
    console.log(error);
  } finally {
    await AppDataSource.destroy();
  }
};