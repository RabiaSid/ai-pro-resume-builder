import dynamic from "next/dynamic";

const TextEditor = dynamic(() => import("./formatting/TextEditor/TextEditor"));
const NewSection = dynamic(() => import("./formatting/NewSection/NewSection"));
const ResumePreview = dynamic(() =>
  import("./formatting/ResumePreview/ResumePreview")
);
const AutoPlaySlider = dynamic(() => import("./slider/AutoPlaySlider"));
const AutoScrollSlider = dynamic(() => import("./slider/AutoScrollSlider"));

<<<<<<< Updated upstream:src/components/index.tsx
export { AutoPlaySlider, AutoScrollSlider, TextEditor, NewSection, ResumePreview };
=======
export {
  AutoPlaySlider,
  AutoScrollSlider,
  Header,
  TextEditor,
  NewSection,
  ResumePreview,
};
>>>>>>> Stashed changes:src/components/index.jsx
