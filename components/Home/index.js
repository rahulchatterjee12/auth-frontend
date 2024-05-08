"use client";
import getUsers from "@/helper/auth/getUsers";
import { Avatar, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const index = () => {
  const [users, setUsers] = useState();
  const router = useRouter();

  useEffect(() => {
    getUsers()
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        router.push("/login");
      });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        marginX: 2,
        marginY: 3,
        flexDirection: { xs: "column", md: "row" },
        width: { md: "100%" },
      }}
    >
      {users ? (
        users.map((user) => (
          <Box
            sx={{
              border: "1px solid gray",
              borderRadius: "5px",
              padding: 2,
              boxShadow: 1,
            }}
            key={user._id}
          >
            <div className="flex gap-2 items-center">
              <Avatar>{user.firstname.charAt(0)}</Avatar>
              <p>{user.firstname + " " + user.lastname}</p>
            </div>
            <p className="p-1">Email: {user.email}</p>
            <p className="p-1">Username: {user.username}</p>
          </Box>
        ))
      ) : (
        <p>loading...</p>
      )}
    </Box>
  );
};

export default index;
