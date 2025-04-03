"use client";
import React, { useState } from "react";
import { Header, ResumePreview, TextEditor } from "@/components";

export default function Page() {
  const [currentState, setCurrentState] = useState({
    fontSize: "20px",
    fontWeight: "normal",
    color: "#294452",
    selectedIndex: 0,
    text: "Hello, world!",
    fontFamily: "Arial",
    margin: 0,
    padding: "8px",
  });

  const [history, setHistory] = useState([currentState]);
  const [future, setFuture] = useState([]);

  const updateState = (newState) => {
    if (JSON.stringify(currentState) !== JSON.stringify(newState)) {
      setHistory([...history, currentState]);
      setCurrentState(newState);
      setFuture([]);
    }
  };

  const handleUndo = () => {
    if (history.length > 1) {
      const lastState = history[history.length - 1];
      setCurrentState(lastState);
      setFuture([currentState, ...future]);
      setHistory(history.slice(0, history.length - 1));
    }
  };

  const handleRedo = () => {
    if (future.length > 0) {
      const nextState = future[0];
      setCurrentState(nextState);
      setHistory([...history, nextState]);
      setFuture(future.slice(1));
    }
  };

  return (
    <>
      <div className="text-center">
        <Header
          currentState={currentState}
          handleUndo={handleUndo}
          handleRedo={handleRedo}
          history={history}
          future={future}
        />
        <div className="grid grid-cols-12 px-5">
          <div className="col-span-4">
            <TextEditor
              currentState={currentState}
              updateState={updateState}
            />
          </div>
          <div className="col-span-8">
            <ResumePreview
              currentState={currentState}
              updateState={updateState}
            />
          </div>
        </div>
      </div>
    </>
  );
}
