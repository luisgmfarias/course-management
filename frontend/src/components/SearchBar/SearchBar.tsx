import React from "react";
import { useSearchBar } from "./useSearchBar";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";

const SearchBar: React.FC = () => {
  const { query, setQuery, handleSearch } = useSearchBar();

  return (
    <Box
      as="form"
      onSubmit={handleSearch}
      p={6}
      borderWidth={1}
      borderRadius="md"
      boxShadow="sm"
      width="100%"
      maxWidth="800px"
      mt={6}
    >
      <FormControl id="search" mb={4}>
        <FormLabel>Search by Subject</FormLabel>
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter subject"
        />
      </FormControl>
      <Button type="submit" colorScheme="teal" width="full">
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
