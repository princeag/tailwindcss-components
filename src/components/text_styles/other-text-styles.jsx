import { Card } from "../card";

export default function OtherTextStyles() {
  return (
    <>
      <h1 className="mb-5 text-2xl font-bold">Other text styles</h1>
      <FirstLetterFirstWord />
    </>
  );
}

function FirstLetterFirstWord() {
  return (
    <Card heading="First letter & First word">
      <p className="first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-slate-700 first-line:uppercase first-line:tracking-wider">
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
    </Card>
  );
}
