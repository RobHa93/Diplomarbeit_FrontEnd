import React, { useState } from "react";

const SearchTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);

  const backendURL = "https://diplomarbeit-ibaw.onrender.com";

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://diplomarbeit-ibaw.onrender.com/api/v1/machines/search/${searchTerm}`
      );
      if (response.ok) {
        const data = await response.json();
        setSearchResult(data);
        setError(null);
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
        setSearchResult(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
      setSearchResult(null);
    }
  };

  return (
    <>
      <h1 className="  text-red-500 text-3xl font-bold lg:ml-[400px] mb-28 mt-12 text-center">
        Search your Error-Code
      </h1>
      <div className="mt-6 placeholder:text-gray-400 flex items-center lg:ml-[400px] w-80 sm:ml-10 md:mr-10 mx-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter Error-Code..."
          className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button
          onClick={handleSearch}
          className="ml-2 bg-indigo-600 text-white px-4 py-1.5 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className="mt-20 placeholder:text-gray-400 flex items-center lg:ml-[400px] md:max-w-[70%] sm:ml-10 md:mr-10 mx-4">
        <table className="table-auto w-full">
          <thead className="border-b">
            <tr className="bg-gray-100">
              <th className="text-left p-4 font-medium">Error-Code</th>
              <th className="text-left p-4 font-medium">Error-Name</th>
              <th className="text-left p-4 font-medium">Description</th>
            </tr>
          </thead>
          <tbody>
            {searchResult && (
              <tr>
                <td className="text-left p-4">{searchResult.number}</td>
                <td className="text-left p-4">{searchResult.name}</td>
                <td className="text-left p-4">{searchResult.description}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SearchTable;
