import React from "react";
import { useSearchBar } from "./useSearchBar";

const SearchBar: React.FC = () => {
  const { query, setQuery, handleSearch } = useSearchBar();

  return (
    <form onSubmit={handleSearch}>
      <h2>Buscar Cursos</h2>
      <input
        type="text"
        placeholder="Buscar por Descrição"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;
