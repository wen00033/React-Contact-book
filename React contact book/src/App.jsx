import { Link, Outlet } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "My Contact", href: "/mycontact", current: false },
  { name: "Add New", href: "/", current: false },
  { name: "Random", href: "/random", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function App() {
  return (
    <>
      <Disclosure as="nav" className="bg-teal-800">
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white-400 hover:bg-teal-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        className="text-gray-300 hover:bg-teal-700 hover:text-white
                          rounded-md px-3 py-2 text-sm font-medium"
                      >
                        <Link to={item.href}>{item.name}</Link>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="button"
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-teal-900 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  <Link to={item.href}>{item.name}</Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      </Disclosure>
      <Outlet />
    </>
  );
}

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }
