import { Outlet } from "react-router-dom";

export const PrincipalLayout = () => {
  return (
    <>
      <main className="w-full flex flex-col justify-center items-center ">
        <Outlet />
      </main>
    </>
  );
};
