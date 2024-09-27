import Course from "../models/Course";

import { Request, Response } from "express";

export const getCourses = async (req: Request, res: Response) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const searchCourses = async (req: Request, res: Response) => {
  const { q } = req.query;
  try {
    const courses = await Course.find({
      description: { $regex: q as string, $options: "i" },
    });
    res.json(courses);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const addCourse = async (req: Request, res: any) => {
  const { subject, courseNumber, description } = req.body;

  if (!/^\d{3}$/.test(courseNumber)) {
    return res.status(400).json({
      message: 'Course number must be three digit, like "033".',
    });
  }

  try {
    const course = new Course({ subject, courseNumber, description });
    await course.save();
    res.status(201).json(course);
  } catch (error: any) {
    if (error.code === 11000) {
      res.status(400).json({
        message: "Course already exists.",
      });
    } else {
      res.status(500).send(error.message);
    }
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Course deleted" });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
