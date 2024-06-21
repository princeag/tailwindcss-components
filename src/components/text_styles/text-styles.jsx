import PageSideNavbar from "../navbar/page-sidenavbar";
import { Routes, Route } from "react-router-dom";
import { HighlightedText } from "./highlighted-text";
import OtherTextStyles from "./other-text-styles";

export default function TextStyles() {
  return (
    <>
      <section className="flex h-24 items-center justify-center bg-violet-500">
        <div className="text-4xl text-white">Text Styles</div>
      </section>
      <div className="flex min-h-96 items-stretch">
        <div className="hidden basis-64 sm:block">
          <PageSideNavbar page="Text styles" />
        </div>
        <div className="flex-grow bg-gray-50">
          <div className="mx-auto max-w-xl p-5">
            <TextStylesRoutes />
          </div>
        </div>
      </div>
    </>
  );
}

function TextStylesRoutes() {
  return (
    <Routes>
      <Route index element={<OtherTextStyles />} />
      <Route path="highlighted-text" element={<HighlightedText />} />
    </Routes>
  );
}
