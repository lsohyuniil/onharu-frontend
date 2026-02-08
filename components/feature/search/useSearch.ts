import { useState, ChangeEvent } from "react";
import { Toast } from "../toast/Toast";

export const useSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (inputValue == "") {
      Toast("warning", "검색에 실패했습니다.", "검색어를 입력해 주세요!");
    }
    setKeyword(inputValue);
  };

  return { inputValue, setInputValue, keyword, setKeyword, handleSearch, handleInputChange };
};
