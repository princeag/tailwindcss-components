export function FileInput() {
  return (
    <label htmlFor="file">
      <span className="sr-only">File Upload</span>
      <input
        type="file"
        name="upload-file"
        id="file"
        className="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100"
      />
    </label>
  );
}
