"use client"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewSection } from "@/components";
import { removeSection } from '@/redux/slices/addSectionSlice';

// Define the shape of the `currentState` object
type CurrentState = {
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
  color: string;
  margin: number;
  padding: number;
  text: any;
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
  const dispatch = useDispatch();

  const { currentState, updateState } = props
  // Typing the Redux state with the sections array
  const { sections } = useSelector((state: { resume: { sections: Section[] } }) => state.resume);

  const addedSections = useSelector((state: any) => state.addSection.addedSections)

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
  console.log(currentState?.text, "texttttt");

  const handleRemoveSection = (section: any) => {
    dispatch(removeSection(section))
  }
  return (
    <div className="bg-[#ffffff] border border-gray-300 rounded-md h-full p-5">
      {
        addedSections?.map((data: any) => (
          <>
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
              value={data?.name || ""}
            //  onChange={(e) => updateState({ ...currentState, text: e.target.value })}
            />

            <button
              onClick={() => handleRemoveSection(data)}
              className="text-red-500 mt-2"
            >
              Remove
            </button>
          </>
        ))
      }
    </div>
  );
};

export default ResumePreview;
