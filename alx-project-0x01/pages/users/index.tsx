// pages/users/index.tsx
import { useState } from 'react';
import UserCard from '../../components/common/UserCard';
import UserModal from '../../components/common/UserModal';
import { UserData } from '../../interfaces';

const UsersPage = () => {
  const [users, setUsers] = useState<UserData[]>([]);  // Array of users
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = (userData: UserData) => {
    setUsers((prevUsers) => [...prevUsers, userData]);
  };

  return (
    <div className="users-page">
      <h1 className="text-4xl mb-4">Users List</h1>
      
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        Add New User
      </button>

      <div className="user-list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddUser}
        onSubmit={handleAddUser}  // Ensure you pass the onSubmit function
      />
    </div>
  );
};

export default UsersPage;
