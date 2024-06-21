import { navigation } from "./page-navlinks";
import { NavLink } from "react-router-dom";

export default function PageSideNavbar({ page }) {
  return (
    <nav className="-z-10 h-full border-r-2 border-r-gray-400 bg-gray-50 px-5 pt-4">
      <ul className="">
        {navigation
          .filter((nav) => nav.text === page)
          .map((nav) => {
            return (
              <li className="" key={nav.text.toLowerCase().replace(" ", "_")}>
                <NavLink
                  to={nav.href}
                  className="text-md block p-2 font-bold text-gray-800 transition-all hover:underline hover:underline-offset-8"
                >
                  {nav.text}
                </NavLink>
                {nav.childrens && (
                  <ul className="">
                    {nav.childrens.map((nav1) => {
                      return (
                        <li key={nav1.text.toLowerCase().replace(" ", "_")}>
                          <NavLink
                            to={nav.href + nav1.href}
                            className={`text-md hover:has-[!active]:underline-offset-4 block p-2 font-semibold text-gray-800 transition-all hover:translate-x-2 hover:underline`}
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
  );
}
