type SearchProps = {
  loadingUser: (userName: string) => Promise<void>;
};

import { useState, KeyboardEvent } from "react";

// Icons
import { BsSearch } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";

const SearchUser = ({ loadingUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadingUser(userName);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-xl font-semibold mb-4 mt-4 flex items-center gap-2">
          Busque por um <span className="text-[#ef4444] ">usuário: </span>{" "}
          <VscAccount />
        </h2>
        <p className="text-xl">E conheça seus melhores repositórios</p>
        <div className="flex items-center gap-4 mt-12">
          <input
            type="text"
            className="p-3 rounded-lg bg-white text-[#000]"
            placeholder="Digite o nome do usuário"
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="flex items-center gap-2 bg-blue-600 p-3 rounded-lg font-semibold"
            onClick={() => loadingUser(userName)}
          >
            Buscar <BsSearch />
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchUser;
