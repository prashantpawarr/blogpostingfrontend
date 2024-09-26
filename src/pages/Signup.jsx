import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserSignup } from "../utils/api";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [showpassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const avatarImages = [
    "/images/bee.png",
    "/images/boy-one.png",
    "/images/boy-two.png",
    "/images/girl-one.png",
    "/images/girl-two.png",
    "/images/girl-three.png",
    "/images/panda.png",
    "/images/sponge-box.png",
    "/images/boy-three.jpg",
    "/images/girl-four.jpg",
  ];

  const [selectedAvatar, setSelectedAvatar] = useState(avatarImages[0]);

  const handleImage = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const signupData = async (event) => {
    event.preventDefault();

    const formData = { username, email, password, role, selectedAvatar };

    try {
      await UserSignup(formData);
      toast("User Created Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (err) {
      console.log(err, "User not Created");
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
        autoComplete="off"
        onSubmit={signupData}
        className="rounded-[8px] flex gap-[20px] flex-col shadow-sm py-[20px] px-[50px] w-[500px] border"
      >
        <div className="flex flex-col gap-3">
          <p className="text-center font-bold text-2xl">
            Welcome to BlogPostingApp{" "}
          </p>
          <h2 className="text-center font-semibold text-3xl">SignUp</h2>
        </div>
        <div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={username}
              autoComplete="new-username"
              onChange={(e) => setUserName(e.target.value)}
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
              autoComplete="new-email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={password}
              autoComplete="new-password"
              onChange={(e) => setPassword(e.target.value)}
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
                onClick={togglePassword}
                className="text-gray-600 focus:outline-none"
              >
                {showpassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="designation"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={role}
              autoComplete="new-designation"
              onChange={(e) => setRole(e.target.value)}
              required
            />
            <label
              htmlFor="designation"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
            >
              Designation
            </label>
          </div>
          <div className="flex flex-col gap-2 z-0 w-full mb-4">
            <h2 className="text-lg text-black font-medium ">
              Select your Avatar
            </h2>
            <div className="grid grid-cols-5 gap-2">
              {avatarImages &&
                avatarImages.map((avatar, index) => (
                  <img
                    key={index}
                    className={`${
                      selectedAvatar === avatar
                        ? "border-red-600 border-[4px]"
                        : "none"
                    } w-14 h-14 rounded-full cursor-pointer hover:border-red-600 hover:border-[4px]`}
                    src={avatar}
                    alt="avatar"
                    onClick={() => handleImage(avatar)}
                  />
                ))}
            </div>
          </div>
          <button className="bg-black text-white font-medium text-lg w-full py-2">
            Sign Up
          </button>
          <p className="text-center py-2 ">or</p>
          <p className="text-center">
            Already have an account?{" "}
            <span>
              <Link className="text-blue-600 hover:underline" to={"/login"}>
                Login
              </Link>
            </span>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
