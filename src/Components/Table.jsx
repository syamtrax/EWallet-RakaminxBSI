import { useTheme } from "../Context/ThemeContext";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import Tables from "./Tables";
function Table() {
  const { isDark } = useTheme();
  return (
    <>
      <div className="container mx-auto mt-10 flex justify-between h-auto">
        <div className="w-1/4">
          <div className="flex px-4 py-3 rounded-md  shadow-md overflow-hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              className="fill-gray-600 mr-3 rotate-90"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
            <input
              type="email"
              placeholder="Search Something..."
              className="w-full outline-none bg-transparent text-gray-600 text-sm"
            />
          </div>
        </div>
        <div
          className={`w-3/4 flex justify-end gap-10 align-middle items-center ${
            isDark ? `text-white` : `text-black`
          }`}
        >
          <div className="flex align-middle items-center gap-2">
            <div>Show</div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton
                  className={`inline-flex justify-center gap-x-1.5 rounded-md  ${
                    isDark ? `text-white bg-blue-500` : `bg-white`
                  } px-3 py-2 text-sm font-semibold text-gray-900 shadow-md hover:bg-gray-50`}
                >
                  Transaction
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 size-5 text-gray-400"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Last 5 transaction
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Last 10 transaction
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
          <div className="flex align-middle items-center gap-2">
            <div className="">Sort By</div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton
                  className={`inline-flex justify-center gap-x-1.5 rounded-md  ${
                    isDark ? `text-white bg-blue-500` : `bg-white`
                  } px-3 py-2 text-sm font-semibold text-gray-900 shadow-md hover:bg-gray-50`}
                >
                  Date
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 size-5 text-gray-400"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Newest
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Oldest
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton
                  className={`inline-flex justify-center gap-x-1.5 rounded-md  ${
                    isDark ? `text-white bg-blue-500` : `bg-white`
                  } px-3 py-2 text-sm font-semibold text-gray-900 shadow-md hover:bg-gray-50`}
                >
                  Descending
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 size-5 text-gray-400"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Ascending
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Descending
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10">
        <Tables></Tables>
      </div>
    </>
  );
}
export default Table;
