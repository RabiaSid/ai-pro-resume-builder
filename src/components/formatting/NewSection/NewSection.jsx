"use client"
import React from 'react';

const NewSection = ({ currentState, updateState }) => {
    return (
        <div className="mt-4">
            <textarea
                className="w-full text-center border rounded"
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
        </div>
    );
};

export default NewSection;
