import Navbar from "../Components/Navbar";
import { Menu, MenuItem, MenuItems, MenuButton } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const TopUpPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#FAFBFD] w-full h-screen flex flex-col justify-center align-middle items-center gap-6 pt-24">
        <div className="w-1/3 justify-start">
          <h2 className="text-6xl font-bold">Top Up</h2>
        </div>
        <div className="bg-white w-1/3 rounded-lg h-2/4 flex justify-center align-middle items-center shadow-md">
          <form action="" className="w-3/4 flex flex-col gap-4">
            <div className="bg-[#FAFBFD] p-4 rounded-lg">
              <div className="font-bold">Amount</div>
              <input
                type="text"
                className="border-b-2 border-black w-full bg-transparent"
              ></input>
            </div>
            <div className="w-full flex justify-center align-middle items-center">
              <div className="bg-[#EDEDED] p-2 mr-2 rounded-md font-bold">
                FROM
              </div>
              <Menu as="div" className="relative inline-block text-left w-full">
                <div>
                  <MenuButton className="inline-flex w-full justify-between gap-x-1.5 border-none rounded-md  bg-[#FAFBFD] px-3 py-2 text-sm  text-gray-900 shadow-md hover:bg-gray-50">
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
            <div className="w-full flex bg-[#FAFBFD] p-3 rounded-md">
              <div>Note: </div>
              <input className="bg-transparent w-full" type="text"></input>
            </div>
            <button className="bg-[#19918F] text-white font-bold text-2xl p-4 rounded-lg">
              Transfer
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default TopUpPage;
