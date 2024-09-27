import request from "supertest";
import app from "../../app";
import mongoose from "mongoose";
import Course from "../../models/Course";

describe("Course Controllers", () => {
  beforeAll(async () => {
    await mongoose.connect("mongodb://localhost:27017/course_management_test");
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await Course.deleteMany({});
  });

  describe("GET /api/courses", () => {
    it("should return all courses", async () => {
      await Course.create({
        subject: "BIO",
        courseNumber: "101",
        description: "Introduction to Biology",
      });

      const res = await request(app).get("/api/courses");

      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBe(1);
      expect(res.body[0]).toHaveProperty("subject", "BIO");
    });
  });

  describe("GET /api/courses/search", () => {
    it("should search courses by subject", async () => {
      await Course.create({
        subject: "BIO",
        courseNumber: "101",
        description: "Introduction to Biology",
      });

      const res = await request(app)
        .get("/api/courses/search")
        .query({ q: "Biology" });

      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBe(1);
      expect(res.body[0]).toHaveProperty(
        "description",
        "Introduction to Biology"
      );
    });
  });

  describe("POST /api/courses", () => {
    it("should add new course", async () => {
      const res = await request(app).post("/api/courses").send({
        subject: "MAT",
        courseNumber: "045",
        description: "Business Statistics",
      });

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("_id");
      expect(res.body).toHaveProperty("subject", "MAT");
    });

    it("should return error if course number invalid", async () => {
      const res = await request(app).post("/api/courses").send({
        subject: "MAT",
        courseNumber: "45",
        description: "Business Statistics",
      });

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty(
        "message",
        'Course number must be three digit, like "033".'
      );
    });

    it("should return error if course duplicated", async () => {
      await Course.create({
        subject: "MAT",
        courseNumber: "045",
        description: "Business Statistics",
      });

      const res = await request(app).post("/api/courses").send({
        subject: "MAT",
        courseNumber: "045",
        description: "Advanced Statistics",
      });

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("message", "Course already exists.");
    });
  });

  describe("DELETE /api/courses/:id", () => {
    it("should delet existent course", async () => {
      const course = await Course.create({
        subject: "PHY",
        courseNumber: "201",
        description: "Physics II",
      });

      const res = await request(app).delete(`/api/courses/${course._id}`);

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("message", "Course deleted");

      const deletedCourse = await Course.findById(course._id);
      expect(deletedCourse).toBeNull();
    });

    it("should return 500 if ID is invalid", async () => {
      const res = await request(app).delete("/api/courses/invalid-id");

      expect(res.statusCode).toBe(500);
    });
  });
});
