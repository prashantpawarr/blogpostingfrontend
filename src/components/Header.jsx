import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ initials }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        <div className="flex gap-9">
          <div className="text-2xl font-bold">
            <span>Blog Posting App</span>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <span className="absolute top-2.5 right-3 text-gray-400">🔍</span>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <Link to={"#"} className="flex gap-2 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              aria-label="Write"
              className="group-hover:scale-100"
            >
              <path
                fill="currentColor"
                d="M14 4a.5.5 0 0 0 0-1zm7 6a.5.5 0 0 0-1 0zm-7-7H4v1h10zM3 4v16h1V4zm1 17h16v-1H4zm17-1V10h-1v10zm-1 1a1 1 0 0 0 1-1h-1zM3 20a1 1 0 0 0 1 1v-1zM4 3a1 1 0 0 0-1 1h1z"
              ></path>
              <path
                stroke="currentColor"
                d="m17.5 4.5-8.458 8.458a.25.25 0 0 0-.06.098l-.824 2.47a.25.25 0 0 0 .316.316l2.47-.823a.25.25 0 0 0 .098-.06L19.5 6.5m-2-2 2.323-2.323a.25.25 0 0 1 .354 0l1.646 1.646a.25.25 0 0 1 0 .354L19.5 6.5m-2-2 2 2"
              ></path>
            </svg>
            <p className="text-sm font-normal group-hover:text-base">Write</p>
          </Link>
          <div className="relative" ref={menuRef}>
            <button
              className="w-8 h-8 rounded-full bg-[#9A40A9] text-white font-semibold"
              onClick={toggleMenu}
            >
              P
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Sign Out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
