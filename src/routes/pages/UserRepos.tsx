import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Repository } from "../types/types";

import { Link } from "react-router-dom";

const UserRepos = () => {
  const { username } = useParams<{ username: string }>();
  const [repos, setRepos] = useState<Repository[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?page=${page}&per_page=10`);
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
        } else {
          console.error("Failed to fetch repositories");
        }
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, [username, page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(Math.max(page - 1, 1));
  };

  return (
    <div className="mt-8">
      <Link to='/' className="absolute left-6 top-4">
        <button type="button" className="bg-white font-bold text-xl text-blue-600 p-2 rounded-lg">
          Voltar
        </button>
      </Link>
      <h2 className="text-2xl font-semibold mb-4">Welcome, <span className="text-[red]">{username}</span>! These are my top repositories:</h2>
      <div className="flex flex-wrap w-[50vw] gap-4 relative top-[12rem] left-[-4.6rem]">
        {repos.map((repo) => (
          <div key={repo.id} className="bg-white rounded-lg shadow-md p-4 w-[300px]">
            <h3 className="text-xl font-semibold mb-2 text-black">{repo.name}</h3>
            <p className="text-gray-600 mb-4 text-left ">{repo.description}</p>
            <div className="flex justify-between">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View on GitHub</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Open</button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between gap-4 mt-72  text-black font-bold">
        <button onClick={prevPage} disabled={page === 1} className="bg-gray-300 px-4 py-2 rounded-md">Prev</button>
        <button onClick={nextPage} className="bg-gray-300 px-4 py-2 rounded-md">Next</button>
      </div>
    </div>
  );
};

export default UserRepos;
