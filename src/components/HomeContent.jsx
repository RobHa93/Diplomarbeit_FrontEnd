import { Link } from "react-router-dom";
import searchImage from "../assets/img/search-icon-vector.jpg";
import vectorImage from "../assets/img/vector-documents-icon.jpg";

function HomeContent() {
  return (
    <div className=" bg-white px-4 lg:px-8 lg:ml-[400px] md:ml-0 ">
      <div className="  max-w-4xl px-6 lg:px-8 text-center sm:mx-auto">
        <div className="mx-auto max-w-7xl lg:mx-0 ">
          <h2 className=" text-3xl font-bold tracking-tight text-red-500 sm:text-4xl text-center">
            Service Tool JMF
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
            Select a Machine type bellow.
          </p>
        </div>
        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1  gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2s">
          <div>
            <Link to="/search">
              <img
                className="href={#} hover:opacity-70 shadow-xl  mx-auto h-[200px] w-[200px] rounded-2xl object-fill"
                src={searchImage}
                alt="search-icon"
              ></img>
            </Link>
            <h3 className="mt-9 text-xl font-semibold leading-8 tracking-tight text-gray-900">
              {" "}
              Search here!
            </h3>
          </div>

          <div>
            <Link to="/documents">
              <img
                className="href={#} hover:opacity-70 shadow-xl mx-auto h-[200px] w-[200px] rounded-2xl object-fill"
                src={vectorImage}
                alt="documents-icon"
              ></img>
            </Link>
            <h3 className="mt-9 text-xl font-semibold leading-8 tracking-tight text-gray-900">
              {" "}
              Look for Documents here!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
