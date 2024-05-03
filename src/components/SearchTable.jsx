import React from "react";

const SearchTable = () => {
  return (
    <div className="overflow-x-auto border-x border-t lg:ml-[400px] sm:ml-10 md:mr-10 mx-4 mt-20">
      <table className="table-auto w-full">
        <thead className="border-b">
          <tr className="bg-gray-100">
            <th className="text-left p-4 font-medium">Error-Code</th>
            <th className="text-left p-4 font-medium">Error-Name</th>
            <th className="text-left p-4 font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-gray-50">
            <td className="p-4 ">803</td>
            <td className="p-4">ERROR_YARN_IS_BROKEN</td>
            <button className="m-4">Description</button>
          </tr>
          <tr className="border-b hover:bg-gray-50">
            <td className="p-4">804</td>
            <td className="p-4">ERROR_PRE_WINDER_IS_RUNNING_EMPTY</td>
            <button className="m-4">Description</button>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SearchTable;
