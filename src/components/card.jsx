export function Card({ heading, children }) {
  return (
    <section className="rounded-md border border-gray-200 p-4 shadow-md">
      <h1 className="mb-5 border-b-2 border-b-fuchsia-400 pb-5 text-2xl font-semibold text-fuchsia-800">
        {heading}
      </h1>
      {children}
    </section>
  );
}
