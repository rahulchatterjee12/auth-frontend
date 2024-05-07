"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import logout from "@/helper/auth/logout";
import { useRouter } from "next/navigation";
import getProfile from "@/helper/auth/getProfile";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setUser } from "@/store/slices/userSlice";
import { IconButton } from "@mui/material";

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    getProfile().then((res) => {
      if (res) dispatch(setUser(res.data.user));
    });
  }, []);

  return (
    <nav className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <Link
                href="/"
                className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
              >
                <svg
                  className="h-6 w-6 mr-1 text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <span className="font-bold">Code Editor</span>
              </Link>
            </div>
          </div>

          {user === null ? (
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/login" className="py-5 px-3">
                Login
              </Link>
              <Link
                href="/signup"
                className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
              >
                SignUp
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Avatar>{user.firstname.charAt(0)}</Avatar>{" "}
              <p className="text-gray-600 hidden md:block">
                {user.firstname + " " + user.lastname}
              </p>
              <IconButton
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => {
                  logout().then((res) => {
                    router.push("/login");
                    dispatch(clearUser());
                  });
                }}
              >
                <LogoutIcon />
              </IconButton>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
