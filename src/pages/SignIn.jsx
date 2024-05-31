import React, { useState } from "react";
import axios from "axios";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log("Username:", username);

    try {
      const response = await axios.post(
        "https://Diplomarbeit-IBAW.onrender.com/api/v1/users/login",
        {
          username,
          password,
        }
      );
      const token = response.data.token;
      localStorage.setItem("token", token);

      // Weiterleitung zur Startseite, wenn die Anmeldung erfolgreich ist
      window.location.href = "/home";
    } catch (error) {
      console.error("Fehler beim Anmelden:", error);
      setError(error.response.data.message);
    }
  };

  // Überprüfe das Token, wenn die Komponente geladen wird
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "/home";
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-slate-800 ">
      <div className="w-full rounded-lg shadow  md:mt-0 sm:max-w-md border border-gray-300 ">
        <div className="p-6 md:space-y-6 content-center">
          <h1 className="text-xl text-center font-bold md:text-2xl text-red-500 ">
            Sign in to JMF Service Tool
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-4 text-xl text-red-500 "
              >
                User name
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="border border-gray-300 sm:text-sm rounded-lg f block w-full p-2.5 placeholder-red-200 bg-gray-700 text-white"
                placeholder="User name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-4 text-xl text-red-500 "
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="border border-gray-300 sm:text-sm rounded-lg  block w-full p-2.5 placeholder-red-200 bg-gray-700 text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className=" mt-6   bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
              >
                {" "}
                Einloggen
              </button>
            </div>
          </form>
          {error && <div className="text-red-500">{error}</div>}
        </div>
      </div>
    </div>
  );
}
