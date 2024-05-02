import { Request, Response } from "express";
import { HttpStatus } from "../../utils/handleError";
import { getStagesRepository } from "./stage.repository";
import {
  createStageService,
  deleteStageService,
  getStagesService,
  updateStageService,
} from "./stage.service";

export const getStages = async (req: Request, res: Response) => {
  try {
    console.log("stage controller", req.body);
    const stages = await getStagesService(req);

    res.status(HttpStatus.OK).json({
      success: true,
      message: "Stages retrieved succesfully",
      data: stages,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Can't retrieve stages",
      error: error,
    });
  }
};

export const createStage = async (req: Request, res: Response) => {
  try {
    const stage = await createStageService(req);

    res.status(HttpStatus.OK).json({
      success: true,
      message: "Stage created succesfully",
      data: stage,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Can't create stage",
      error: error,
    });
  }
};

export const updateStage = async (req: Request, res: Response) => {
  try {
    const stage = await updateStageService(req);

    res.status(HttpStatus.OK).json({
      success: true,
      message: "Stage updated succesfully",
      data: stage,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Can't update stage",
      error: error,
    });
  }
};

export const deleteStage = async (req: Request, res: Response) => {
  try {
    const stage = await deleteStageService(req);

    res.status(HttpStatus.OK).json({
      success: true,
      message: "Stage deleted succesfully",
      data: stage,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Can't delete stage",
      error: error,
    });
  }
};
