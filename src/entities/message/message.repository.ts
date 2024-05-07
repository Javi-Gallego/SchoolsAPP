import { Message } from "./message.model";

export const getMessagesRepository = async (userId: number) => {
  try {
    const messages = await Message.find({ 
        where: [
            { authorId: userId }, 
            { receiverId: userId }
        ],
        relations: ["author", "receiver"],
    });

    // const groupedMessages = messages.reduce((groups: { [key: string]: { messages: Message[], authorName: string, receiverName: string } }, message) => {
    //     const key = [message.authorId, message.receiverId].sort().join('-');
    //     if (!groups[key]) {
    //       groups[key] = {
    //         messages: [],
    //         authorName: message.author.firstName,
    //         receiverName: message.receiver.firstName,
    //       };
    //     }
    //     groups[key].messages.push(message);
    //     return groups;
    //   }, {});
    //   console.log("groupedMessages", groupedMessages)
    //   return groupedMessages;

    return messages;
  } catch (error) {
    console.log(error);
  }
};
