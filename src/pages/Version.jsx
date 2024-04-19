import React from "react";
import Navbar from "../components/Navbar";

const Version = () => {
  return (
    <>
      <Navbar />

      <div className=" lg:ml-[400px] sm:ml-10 text-center">
        <h1 className=" text-red-500 text-3xl font-bold  mb-20">
          Software Information
        </h1>
        <div>
          <p className=" my-8 mr-8 underline">Version Infos:</p>
          <p className=" my-8 mr-8">Developer : Robin Hasler</p>
          <p className=" my-8 mr-8">Release Date : 06/2024</p>
          <p className=" my-8 mr-8">Current Version : 1.0</p>
        </div>
      </div>
    </>
  );
};

export default Version;
