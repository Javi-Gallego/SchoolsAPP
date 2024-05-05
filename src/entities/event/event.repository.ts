import { IsNull } from "typeorm";
import { Event } from "./event.model";
import { EventFilter } from "./event.service";

export const getEventsRepository = async (queryFilter: EventFilter) => {
  const { schoolId, stageId, courseId } = queryFilter;
  console.log("schoolId: ", schoolId,"stageId: ", stageId, "courseId: ", courseId);
  const events = await Event.find({
    where: [
      { schoolId: schoolId, stageId: stageId, courseId: courseId },
      { schoolId: schoolId, stageId: stageId, courseId: IsNull() },
      { schoolId: schoolId, stageId: IsNull(), courseId: courseId },
      { schoolId: schoolId, stageId: IsNull(), courseId: IsNull() },
    ],
    relations: ["publisher", "stage", "course"],
  });
  return events;
};
