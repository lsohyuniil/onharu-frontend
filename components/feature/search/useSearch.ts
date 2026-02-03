import { useState, ChangeEvent } from "react";

export const useSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (inputValue == "") return;
    setKeyword(inputValue);
  };

  return { inputValue, setInputValue, keyword, setKeyword, handleSearch, handleInputChange };
};
