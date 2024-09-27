import React from "react";
import Form from "./components/Form";
import SearchBar from "./components/SearchBar";
import List from "./components/List";
import { Box, Flex, Text } from "@chakra-ui/react";

const App = () => {
  return (
    <Flex direction="column" className="App" padding={10}>
      <Text fontSize="4xl" as="b" my={"auto"}>
        Course management
      </Text>
      <Flex direction="row" width="100%">
        <Form />
        <Flex direction="column" alignItems="center" width={600}>
          <SearchBar />
          <List />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default App;
