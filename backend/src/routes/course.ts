import { Router } from "express";
import {
  addCourse,
  deleteCourse,
  getCourses,
  searchCourses,
} from "../controllers/courseController";

const router = Router();

router.get("/", getCourses);

router.get("/search", searchCourses);

router.post("/", addCourse);

router.delete("/:id", deleteCourse);

export default router;
