import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

import "./SearchForm.css";

import useAllChats from "../../../store/useAllChats";

import useGetChats from "../../../hooks/useGetChats";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const { chats, setChats } = useAllChats();
  const { getAllChats } = useGetChats();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    const chatsFiltered = chats.filter(
      (chat) =>
        chat.firstName.toLowerCase().includes(search.toLowerCase()) ||
        chat.lastName.toLowerCase().includes(search.toLowerCase())
    );
    setChats(chatsFiltered);
  };

  useEffect(() => {
    if (search === "") {
      getAllChats();
    }
  }, [search]);

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <button className="search-button">
        <IoSearch size={20} color="#9ca3af" />
      </button>
      <input
        type="text"
        id="search"
        className="search-input"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
