import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex justify-center items-center ">
      <div className="rounded-lg bg-gradient-to-r from-blue-400 to-blue-300 xl:p-5 lg:p-5 md:p-4 text-center xl:lg:w-[550px] xl:h-[350px] w-[400px] p-4">
        <h1 className="xl:text-6xl lg:text-6xl md:text-5xl text-4xl mt-4 font-bold">Github Search</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
