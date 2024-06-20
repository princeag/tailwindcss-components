import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import FormComponents from "./components/form_components/form-components";
import { InputText } from "./components/form_components/input";
import { PasswordInput } from "./components/form_components/password-input";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/components/form" element={<FormComponents />}>
        <Route path="input" element={<InputText />} />
        <Route path="password" element={<PasswordInput />} />
      </Route>
    </Routes>
  );
}
