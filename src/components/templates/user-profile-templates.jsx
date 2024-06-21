export function UserProfileTemplates() {
  return (
    <div className="rounded-lg border-2 border-fuchsia-300 bg-slate-100 p-4 dark:bg-gray-800">
      <div className="flex items-center">
        <img
          src="https://loremflickr.com/320/240/person"
          alt=""
          className="mr-4 h-12 w-12 flex-shrink-0 rounded-full object-cover shadow-lg shadow-fuchsia-300 ring-2 ring-fuchsia-400 ring-offset-2"
        />
        <div className="basis-full">
          <h1 className="text-lg font-semibold text-fuchsia-900 dark:text-gray-300">
            Person name
          </h1>
          <span className="block text-sm italic dark:text-gray-300">
            22.4k followers
          </span>
        </div>
        <button className="rounded bg-fuchsia-500 px-3 py-1 tracking-wide text-white dark:text-gray-900">
          Follow
        </button>
      </div>
      <p className="mt-4 text-justify leading-6 text-gray-700 first-letter:mr-1 first-letter:text-xl first-letter:font-bold selection:bg-fuchsia-200 selection:text-fuchsia-700 dark:text-gray-300">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
}
