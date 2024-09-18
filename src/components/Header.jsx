import React, { useEffect, useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [isAdmin, setIsAdmin] = useState(false); // Track if the user is an admin
  const location = useLocation();

  const showSearchBarPaths = ["/", "/home", "/blogs"];

  // Toggle menu for desktop dropdown
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Handle login state and set user/admin based on localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    const storedAdmin = localStorage.getItem("admin");

    if (token) {
      setIsLoggedIn(true);
      if (storedAdmin) {
        setUsername(storedAdmin); // Admin username
        setIsAdmin(true); // Mark as admin
      } else if (storedUser) {
        setUsername(storedUser); // User username
        setIsAdmin(false); // Mark as user
      }
    } else {
      setIsLoggedIn(false);
      setUsername("");
      setIsAdmin(false);
    }
  }, []);

  // Close the menu if clicked outside
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

  // Conditionally show search bar based on path
  const shouldShowSearchBar = showSearchBarPaths.includes(location.pathname);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        {/* Logo and Search bar section */}
        <div className="flex items-center gap-4">
          <div className="text-xl md:text-2xl font-bold">
            <span>Blog Posting App</span>
          </div>
          {shouldShowSearchBar && (
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <span className="absolute top-2.5 right-3 text-gray-400">🔍</span>
            </div>
          )}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {isLoggedIn ? (
            <>
              {isAdmin ? (
                location.pathname === "/admin-dashboard" ? (
                  <Link to={"/"}>Home</Link>
                ) : (
                  <Link to={"/admin-dashboard"}>Dashboard</Link>
                )
              ) : location.pathname === "/createblog" ? (
                <Link to={"/"}>Home</Link>
              ) : (
                <Link to={"/createblog"} className="flex gap-2 group">
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
                  <p className="text-sm font-normal group-hover:text-base">
                    Write
                  </p>
                </Link>
              )}
              <div className="relative" ref={menuRef}>
                {username && (
                  <button
                    className="w-8 h-8 rounded-full bg-[#9A40A9] text-white font-semibold"
                    onClick={toggleMenu}
                  >
                    {username.charAt(0).toUpperCase()}
                  </button>
                )}
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                    <Link
                      onClick={() => {
                        localStorage.clear();
                        setIsLoggedIn(false);
                        setUsername("");
                        setIsAdmin(false);
                      }}
                      to={"/"}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Sign Out
                    </Link>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/signup" className="text-[32px] font-semibold">
                <CgProfile />
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md">
            <ul className="flex flex-col items-center space-y-4 py-4">
              {isLoggedIn ? (
                <>
                  {isAdmin ? (
                    location.pathname === "/admin-dashboard" ? (
                      <Link to={"/"}>Home</Link>
                    ) : (
                      <Link to={"/admin-dashboard"}>Dashboard</Link>
                    )
                  ) : location.pathname === "/createblog" ? (
                    <Link to={"/"}>Home</Link>
                  ) : (
                    <Link to={"/createblog"}>Write</Link>
                  )}
                  <Link
                    onClick={() => {
                      localStorage.clear();
                      setIsLoggedIn(false);
                      setUsername("");
                      setIsAdmin(false);
                    }}
                    to={"/"}
                  >
                    Sign Out
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/signup">
                    <CgProfile />
                  </Link>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
