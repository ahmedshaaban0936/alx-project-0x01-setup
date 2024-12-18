// pages/users/index.tsx
import { GetStaticProps } from 'next';
import UserCard from '../../components/common/UserCard';

// Example data type (adjust accordingly)
interface User {
  id: string;
  name: string;
  email: string;
}

interface UsersPageProps {
  users: User[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="users-page">
      <h1 className="text-4xl">Users List</h1>
      <div className="user-list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

// Fetch users data at build time (static generation)
export const getStaticProps: GetStaticProps = async () => {
  // Replace with your data fetching logic (API call or static data)
  const users = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  ];

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;
