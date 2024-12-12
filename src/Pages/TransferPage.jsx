import { NavLink } from "react-router";
import Navbar from "../Components/Navbar";
const TransferPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#FAFBFD] w-full h-screen flex flex-col justify-center align-middle items-center gap-6 pt-24">
        <div className="w-1/3 justify-start">
          <h2 className="text-6xl font-bold">Transfer</h2>
        </div>
        <div className="bg-white w-1/3 rounded-lg h-2/4 flex justify-center align-middle items-center shadow-md">
          <form action="" className="w-3/4 flex flex-col gap-4">
            <div className="w-full flex justify-center align-middle items-center">
              <div className="bg-[#EDEDED] p-2 rounded-md font-bold">FROM</div>
              <div className="relative inline-block text-left w-full">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-between gap-x-1.5 border-none rounded-md  bg-[#FAFBFD] px-3 py-2 text-sm  text-gray-900 shadow-md hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    Credit Card
                    <svg
                      className="-mr-1 size-5 text-black text-3xl"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#FAFBFD] p-4 rounded-lg">
              <div className="font-bold text-xl">Amount</div>
              <input
                type="text"
                className="border-b-2 border-black w-full bg-transparent"
              ></input>
            </div>
            <div className="">
              Balance : <span className="text-[#26AA99]">IDR 10.000.000</span>
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
export default TransferPage;
