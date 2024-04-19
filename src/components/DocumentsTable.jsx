import React, { useState } from "react";

const docs = [
  { name: "WE", type: "NFM ", file: "doc" },
  { name: "WE", type: "NFM MDW", file: "doc" },
  { name: "WE", type: "NFMJ", file: "doc" },
  { name: "WE", type: "MD", file: "doc" },
  { name: "WE", type: "Varitex V5", file: "doc" },
  { name: "WE", type: "Varitex V5 J", file: "doc" },
  { name: "WE", type: "NF", file: "doc" },
  { name: "WE", type: "NF53", file: "doc" },
  { name: "WE", type: "NFRE", file: "doc" },
  { name: "WE", type: "NFRE", file: "doc" },
  { name: "WE", type: "NG", file: "doc" },
  { name: "SCH", type: "MBJ8V", file: "doc" },
  { name: "SCH", type: "MBJ8 ", file: "doc" },
  { name: "SCH", type: "MBJ8 MDW ", file: "doc" },
  { name: "SCH", type: "MBJL6 ", file: "doc" },
  { name: "SCH", type: "MVC 2.8 ", file: "doc" },
  { name: "SCH", type: "MÜSONIC3 ", file: "doc" },
];

function DocumentsTable() {
  const [documents, setDocuments] = useState(docs);

  const filterByName = (name) => {
    if (name === "All") {
      setDocuments(docs);
    } else {
      setDocuments(docs.filter((doc) => doc.name === name));
    }
  };

  return (
    <div className="px-4 lg:px-8 lg:ml-[300px]">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className=" text-center font-bold text-3xl leading-6 text-red-500 mb-10">
            Machines
          </h1>
          <p className="my-6  text-gray-700 text-center">
            A list of all the Machine-Documentation in your search.
          </p>
          <button
            onClick={() => filterByName("All")}
            className="m-1 border-red-600 text-orange-600 hover:bg-red-600 hover:text-white"
          >
            All
          </button>
          <button
            onClick={() => filterByName("SCH")}
            className=" m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
          >
            SCH
          </button>
          <button
            onClick={() => filterByName("WE")}
            className="m-1 border-red-600 text-orange-600 hover:bg-red-600 hover:text-white"
          >
            WE
          </button>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none"></div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      File
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {documents.map((doc, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {doc.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {doc.type}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {doc.file}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentsTable;
