import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <header className="bg-white shadow-md px-4 md:px-6 py-4">

      
      <div className="hidden md:flex items-center justify-between">

        
        <h2 className="text-2xl font-bold text-blue-600">
          Analytics Dashboard
        </h2>

        
        <div className="flex items-center gap-5">

          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-lg pl-9 pr-3 py-2 w-64 focus:outline-none"
            />
          </div>

          <FaBell className="text-xl text-gray-600 hover:text-blue-600 cursor-pointer" />

          <div className="flex items-center gap-2">
            <FaUserCircle className="text-3xl text-gray-700" />
            <span className="font-medium whitespace-nowrap">
              Sejal Nama
            </span>
          </div>

        </div>
      </div>

     
      <div className="flex md:hidden justify-center items-center gap-4">

        <div className="relative w-48">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />

          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-lg pl-8 pr-3 py-2 text-sm focus:outline-none"
          />
        </div>

        <FaBell className="text-base text-gray-600" />

        <FaUserCircle className="text-2xl text-gray-700" />

      </div>

    </header>
  );
}

export default Navbar;