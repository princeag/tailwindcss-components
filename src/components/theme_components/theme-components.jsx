import PageSideNavbar from "../navbar/page-sidenavbar";
import { DarkMode } from "./dark-mode";
import { Route, Routes } from "react-router-dom";
import { CheckboxInput } from "../form_components/checkbox-input";
import { useState } from "react";

export default function ThemeComponents() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <section className="flex h-24 items-center justify-center bg-violet-500">
        <div className="text-4xl text-white">List Components</div>
      </section>
      <div className="flex min-h-96 items-stretch">
        <div className="hidden basis-64 sm:block">
          <PageSideNavbar page="Dark mode" />
        </div>
        <div className="flex-grow bg-gray-50">
          <section className="mb-4 bg-fuchsia-400 p-3 text-right text-white">
            <CheckboxInput
              checked={darkMode}
              handleCheckbox={() => setDarkMode(!darkMode)}
            />
          </section>
          <div className="mx-auto max-w-md p-5">
            <div className={darkMode ? "dark" : ""}>
              <ThemeComponentsRoutes />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ThemeComponentsRoutes() {
  return (
    <Routes>
      <Route path="dark-mode" element={<DarkMode />} />
    </Routes>
  );
}
