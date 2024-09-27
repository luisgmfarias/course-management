import React from "react";
import Form from "./components/Form";
import SearchBar from "./components/SearchBar";
import List from "./components/List";
import { Flex, Text } from "@chakra-ui/react";

const App = () => {
  return (
    <div className="App">
      <Text fontSize="4xl" as="b">
        Course magement
      </Text>
      <Flex direction="row">
        <Form />
        <Flex direction="column">
          <SearchBar />
          <List />
        </Flex>
      </Flex>
    </div>
  );
};

export default App;
