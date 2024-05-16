import React from "react";
import Navbar from "../components/Navbar";

const Version = () => {
  return (
    <>
      <Navbar />

      <div className=" lg:ml-[400px] sm:ml-10">
        <h1 className=" text-red-500 text-3xl font-bold text-center">
          Software Information
        </h1>
        <div>
          <p className=" mb-5 mt-20 mr-8 font-bold underline">Version Info:</p>
          <p className=" my-5 mr-8 font-bold">Developer : Robin Hasler</p>
          <p className=" my-5 mr-8 font-bold">Release Date : 06/2024</p>
          <p className=" my-5 mr-8 font-bold">Current Version : 1.0</p>
        </div>
      </div>
    </>
  );
};

export default Version;
