import TableUsers from '../components/users/TableUsers';

const Users = () => {
    return (
        <div className="p-4 md:p-8">
            <div className="mb-4">
                <h1 className="text-2xl md:text-4xl font-bold">User Management</h1>
                <p className="text-sm md:text-base text-gray-600">Manage all the users in the system</p>
            </div>
            <div className="overflow-x-auto">
                <TableUsers />
            </div>
        </div>
    );
}

export default Users;