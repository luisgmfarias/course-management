import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../store/searchQuerySlice";

export const useSearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearchQuery(query));
  };

  return { query, setQuery, handleSearch };
};
