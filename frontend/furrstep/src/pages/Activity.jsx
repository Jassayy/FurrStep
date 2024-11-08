import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Activity = () => {
     const { petId } = useParams();
     const [pet, setPet] = useState(null);

     useEffect(() => {
          const fetchPet = async () => {
               try {
                    const response = await axios.get(
                         `http://localhost:3000/api/v1/pets/${petId}`,
                         {
                              withCredentials: true,
                         }
                    );
                    setPet(response.data.data);
               } catch (error) {
                    console.error("Error fetching pet:", error);
               }
          };

          if (petId) {
               fetchPet();
          }
     }, [petId]);

     return (
          <div className="relative min-h-screen pt-16 overflow-hidden bg-gradient-to-b from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
               <div className="absolute top-20 left-0 w-64 md:w-96 h-64 md:h-96 bg-purple-500 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
               <div className="absolute top-40 right-0 w-64 md:w-96 h-64 md:h-96 bg-teal-500 dark:bg-teal-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
               <div className="absolute bottom-0 left-1/2 w-64 md:w-96 h-64 md:h-96 bg-pink-600 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

               {pet && (
                    <div className="relative z-10 container mx-auto px-4">
                         <h1 className="text-2xl font-bold">
                              {pet.name}'s Activity
                         </h1>
                         {/* Add more pet activity content here */}
                    </div>
               )}

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

export default Activity;
