import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = ({ setIsAuthenticated }) => {
     const navigate = useNavigate();
     const [formData, setFormData] = useState({
          username: "",
          email: "",
          password: "",
     });

     const handleChange = (e) => {
          setFormData({
               ...formData,
               [e.target.name]: e.target.value,
          });
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          try {
               const response = await axios.post(
                    "http://localhost:3000/api/v1/users/signup",
                    formData,
                    {
                         withCredentials: true,
                         headers: {
                              "Content-Type": "application/json",
                         },
                    }
               );
               console.log("Signup successful:", response.data);
               setIsAuthenticated(true);
               // Handle successful signup (e.g., redirect to login)
               navigate("/home");
          } catch (error) {
               console.error(
                    "Signup error:",
                    error.response?.data || error.message
               );
               // Handle signup error (e.g., show error message)
          }
     };

     return (
          <div className="relative min-h-screen pt-16 overflow-hidden bg-gradient-to-b from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
               {/* Animated blobs - Responsive sizes */}
               <div className="absolute top-20 left-0 w-64 md:w-96 h-64 md:h-96 bg-purple-500 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
               <div className="absolute top-40 right-0 w-64 md:w-96 h-64 md:h-96 bg-teal-500 dark:bg-teal-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
               <div className="absolute bottom-0 left-1/2 w-64 md:w-96 h-64 md:h-96 bg-pink-600 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

               <div className="relative flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
                    {/* Form section - Full width on mobile, half on desktop */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center p-4 z-10">
                         <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-md">
                              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                                   Sign Up
                              </h2>
                              <form
                                   onSubmit={handleSubmit}
                                   className="space-y-4"
                              >
                                   <div>
                                        <label className="block text-gray-700 dark:text-gray-200 mb-2">
                                             Username
                                        </label>
                                        <input
                                             type="text"
                                             name="username"
                                             value={formData.username}
                                             onChange={handleChange}
                                             className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        />
                                   </div>
                                   <div>
                                        <label className="block text-gray-700 dark:text-gray-200 mb-2">
                                             Email
                                        </label>
                                        <input
                                             type="email"
                                             name="email"
                                             value={formData.email}
                                             onChange={handleChange}
                                             className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        />
                                   </div>
                                   <div>
                                        <label className="block text-gray-700 dark:text-gray-200 mb-2">
                                             Password
                                        </label>
                                        <input
                                             type="password"
                                             name="password"
                                             value={formData.password}
                                             onChange={handleChange}
                                             className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        />
                                   </div>
                                   <button
                                        type="submit"
                                        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
                                   >
                                        Sign Up
                                   </button>
                              </form>
                              <p className="mt-4 text-center text-sm sm:text-base text-gray-600 dark:text-gray-300">
                                   Already have an account?{" "}
                                   <Link
                                        to="/login"
                                        className="text-teal-600 hover:text-teal-700 font-semibold"
                                   >
                                        Login here
                                   </Link>
                              </p>
                         </div>
                    </div>

                    {/* Quote section - Hidden on mobile, shown on desktop */}
                    <div className=" lg:flex w-full lg:w-1/2 items-center justify-center p-4 lg:px-12 z-10">
                         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-lg">
                              "Until one has loved an animal, a part of one's
                              soul remains unawakened."
                              <span className="block mt-4 text-xl sm:text-2xl text-purple-600">
                                   - Anatole France
                              </span>
                         </h1>
                    </div>
               </div>

               <style jsx>{`
                    @keyframes blob {
                         0% {
                              transform: translate(0px, 0px) scale(1);
                         }
                         33% {
                              transform: translate(30px, -50px) scale(1.1);
                         }
                         66% {
                              transform: translate(-20px, 20px) scale(0.9);
                         }
                         100% {
                              transform: translate(0px, 0px) scale(1);
                         }
                    }
                    .animate-blob {
                         animation: blob 7s infinite;
                    }
                    .animation-delay-4000 {
                         animation-delay: 4s;
                    }
               `}</style>
          </div>
     );
};

export default SignUp;