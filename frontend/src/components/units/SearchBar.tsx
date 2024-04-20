import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  setResults: (results: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setResults }) => {
  const [searchString, setSearchString] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResults(searchString);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setSearchString(value);
  };

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search"
        className=" w-full h-10 px-5 pr-10 rounded-full text-sm"
        value={searchString}
        onChange={handleChange}
      />
      <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
