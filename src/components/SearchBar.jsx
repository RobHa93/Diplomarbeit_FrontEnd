import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  return (
    <div>
      <label
        htmlFor="search"
        className="flex text-xl font-medium leading-6 text-gray-900 lg:ml-[400px] sm:ml-10 md:mr-10 mx-4"
      >
        Quick search <MagnifyingGlassIcon className="h-6 w-6 text-black ml-2" />
      </label>
      <div className="relative mt-6 placeholder:text-gray-400 flex items-center lg:ml-[400px] md:max-w-[70%] sm:ml-10 md:mr-10 mx-4">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search here (Error-number or Error-name) . . . "
          className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default SearchBar;
