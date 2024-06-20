import { useState } from "react";
import { HorizontalNavbar } from "./components/navbar/horizontal-navbar";
import MyRoutes from "./my-routes";

function App() {
  const [showSideNavBar, setShowSideNavbar] = useState(false);

  return (
    <>
      <header className="flex items-center p-3">
        <button
          className="basis-4 hover:bg-slate-200 sm:hidden"
          onClick={() => setShowSideNavbar(true)}
        >
          <svg
            className="h-6 w-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
        <h1 className="basis-full text-center text-sm font-bold sm:text-lg">
          Tailwindcss-components
        </h1>
      </header>
      <HorizontalNavbar
        showSideNavBar={showSideNavBar}
        handleSideNavbar={() => setShowSideNavbar(!showSideNavBar)}
      />
      <MyRoutes />
    </>
  );
}

export default App;
