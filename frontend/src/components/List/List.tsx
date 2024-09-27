import React from "react";
import { useList } from "./useList";

const List = () => {
  const { courses, handleDeleteCourse } = useList();
  return (
    <div>
      <h2>Cursos Atuais</h2>
      <ul>
        {courses?.map((course) => (
          <li key={course._id}>
            {course.subject} {course.courseNumber} - {course.description}
            <button
              onClick={() => course._id && handleDeleteCourse(course._id)}
            >
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
