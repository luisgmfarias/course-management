import { useForm } from "./useForm";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
} from "@chakra-ui/react";

const Form = () => {
  const {
    handleSubmit,
    subject,
    setSubject,
    courseNumber,
    setCourseNumber,
    description,
    setDescription,
  } = useForm();

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      p={6}
      borderWidth={1}
      borderRadius="md"
      boxShadow="sm"
      maxWidth="400px"
      mt={6}
    >
      <Heading as="h2" size="md" mb={4} textAlign="center">
        Add New Course
      </Heading>
      <FormControl id="subject" mb={3} isRequired>
        <FormLabel>Subject</FormLabel>
        <Input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </FormControl>
      <FormControl id="courseNumber" mb={3} isRequired>
        <FormLabel>Course Number (e.g., 033)</FormLabel>
        <Input
          type="text"
          value={courseNumber}
          onChange={(e) => setCourseNumber(e.target.value)}
        />
      </FormControl>
      <FormControl id="description" mb={4} isRequired>
        <FormLabel>Description</FormLabel>
        <Input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormControl>
      <Button type="submit" colorScheme="teal" width="full">
        Add Course
      </Button>
    </Box>
  );
};

export default Form;
