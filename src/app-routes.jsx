import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import FormComponents from "./components/form_components/form-components";
import ListComponents from "./components/list_components/list-components";
import TextStyles from "./components/text_styles/text-styles";
import ThemeComponents from "./components/theme_components/theme-components";
import Templates from "./components/templates/templates";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/components/form/*" element={<FormComponents />} />
      <Route path="/components/list/*" element={<ListComponents />} />
      <Route path="/components/text/*" element={<TextStyles />} />
      <Route path="/components/theme/*" element={<ThemeComponents />} />
      <Route path="/components/templates/*" element={<Templates />} />
    </Routes>
  );
}
