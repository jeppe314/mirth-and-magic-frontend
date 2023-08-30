import { useAuth0 } from "@auth0/auth0-react";

interface User {
  picture: string;
  name: string;
  email: string;
}

// no idea if this is good typescript practice

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const typedUser = (user as User) || undefined;

  return (
    isAuthenticated &&
    typedUser && (
      <div>
        <img src={typedUser.picture} alt={typedUser.name} />
        <h2>{typedUser.name}</h2>
        <p>{typedUser.email}</p>
      </div>
    )
  );
};

export default Profile;
