import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="rounded-[8px] flex gap-[20px] flex-col shadow-sm py-[20px] px-[50px] w-[500px] border">
        <div className="flex flex-col gap-3">
          <p className="text-center font-bold text-2xl">
            Welcome to BlogPostingApp{" "}
          </p>
          <h2 className="text-center font-semibold text-3xl">Login</h2>
        </div>
        <div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor ="name"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
            >
              Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="Password"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
            >
              Password
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <select
              name="role"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            >
              <option value="" disabled selected>
                Select Role
              </option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            <label
              htmlFor="role"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
            >
              Role
            </label>
          </div>

          <button className="bg-black text-white font-medium text-lg w-full py-2">
            Login
          </button>
          <p className="text-center py-2 ">or</p>
          <p className="text-center">
            New to BlogPostingApp?{" "}
            <span>
              <Link className="text-blue-600 hover:underline" to={"/signup"}>
                Signup
              </Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
