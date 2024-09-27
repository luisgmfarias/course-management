import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteCourse, fetchCourses } from "../../services";
import { ICourse } from "../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const useList = () => {
  const searchQuery = useSelector(
    (state: RootState) => state.searchQuery.query
  );

  const queryClient = useQueryClient();

  const {
    data: courses,
    isLoading,
    isError,
    error,
  } = useQuery<ICourse[], Error>({
    queryKey: ["courses", searchQuery],
    queryFn: async () => fetchCourses(searchQuery),
  });

  const deleteCourseMutation = useMutation<void, any, string>({
    mutationFn: async (id: string) => {
      await deleteCourse(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
  });

  const handleDeleteCourse = async (id: string) => {
    deleteCourseMutation.mutate(id);
  };

  return {
    handleDeleteCourse,
    courses,
    isLoading,
    isError,
    error,
  };
};
