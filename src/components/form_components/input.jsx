import { InfoAlerts } from "../alerts/alerts";

export function InputText() {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
        Email
      </span>
      <input
        type="text"
        name="email"
        className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
        placeholder="you@example.com"
      />
    </label>
  );
}

export function InputGroup() {
  return (
    <>
      <label className="relative">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg
            className="h-5 w-5 text-gray-300 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
        </span>
        <input
          type="text"
          name="name"
          className="mt-1 block w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 placeholder-slate-400 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          placeholder="Search for anything"
        />
      </label>
      <InfoAlerts>Style placeholder text of the input.</InfoAlerts>
    </>
  );
}
