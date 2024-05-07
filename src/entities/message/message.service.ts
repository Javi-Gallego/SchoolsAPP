import { Request } from "express";
import jwt from "jsonwebtoken";
import { ValidationError } from "../../utils/handleError";
import {
  createMessageRepository,
  getMessagesRepository,
  updateMessageRepository,
} from "./message.repository";
import { Message } from "./message.model";

export const getMessagesService = async (req: Request) => {
  const token = req.headers.authorization?.split(" ")[1] as string;

  const decoded: any = jwt.decode(token);

  if (!decoded) {
    throw new ValidationError("Invalid token");
  }

  const userId = decoded.userId;

  const messages = await getMessagesRepository(userId);

  if (!messages) {
    throw new ValidationError("Messages not found");
  }

  const groupedMessages = messages.reduce(
    (
      groups: {
        [key: string]: {
          messages: Message[];
          authorName: string;
          receiverName: string;
          unseenCount: number;
        };
      },
      message
    ) => {
      const key = [message.authorId, message.receiverId].sort().join("-");
      if (!groups[key]) {
        groups[key] = {
          messages: [],
          authorName: message.author.firstName + " " + message.author.lastName,
          receiverName:
            message.receiver.firstName + " " + message.receiver.lastName,
          unseenCount: 0,
        };
      }
      groups[key].messages.push(message);

      // Si el mensaje no ha sido visto y el userId es igual al receiverId, incrementa el contador
      if (!message.seenReceiver && message.receiverId === userId) {
        groups[key].unseenCount++;
      }

      return groups;
    },
    {}
  );

  const groupedMessagesArray = Object.values(groupedMessages);

  return groupedMessagesArray;
};

export const createMessageService = async (req: Request) => {
  const { newMessage, authorId, receiverId } = req.body;

  const message = createMessageRepository(newMessage, authorId, receiverId);

  return message;
};

export const updateMessageService = async (req: Request) => {
  const { userId1, userId2 } = req.body;

const messages = await updateMessageRepository(userId1, userId2);

  return messages;
};
