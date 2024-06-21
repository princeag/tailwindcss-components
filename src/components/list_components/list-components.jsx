import { Routes, Route } from "react-router-dom";
import { UnorderedList } from "./unordered-list";
import PageSideNavbar from "../navbar/page-sidenavbar";

export default function ListComponents() {
  return (
    <>
      <section className="flex h-24 items-center justify-center bg-violet-500">
        <div className="text-4xl text-white">List Components</div>
      </section>
      <div className="flex min-h-96 items-stretch">
        <div className="hidden basis-64 sm:block">
          <PageSideNavbar page="List components" />
        </div>
        <div className="flex-grow bg-gray-50">
          <div className="mx-auto max-w-md p-5">
            <ListComponentsRoutes />
          </div>
        </div>
      </div>
    </>
  );
}

function ListComponentsRoutes() {
  return (
    <Routes>
      <Route path="unordered" element={<UnorderedList />} />
    </Routes>
  );
}
