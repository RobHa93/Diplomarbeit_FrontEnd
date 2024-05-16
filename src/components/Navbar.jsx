import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    // Lösche das Token aus dem lokalen Speicher
    localStorage.removeItem("token");

    // Weiterleitung zur Anmeldeseite
    window.location.href = "/signIn";
  };
  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10 ">
                    <div className="flex h-16 shrink-0 items-center">
                      <Link to="/home">
                        <img
                          className="h-10 w-auto"
                          src="./src/assets/img/jako-mueller.svg"
                          alt="Your Company"
                        />
                      </Link>
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul className="-mx-2 space-y-1">
                            <li>
                              <Link to="/home">
                                <a className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold  text-gray-400 hover:bg-gray-800 hover:text-white ">
                                  <HomeIcon
                                    className="h-6 w-6 shrink-0"
                                    aria-hidden="true"
                                  />
                                  Home
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link to="/documents">
                                <a className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold  text-gray-400 hover:bg-gray-800 hover:text-white ">
                                  <DocumentDuplicateIcon
                                    className="h-6 w-6 shrink-0"
                                    aria-hidden="true"
                                  />
                                  Documents
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link to="/report">
                                <a className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold  text-gray-400 hover:bg-gray-800 hover:text-white ">
                                  <ChartPieIcon
                                    className="h-6 w-6 shrink-0"
                                    aria-hidden="true"
                                  />
                                  Report
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link to="/contact">
                                <a className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold  text-gray-400 hover:bg-gray-800 hover:text-white ">
                                  <UsersIcon
                                    className="h-6 w-6 shrink-0"
                                    aria-hidden="true"
                                  />
                                  Contact
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <details
                          className="dropdown"
                          open={isOpen}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <summary className="m-1 btn group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                            <Cog6ToothIcon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />{" "}
                            Info
                          </summary>
                          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li className="  p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white ">
                              <Link to="/impressum">
                                {" "}
                                <p>Impressum</p>
                              </Link>
                            </li>
                            <li className="  p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white ">
                              <Link to="/version">
                                {" "}
                                <p>Version</p>
                              </Link>
                            </li>
                          </ul>
                        </details>
                      </ul>
                      <ul>
                        <li
                          className="group flex gap-x-3 rounded-md mb-10 p-2 text-sm leading-6 font-semibold  text-gray-400 hover:bg-gray-800 hover:text-white"
                          onClick={handleLogout}
                        >
                          Logout
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component,  */}
          <div className=" flex grow flex-col gap-y-20  overflow-y-auto bg-slate-800 px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <Link to="/home">
                <img
                  className="mt-7 h-10 w-auto"
                  src="./src/assets/img/jako-mueller.svg"
                  alt="Company"
                />
              </Link>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul className="-mx-2 space-y-1">
                    <li>
                      <Link to="/home">
                        <a className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold  text-gray-400 hover:bg-gray-800 hover:text-white ">
                          <HomeIcon
                            className="h-6 w-6 shrink-0"
                            aria-hidden="true"
                          />
                          Home
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/documents">
                        <a className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold  text-gray-400 hover:bg-gray-800 hover:text-white ">
                          <DocumentDuplicateIcon
                            className="h-6 w-6 shrink-0"
                            aria-hidden="true"
                          />
                          Documents
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/report">
                        <a className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold  text-gray-400 hover:bg-gray-800 hover:text-white ">
                          <ChartPieIcon
                            className="h-6 w-6 shrink-0"
                            aria-hidden="true"
                          />
                          Report
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        <a className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold  text-gray-400 hover:bg-gray-800 hover:text-white ">
                          <UsersIcon
                            className="h-6 w-6 shrink-0"
                            aria-hidden="true"
                          />
                          Contact
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <details
                  className="dropdown"
                  open={isOpen}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <summary className="m-1 btn group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                    <Cog6ToothIcon
                      className="h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />{" "}
                    Info
                  </summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li className="  p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white ">
                      <Link to="/impressum">
                        {" "}
                        <p>Impressum</p>
                      </Link>
                    </li>
                    <li className="  p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white ">
                      <Link to="/version">
                        {" "}
                        <p>Version</p>
                      </Link>
                    </li>
                  </ul>
                </details>
              </ul>
              <ul>
                <li
                  className="group flex gap-x-3 rounded-md mb-10 p-2 text-sm leading-6 font-semibold  text-gray-400 hover:bg-gray-800 hover:text-white"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72 ">
          <div className="sticky  top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
          </main>
        </div>
      </div>
    </>
  );
}
