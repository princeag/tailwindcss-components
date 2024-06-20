export function PasswordInput() {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
        Password
      </span>
      <input
        type="password"
        name="password"
        className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
        placeholder=""
      />
    </label>
  );
}
