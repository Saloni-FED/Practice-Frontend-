import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"; // Import close icon

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false); // State to control drawer

  // Function to toggle the drawer
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="max-w-7xl mx-auto container flex justify-between items-center font-font-gen py-3 max-lg:p-3">
      {/* Logo and navigation links */}
      <div className="flex justify-center items-center">
        {/* Logo or brand */}
        <h1
          className="md:mr-4 font-bold lg:text-2xl text-xl cursor-pointer"
          onClick={toggleDrawer} // Click to toggle drawer
        >
          GoDaddy
        </h1>
        {/* Main navigation - visible on large screens */}
        <ul className="hidden xl:flex xl:flex-row gap-6 text-base text-gray">
          <li>Domain name</li>
          <li>Website hosting</li>
          <li>Commerce</li>
          <li>Email marketing</li>
          <li>Expert Services</li>
          <li>More</li>
        </ul>
      </div>

      {/* Right-side options (Help, Sign in, Cart) */}
      <div>
        <ul className="flex gap-6 items-center text-base text-gray">
          <li>Help center</li>
          <li>Sign in</li>
          <li><FaShoppingCart /></li>
        </ul>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 left-0 h-1/2 w-full bg-white shadow-lg transform transition-transform duration-300 ${
          isDrawerOpen ? "translate-y-0" : "-translate-y-full"
        } z-50`}
      >
        {/* Drawer header with close button */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">GoDaddy</h2>
          <button onClick={toggleDrawer}>
            <AiOutlineClose className="text-xl" />
          </button>
        </div>

        {/* Drawer content with navigation links */}
        <ul className="flex flex-col gap-6 text-base text-gray p-4">
          <li>Domain name</li>
          <li>Website hosting</li>
          <li>Commerce</li>
          <li>Email marketing</li>
          <li>Expert Services</li>
          <li>More</li>
        </ul>
      </div>

      {/* Overlay for mobile drawer when open */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleDrawer}
        />
      )}
    </div>
  );
};

export default Navbar;
