export function InfoAlerts({ children }) {
  return (
    <div className="relative mt-3 rounded-md bg-blue-600 px-3 py-4">
      <span className="absolute inset-y-0 flex items-center">
        <svg
          class="h-8 w-8 text-white dark:text-white"
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
            stroke-linejoin="round"
            stroke-width="1"
            d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </span>
      <p className="pl-10 text-base text-white sm:text-lg">{children}</p>
    </div>
  );
}
