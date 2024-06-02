import React, { useState } from "react";
import pdf1 from "../assets/pdf/NFM.pdf";
import pdf2 from "../assets/pdf/NFM_MDW.pdf";
import pdf3 from "../assets/pdf/NFMJ.pdf";
import pdf4 from "../assets/pdf/MD.pdf";
import pdf5 from "../assets/pdf/Varitex_V5.pdf";
import pdf6 from "../assets/pdf/Varitex_V5J.pdf";
import pdf7 from "../assets/pdf/NF.pdf";
import pdf8 from "../assets/pdf/NF53_VLAL.pdf";
import pdf9 from "../assets/pdf/NFRE.pdf";
import pdf10 from "../assets/pdf/NG3.pdf";
import pdf11 from "../assets/pdf/MBJ8.pdf";
import pdf12 from "../assets/pdf/MBJ8V.pdf";
import pdf13 from "../assets/pdf/MBJ8V_MDW.pdf";
import pdf14 from "../assets/pdf/MBJL6.pdf";
import pdf15 from "../assets/pdf/MVC_2.8.pdf";
import pdf16 from "../assets/pdf/MUESONIC3.pdf";

const docs = [
  { name: "WE", type: "NFM ", url: pdf1 },
  { name: "WE", type: "NFM MDW", url: pdf2 },
  { name: "WE", type: "NFMJ", url: pdf3 },
  { name: "WE", type: "MD", url: pdf4 },
  { name: "WE", type: "Varitex V5", url: pdf5 },
  { name: "WE", type: "Varitex V5 J", url: pdf6 },
  { name: "WE", type: "NF", url: pdf7 },
  { name: "WE", type: "NF53 VL/AL", url: pdf8 },
  { name: "WE", type: "NFRE", url: pdf9 },
  { name: "WE", type: "NG3", url: pdf10 },
  { name: "SCH", type: "MBJ8V", url: pdf11 },
  { name: "SCH", type: "MBJ8 ", url: pdf12 },
  { name: "SCH", type: "MBJ8 MDW ", url: pdf13 },
  { name: "SCH", type: "MBJL6 ", url: pdf14 },
  { name: "SCH", type: "MVC 2.8 ", url: pdf15 },
  { name: "SCH", type: "MÜSONIC3 ", url: pdf16 },
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
    <div className="px-4 lg:px-8 lg:ml-[400px] md:ml-0">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto space-x-4 ">
          <h1 className=" text-3xl font-bold tracking-tight text-red-500 sm:text-4xl text-center">
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
                        <button
                          className="m-1 border-red-600 text-orange-600 hover:bg-red-600 hover:text-white"
                          onClick={() => window.open(doc.url, "_blank")}
                        >
                          Open PDF
                        </button>
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
