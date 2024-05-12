import { Message } from "./message.model";

export const getMessagesRepository = async (userId: number) => {
  try {
    const messages = await Message.find({
      where: [{ authorId: userId }, { receiverId: userId }],
      relations: ["author", "receiver"],
    });

    return messages;
  } catch (error) {
    console.log(error);
  }
};

export const createMessageRepository = async (
  newMessage: string,
  authorId: number,
  receiverId: number
) => {

  const message = Message.create({
    message: newMessage,
    authorId,
    receiverId,
  });

  await message.save();

  return message;
};

export const updateMessageRepository = async (userId1: number, userId2: number) => {
    console.log("userId1: ", userId1, "userId2: ", userId2);
    const messages = await Message.find({
        where: [
        { authorId: userId2, receiverId: userId1 },
        ],
    });

    messages.forEach(async (message) => {
        message.seenReceiver = true;
        await message.save();
    });
    
    return messages;
};