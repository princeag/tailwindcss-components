import { Routes, Route, NavLink } from "react-router-dom";
import { InputText, InputGroup } from "./input";
import { PasswordInput } from "./password-input";
import { FileInput } from "./file-input";
import PageSideNavbar from "../navbar/page-sidenavbar";
import { CheckboxInput } from "./checkbox-input";

export default function FormComponents() {
  return (
    <>
      <section className="flex h-24 items-center justify-center bg-violet-500">
        <div className="text-4xl text-white">Form Components</div>
      </section>
      <div className="flex min-h-96 items-stretch">
        <div className="hidden basis-64 sm:block">
          <PageSideNavbar page="Form components" />
        </div>
        <div className="flex-grow bg-gray-50">
          <div className="mx-auto max-w-md p-5">
            <FormComponentRoutes />
          </div>
        </div>
      </div>
    </>
  );
}

function FormComponentRoutes() {
  return (
    <Routes>
      <Route path="input" element={<InputText />} />
      <Route path="password" element={<PasswordInput />} />
      <Route path="input-group" element={<InputGroup />} />
      <Route path="file-input" element={<FileInput />} />
      <Route path="checkbox" element={<CheckboxInput />} />
    </Routes>
  );
}
