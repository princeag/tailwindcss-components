import { InputText } from "../form_components/input";
import { PasswordInput } from "../form_components/password-input";
import { SuccessButton } from "../form_components/buttons";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "email_updates":
      return { ...state, email: action.next_email };
    case "name_updates":
      return { ...state, name: action.next_name };
    case "password_updates":
      return { ...state, password: action.next_password };
  }
}

export function RegistrationForm() {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    password: "",
  });

  function handleEmailChange(e) {
    dispatch({ type: "email_updates", next_email: e.target.value });
  }

  function handleNameChange(e) {
    dispatch({ type: "name_updates", next_name: e.target.value });
  }

  function handlePasswordChange(e) {
    dispatch({ type: "password_updates", next_password: e.target.value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.table(state);
  }

  return (
    <div className="rounded-lg p-3 shadow-md">
      <h1 className="mb-5 text-center text-2xl font-bold">Registration Form</h1>
      <form onSubmit={handleFormSubmit}>
        <InputText
          label="Email"
          name="email"
          placeholder="you@example.com"
          value={state.email}
          onChange={handleEmailChange}
        />
        <InputText
          label="Name"
          name="name"
          placeholder="John doe"
          required={false}
          value={state.name}
          onChange={handleNameChange}
        />
        <PasswordInput value={state.password} onChange={handlePasswordChange} />
        <div className="mt-3 text-center">
          <SuccessButton>Submit form</SuccessButton>
        </div>
      </form>
    </div>
  );
}
