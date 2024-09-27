import React from "react";
import Form from "./components/Form";
import SearchBar from "./components/SearchBar";
import List from "./components/List";

const App = () => {
  return (
    <div className="App">
      <h1>Gerenciamento de Cursos</h1>
      <Form />
      <SearchBar />
      <List />
    </div>
  );
};

export default App;
