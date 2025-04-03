import dynamic from "next/dynamic";

const Header = dynamic(() => import("./Header/Header"));
const TextEditor = dynamic(() => import("./TextEditor/TextEditor"));
const NewSection = dynamic(() => import("./NewSection/NewSection"));
const ResumePreview = dynamic(() => import("./ResumePreview/ResumePreview"));

export { Header, TextEditor, NewSection, ResumePreview };