import React, { useState } from "react";

function ReportForm() {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    machineType: "",
    errorCode: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier kannst du den Code einfügen, um die Formulardaten zu senden
    console.log(formData);
    // Hier kannst du den Code einfügen, um eine E-Mail zu senden
  };

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="department"
            className="block text-sm font-medium text-gray-700"
          >
            Abteilung
          </label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="machineType"
            className="block text-sm font-medium text-gray-700"
          >
            Maschinentyp
          </label>
          <input
            type="text"
            id="machineType"
            name="machineType"
            value={formData.machineType}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="errorCode"
            className="block text-sm font-medium text-gray-700"
          >
            Fehlercode
          </label>
          <input
            type="text"
            id="errorCode"
            name="errorCode"
            value={formData.errorCode}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="images"
            className="block text-sm font-medium text-gray-700"
          >
            Bilder hochladen
          </label>
          <input
            type="file"
            id="images"
            name="images"
            multiple
            onChange={handleImageUpload}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Senden
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReportForm;
