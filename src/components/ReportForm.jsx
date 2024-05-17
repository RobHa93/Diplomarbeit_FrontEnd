import React, { useState } from "react";
import emailjs from "emailjs-com";

function ReportForm() {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    machineType: "",
    errorCode: "",
    description: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Senden der E-Mail über EmailJS
    emailjs
      .sendForm(
        "service_ar0p7pa",
        "template_skte65k",
        e.target,
        "OrtfcsERrzdzN7VOh"
      )
      .then(
        (result) => {
          console.log("E-Mail erfolgreich gesendet:", result.text);
          alert("E-Mail erfolgreich gesendet!");
          // Formular zurücksetzen
          setFormData({
            name: "",
            department: "",
            machineType: "",
            errorCode: "",
            description: "",
            images: [],
          });
        },
        (error) => {
          console.error("Fehler beim Senden der E-Mail:", error.text);
        }
      );
  };

  return (
    <div className="px-4 lg:px-8  md:ml-0">
      <h1 className=" text-3xl font-bold tracking-tight text-red-500 sm:text-4xl text-center mb-20">
        Report{" "}
      </h1>
      <div className="max-w-lg mx-auto ">
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
              Department
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
              Maschine-Type
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
              Error-Code
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
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              maxLength={500}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-[200px]"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-20"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReportForm;
