// components/common/UserCard.tsx

interface UserCardProps {
    user: {
      id: string;
      name: string;
      email: string;
    };
  }
  
  const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
      <div className="user-card border p-4">
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p>{user.email}</p>
      </div>
    );
  };
  
  export default UserCard;
  