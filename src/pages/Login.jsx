import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AdminLogin, UserLogin } from "../utils/api";
import { ToastContainer } from "react-toastify";
import { SuccessToast } from "../components/SuccessToast";
import { ErrorToast } from "../components/ErrorToast";

const Login = () => {
  const [showpassword, setShowPassword] = useState(false);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const loginData = async (event) => {
    event.preventDefault();
    const formData = { username, email, password };

    try {
      let result;
      if (role === "user") {
        result = await UserLogin(formData);
        if (result.success) {
          SuccessToast("User Logged In Successfully!");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      } else if (role === "admin") {
        result = await AdminLogin(formData);
        if (result.success) {
          SuccessToast("Admin Logged In Successfully");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      }
    } catch (err) {
      console.error(err);
      ErrorToast("Something went wrong, please try again later");
    } finally {
      setUserName("");
      setPassword("");
      setEmail("");
      setRole("");
    }
  };

  const togglePassword = () => {
    setShowPassword(!showpassword);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={loginData}
        autoComplete="off"
        className="rounded-[8px] flex gap-[20px] flex-col shadow-sm py-[20px] px-[50px] w-[500px] border"
      >
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
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              autoComplete="new-name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="new-email"
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
              type={showpassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
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

            <div className="absolute inset-y-0 right-0 flex items-center px-2">
              <button
                type="button"
                className="text-gray-600 focus:outline-none"
                onClick={togglePassword}
              >
                {showpassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <select
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            >
              <option value="" disabled>
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
      <ToastContainer />
    </div>
  );
};

export default Login;
