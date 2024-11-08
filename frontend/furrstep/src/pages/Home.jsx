import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
     const [username, setUsername] = useState("");

     useEffect(() => {
          const fetchUser = async () => {
               try {
                    const response = await axios.get(
                         "http://localhost:3000/api/v1/users/user",
                         {
                              withCredentials: true,
                         }
                    );
                    const name = response.data.data.username;
                    setUsername(name.charAt(0).toUpperCase() + name.slice(1));
               } catch (error) {
                    console.error("Error fetching user:", error);
               }
          };

          fetchUser();
     }, []);

     return (
          <div className="relative min-h-screen pt-16 overflow-hidden bg-gradient-to-b from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
               {/* Animated blobs - Responsive sizes */}
               <div className="absolute top-20 left-0 w-64 md:w-96 h-64 md:h-96 bg-purple-500 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
               <div className="absolute top-40 right-0 w-64 md:w-96 h-64 md:h-96 bg-teal-500 dark:bg-teal-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
               <div className="absolute bottom-0 left-1/2 w-64 md:w-96 h-64 md:h-96 bg-pink-600 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

               <div className="relative z-10 text-center pt-10">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                         Hieee!{" "}
                         <span className="text-blue-500 dark:text-yellow-500">
                              {username}
                         </span>
                    </h1>
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

export default Home;
