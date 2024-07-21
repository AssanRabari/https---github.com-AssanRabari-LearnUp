import express from "express";

import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import {
  addAnswer,
  addQustion,
  addReview,
  addReviewReply,
  editCourse,
  getAllCourses,
  getCourseByUser,
  getSingleCourse,
  uploadCourse,
} from "../controllers/course.controller";

const courseRouter = express.Router();
// courseRouter.post("/create-course",isAuthenticated, authorizeRoles("admin"), uploadCourse);

courseRouter.post("/create-course", isAuthenticated, uploadCourse);

courseRouter.put("/edit-course/:id", isAuthenticated, editCourse);

courseRouter.get("/get-course/:id", getSingleCourse);

courseRouter.get("/get-courses", getAllCourses);

courseRouter.get("/get-course-content/:id", isAuthenticated, getCourseByUser);

courseRouter.put("/add-question", isAuthenticated, addQustion);

courseRouter.put("/add-answer", isAuthenticated, addAnswer);

courseRouter.put("/add-review/:id", isAuthenticated, addReview);

// authorizeRoles("admin")
courseRouter.put("/add-reply", isAuthenticated, addReviewReply);

export default courseRouter;
