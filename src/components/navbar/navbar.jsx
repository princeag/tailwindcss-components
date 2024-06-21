import { Link, NavLink } from "react-router-dom";
import { navigation } from "./page-navlinks";

export function HorizontalNavbar({ showSideNavBar, handleSideNavbar }) {
  return (
    <>
      <HorizontalNavbarMobile
        showSideNavBar={showSideNavBar}
        handleSideNavbar={handleSideNavbar}
      />
      <nav className="sticky top-0 hidden bg-blue-600 px-5 sm:block">
        <ul className="flex items-start">
          {navigation.map((nav) => {
            return (
              <li
                className="group relative"
                key={nav.text.toLowerCase().replace(" ", "_")}
              >
                <NavLink
                  to={nav.href}
                  className="text-md peer block p-2 text-slate-100 transition-all hover:text-white hover:underline hover:underline-offset-8"
                >
                  {nav.text}
                </NavLink>
                {nav.childrens && (
                  <ul className="absolute left-0 z-10 hidden min-w-52 bg-blue-700 group-hover:block">
                    {nav.childrens.map((nav1) => {
                      return (
                        <li key={nav1.text.toLowerCase().replace(" ", "_")}>
                          <NavLink
                            to={nav.href + nav1.href}
                            className={`text-md block p-2 px-5 text-slate-100 transition-all hover:text-white hover:underline hover:decoration-blue-300 hover:underline-offset-8`}
                          >
                            {nav1.text}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

function HorizontalNavbarMobile({ showSideNavBar, handleSideNavbar }) {
  return (
    <nav className="absolute bottom-0 left-0 top-0 block h-full min-h-full w-52 bg-blue-600 transition-all has-[:checked]:hidden sm:hidden">
      <ul className="flex flex-col items-start">
        <li className="w-full pr-2 pt-2 text-right">
          {/* <svg
            className="float-right inline-block h-6 w-6 rounded-sm text-blue-400 hover:text-white dark:text-white"
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
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg> */}
          <button
            className="rounded-sm bg-blue-50 p-1 leading-4 text-red-700"
            onClick={handleSideNavbar}
          >
            Close
          </button>
          <input
            type="radio"
            hidden
            checked={!showSideNavBar}
            onChange={() => {}}
          />
        </li>
        {navigation.map((nav) => {
          return (
            <li
              className="group w-full"
              key={nav.text.toLowerCase().replace(" ", "_")}
            >
              <Link
                to={nav.href}
                className="text-md peer block px-3 py-2 text-slate-100 transition-all hover:text-white hover:underline hover:underline-offset-8"
              >
                {nav.text}
                {/* down arrow */}
                <svg
                  className="w-h-5 float-end h-5 text-white group-hover:hidden dark:text-white"
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
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
                {/* up arrow */}
                <svg
                  className="w-h-5 float-end hidden h-5 text-white group-hover:block dark:text-white"
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
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m5 15 7-7 7 7"
                  />
                </svg>
              </Link>
              {nav.childrens && (
                <ul className="hidden bg-blue-700 group-hover:block">
                  {nav.childrens.map((nav1) => {
                    return (
                      <li key={nav1.text.toLowerCase().replace(" ", "_")}>
                        <Link
                          to={nav.href + nav1.href}
                          className="text-md block p-2 px-5 text-slate-100 transition-all hover:text-white hover:underline hover:underline-offset-8"
                        >
                          {nav1.text}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
