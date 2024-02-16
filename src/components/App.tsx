import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex justify-center items-center ">
      <div className="rounded-lg bg-gradient-to-r from-blue-400 to-blue-300 p-5 text-center w-[550px] h-[350px]">
        <h1 className="text-6xl mt-4 font-bold">Github Search</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
