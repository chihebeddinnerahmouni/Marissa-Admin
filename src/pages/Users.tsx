import TableUsers from '../components/users/TableUsers';
import UserStat from '../components/users/UsersStat';
import { FaUsers } from "react-icons/fa";
import { GiCaptainHatProfile } from "react-icons/gi";
import { FaUser } from "react-icons/fa";

const users_array = () => [
  {
    id: 1,
    title: "Total users",
    icon: FaUsers,
    number: 1000,
        growth: 10,
        state: "up",
    from: "last month",
    color: "#8280FF",
    bgColor: "#ECE9FF",
  },
  {
    id: 2,
    title: "Total Captains",
    icon: GiCaptainHatProfile,
    number: 100,
      growth: 5,
      state: "down",
    from: "last month",
    color: "FEC53D",
    bgColor: "#FFECE9",
  },
  {
    id: 3,
    title: "Total Users",
    icon: FaUser,
    number: 900,
      growth: 5,
      state: "down",
    from: "last month",
    color: "#4AD991",
    bgColor: "#E9FFE9",
  },
];

const Users = () => {
    return (
        <div className="p-4 md:p-8">
            <div className="">
                <h1 className="text-2xl md:text-4xl font-bold">User Management</h1>
                <p className="text-sm md:text-base text-gray-600">Manage all the users in the system</p>
            </div>

            <div className="stats my-4 flex gap-2 overflow-auto">
                {users_array().map((user) => (
                    <UserStat
                        key={user.id}
                        Item={user}
                    />
                ))}
            </div>
            <div className="overflow-x-auto">
                <TableUsers />
            </div>
        </div>
    );
}

export default Users;