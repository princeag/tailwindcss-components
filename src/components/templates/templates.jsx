import { Routes, Route } from "react-router-dom";
import { UserProfileTemplates } from "./user-profile-templates";
import PageSideNavbar from "../navbar/page-sidenavbar";

export default function Templates() {
  return (
    <>
      <section className="flex h-24 items-center justify-center bg-violet-500">
        <div className="text-4xl text-white">Templates Components</div>
      </section>
      <div className="flex min-h-96 items-stretch">
        <div className="hidden basis-64 sm:block">
          <PageSideNavbar page="Templates" />
        </div>
        <div className="flex-grow bg-gray-50">
          <div className="mx-auto max-w-md p-5">
            <TemplatesRoutes />
          </div>
        </div>
      </div>
    </>
  );
}

function TemplatesRoutes() {
  return (
    <Routes>
      <Route path="user-profile-templates" element={<UserProfileTemplates />} />
    </Routes>
  );
}
