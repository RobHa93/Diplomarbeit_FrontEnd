export default function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full rounded-lg shadow bg-gray-600 bg-opacity-80 backdrop-blur-md md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 md:space-y-6 content-center">
          <h1 className="text-xl text-center font-bold md:text-2xl text-white">
            Sign in
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label htmlFor="email" className="block mb-2 text-xl text-white">
                User name
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 text-white bg-gray-700"
                placeholder="User name"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-xl text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-white bg-gray-700"
                required=""
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
