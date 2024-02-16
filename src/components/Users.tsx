import { UserProps } from "../routes/types/types";
import { GrMapLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

const Users = ({
  login,
  avatar_url,
  location,
  bio,
  followers,
  following,
  public_repos,
}: UserProps) => {
  return (
    <div className="flex items-center justify-center relative xl:top-[80px] lg:top-[80px] md:top-[100px]">
      <div className=" shadow-md rounded-lg p-20">
        <img
          src={avatar_url}
          alt={login}
          className="w-32 h-32 rounded-full mx-auto "
        />
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold">{login}</h2>
          <p className="text-gray-600">{bio}</p>
          {location && (
            <div className="flex items-center justify-center mt-2">
              <GrMapLocation className="text-blue-600 mr-2" />
              <span className="text-white">{location}</span>
            </div>
          )}
        </div>
        <div className="flex items-center justify-center mt-4">
          <p className="text-gray-600 bg-slate-600 p-3 rounded-lg">
            <span className="text-blue-400 font-semibold">Seguidores: </span>
            <span className="font-bold">{followers}</span>
          </p>
          <p className="text-gray-600 ml-4 bg-slate-600 p-3 rounded-lg">
            <span className="text-blue-400 font-semibold">Seguindo: </span>
            <span className="font-bold">{following}</span>
          </p>
          <p className="text-gray-600 ml-4 bg-slate-600 p-3 rounded-lg">
            <span className="text-blue-400 font-semibold">Repositórios: </span>
            <span className="font-bold">{public_repos}</span>
          </p>
        </div>
        <Link to={`/userRepos/${login}`}>
          <button className="flex items-center gap-2 bg-blue-400 p-4 rounded-lg text-white font-semibold relative top-[40px] ml-16">
            Ver melhores repositorios
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Users;
