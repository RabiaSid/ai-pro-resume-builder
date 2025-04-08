"use client"
import React from 'react';
import { useSelector } from 'react-redux';
import { NewSection } from "@/components";

// Define the shape of the `currentState` object
type CurrentState = {
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
  color: string;
  margin: number;
  padding: number;
  text: string;
}

// Define the shape of a section object
type Section = {
  id: string;
  component: string;
}

// Define the props for the ResumePreview component
type ResumePreviewProps = {
  currentState: CurrentState;
  updateState: (newState: CurrentState) => void;
}

const ResumePreview = (props: ResumePreviewProps) => {
  const { currentState, updateState } = props
  // Typing the Redux state with the sections array
  const { sections } = useSelector((state: { font: { sections: Section[] } }) => state.font);

  // Check if currentState is undefined
  if (!currentState) {
    return <div>Error: currentState is undefined</div>;
  }

  // Function to dynamically render the section components
  const renderSection = (section: Section) => {
    if (section.component === 'NewSection') {
      return <NewSection key={section.id} currentState={currentState} updateState={updateState} />;
    }
    return null;
  };

  return (
    <div className="bg-[#ffffff] border border-gray-300 rounded-md h-full p-5">
      <textarea
        className="w-full p-2 border rounded focus:outline-none"
        style={{
          fontSize: currentState.fontSize || "16px",
          fontFamily: currentState.fontFamily || "Arial",
          fontWeight: currentState.fontWeight || "normal",
          color: currentState.color || "black",
          margin: `${currentState.margin || 0}px`,
          padding: `${currentState.padding || 0}px`,
        }}
        value={currentState.text || ""}
        onChange={(e) => updateState({ ...currentState, text: e.target.value })}
      />
      {sections.length === 0 ? (
        ""
      ) : (
        sections.map(renderSection)
      )}
    </div>
  );
};

export default ResumePreview;
