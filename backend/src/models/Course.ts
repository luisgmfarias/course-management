import mongoose, { Document, Schema } from "mongoose";

export interface ICourse extends Document {
  subject: string;
  courseNumber: string;
  description: string;
}

const CourseSchema: Schema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  courseNumber: {
    type: String,
    required: true,
    match: /^[0-9]{3}$/,
  },
  description: {
    type: String,
    required: true,
  },
});

CourseSchema.index({ subject: 1, courseNumber: 1 }, { unique: true });

export default mongoose.model<ICourse>("Course", CourseSchema);
