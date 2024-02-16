import { UserProps } from "../types/types";

// Components
import SearchUser from "../../components/SearchUser";
import Users from "../../components/Users";
import Error from "../../components/Error";

// Estado do usuário
import { useState } from "react";

const Hero = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const loadingUser = async (userName: string) => {
    setError(false);
    setUser(null);

    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    const {
      avatar_url,
      bio,
      login,
      location,
      followers,
      following,
      public_repos,
    } = data;

    const userData: UserProps = {
      avatar_url,
      bio,
      login,
      location,
      followers,
      following,
      public_repos,
    };

    if (response.status === 404) {
      setError(true);
      return;
    }

    setUser(userData);
  };

  return (
    <>
      <SearchUser loadingUser={loadingUser} />
       {user && <Users {...user} />}
      <div className="text-center mt-6 text-2xl text-[red] ">{error && <Error />}</div>
    </>
  );
};

export default Hero;
