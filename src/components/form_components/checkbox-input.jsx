export function CheckboxInput({ checked, handleCheckbox }) {
  return (
    <label htmlFor="dark_mode">
      <span className="sr-only">Enable Dark Mode</span>
      <input
        type="checkbox"
        name="dark_mode"
        id="dark_mode"
        className=""
        checked={checked}
        onChange={handleCheckbox}
      />
      <span className="ml-2">Dark Mode</span>
    </label>
  );
}
