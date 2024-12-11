"use client";
import React from "react";
import Link from "next/link";
import { ImgComp } from "@/shared/ImgComp";
import { deleteCookie } from "cookies-next";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const DashboardPage = ({ user, resumes }) => {
  // if (!user) return "";

  const handleLogout = async () => {
    // Clear cookies
    deleteCookie("token");
    deleteCookie("userID");

    // Sign out from NextAuth
    await signOut({ callbackUrl: "/login" });
  };
  const router = useRouter();


  return (
    <div className="container max-w-[90%] mx-auto px-4 py-8  rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome, {user.firstName} {user.lastName}
          </h1>
          <p className="text-lg text-gray-700">{user.email}</p>
        </div>
        <ImgComp
          src={user.image}
          alt={user.firstName + " " + user.lastName}
          className="w-16 h-16 rounded-full object-cover"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Your Resumes</h2>
        <ul>
          {resumes &&
            resumes.map((resume) => (
              <li key={resume.id} className="py-2">
                <div>
                  <Link
                    href={`/resume/${resume.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {resume.title}
                  </Link>
                </div>
              </li>
            ))}
        </ul>
        
      </div>
      <div className="flex justify-between">
        
      <div className="flex space-x-3 items-center">
        
        <Link
          href="/services"
          className="bg-[#F9E547] text-black px-4 py-2 rounded"
        >
          Create New Resume
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
      <Button
        onClick={() => router.push('/')}
        className="flex items-center bg-[#F9E547] text-black py-0 px-4 rounded h-auto shadow-md ml-8"
      >
        {/* Left Arrow Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 mr-2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Home
      </Button>
      </div>
    </div>
  );
};

export default DashboardPage;
