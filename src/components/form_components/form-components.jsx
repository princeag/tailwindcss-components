import { Outlet } from "react-router-dom";

export default function FormComponents() {
  return (
    <>
      <section className="flex h-24 items-center justify-center bg-violet-500">
        <div className="text-4xl text-white">Form Components</div>
      </section>
      <div className="mx-auto max-w-md p-5">
        <Outlet />
      </div>
    </>
  );
}
