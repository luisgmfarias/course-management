import { useState } from "react";
import { ICourse } from "../../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCourse } from "../../services";

export const useForm = () => {
  const queryClient = useQueryClient();

  const addCourseMutation = useMutation<ICourse, any, ICourse>({
    mutationFn: addCourse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
    onError: (error: any) => {
      alert(error.response.data.message);
    },
  });

  const handleAddCourse = (course: ICourse) => {
    addCourseMutation.mutate(course);
  };

  const [subject, setSubject] = useState("");
  const [courseNumber, setCourseNumber] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddCourse({ subject, courseNumber, description });
    setSubject("");
    setCourseNumber("");
    setDescription("");
  };

  return {
    handleSubmit,
    subject,
    courseNumber,
    description,
    setSubject,
    setCourseNumber,
    setDescription,
    handleAddCourse,
  };
};
