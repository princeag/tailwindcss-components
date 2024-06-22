export default function Buttons() {
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex items-center">
        <div className="flex-grow text-lg font-semibold">Primary Button</div>
        <PrimaryButton />
      </div>
      <div className="flex items-center">
        <div className="flex-grow text-lg font-semibold">Success Button</div>
        <SuccessButton />
      </div>
    </div>
  );
}

function PrimaryButton() {
  return (
    <button className="rounded-lg bg-blue-700 px-4 py-2 tracking-wide text-white transition hover:bg-blue-600 focus:bg-blue-900 focus:ring-1 focus:ring-blue-500 focus:ring-offset-2">
      Button
    </button>
  );
}

export function SuccessButton({ children }) {
  return (
    <button className="rounded-lg bg-green-600 px-4 py-2 font-semibold tracking-wide text-white transition hover:bg-green-600 focus:bg-green-900 focus:ring-1 focus:ring-green-500 focus:ring-offset-2">
      {children || "Button"}
    </button>
  );
}
