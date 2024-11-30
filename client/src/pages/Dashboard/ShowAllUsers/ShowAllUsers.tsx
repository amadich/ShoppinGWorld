import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Define the interface for the user data
interface User {
  _id: string;
  username: string;
  email: string;
  role: string;
  datecreate: string;
}

export default function ShowAllUsers() {
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;
  const [users, setUsers] = useState<User[]>([]); // State to hold the fetched users
  const [searchQuery, setSearchQuery] = useState<string>(""); // State to hold the search query
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]); // State to hold the filtered users

  // Fetch users from the server
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${SERVER_URL}/api/showallusers`);
        setUsers(response.data); // Set the fetched users
        setFilteredUsers(response.data); // Initially, show all users
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    
    fetchUsers();
  }, [SERVER_URL]); // Dependency on SERVER_URL

  // Handle the search filter
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter users by username or email
    const filtered = users.filter(
      (user) =>
        user.username.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <>
      <div className="w-full m-auto text-center space-x-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          className="w-[80%] input input-primary input-bordered rounded-xl"
          placeholder="Search User By E-mail or Username"
        />
        <Link to={"/dashboard"}>
            <button className="btn btn-warning">Dashboard</button>*
        </Link>
      </div>

      <div className="overflow-x-auto h-[100vh] mt-10 w-[90%] m-auto">
        <table className="table table-xs">
          <thead className=" text-lg ">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Date Created</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td 
                     className="font-bold uppercase"
                     style={ user.role == "admin" ? {color: "red"} : {color: "green"} }>
                  {user.role}</td>
                <td>{user.datecreate}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Date Created</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
