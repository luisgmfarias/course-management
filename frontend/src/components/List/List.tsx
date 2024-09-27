import React from "react";
import { useList } from "./useList";
import {
  Box,
  Heading,
  List as ChakraList,
  ListItem,
  Button,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";

const List = () => {
  const { courses, handleDeleteCourse } = useList();

  return (
    <Box maxWidth="600px" mx="auto" mt={6}>
      <Heading as="h2" size="md" mb={4} textAlign="center">
        Current Courses
      </Heading>
      <ChakraList spacing={3}>
        {courses?.map((course) => (
          <ListItem key={course._id} borderWidth={1} borderRadius="md" p={4}>
            <Flex alignItems="center">
              <Text>
                <strong>
                  {course.subject} {course.courseNumber}
                </strong>{" "}
                - {course.description}
              </Text>
              <Spacer />
              <Button
                colorScheme="red"
                size="sm"
                onClick={() => course._id && handleDeleteCourse(course._id)}
              >
                Delete
              </Button>
            </Flex>
          </ListItem>
        ))}
      </ChakraList>
    </Box>
  );
};

export default List;
