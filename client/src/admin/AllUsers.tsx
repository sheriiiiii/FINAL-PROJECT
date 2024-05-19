import React, { useEffect, useState } from "react";

interface IUser {
  id: string,
  fname: string,
  lname: string,
  email: string,
  type: string
}

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"

import axios from "axios";

export default function ShowAllUsers() {

  const [users, setUsers] = useState<IUser[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/user/get-all-users");
      if (!Array.isArray(response.data)) {
        console.error("response is not an array")
      } else {
        setUsers(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers()
  })

  return (
    <Table>
      <TableCaption>A list of Users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>First Name</TableHead>
          <TableHead>Last Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Type</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => (
          <TableRow key={index}>
            <TableCell>{user.fname}</TableCell>
            <TableCell>{user.lname}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.type}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
