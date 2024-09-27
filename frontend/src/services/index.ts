import { ICourse } from "../types";
import axiosInstance from "./config";

export const fetchCourses = async (
  searchQuery?: string
): Promise<ICourse[]> => {
  if (searchQuery) {
    const res = await axiosInstance.get<ICourse[]>(
      `/courses/search?q=${searchQuery}`
    );
    return res.data;
  } else {
    const res = await axiosInstance.get<ICourse[]>("/courses");
    return res.data;
  }
};

export const addCourse = async (newCourse: ICourse) => {
  const res = axiosInstance
    .post<ICourse>("/courses", newCourse)
    .then((res) => res.data);

  return res;
};

export const deleteCourse = async (id: string) => {
  const res = await axiosInstance.delete(`/courses/${id}`);
  return res;
};
