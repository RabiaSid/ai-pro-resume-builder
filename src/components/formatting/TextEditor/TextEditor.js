"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import {
  Rubik,
  Montserrat,
  Lato,
  Raleway,
  Bitter,
  Chivo,
  Oswald,
  Volkhov,
} from "next/font/google";
import { addSection } from '../../../redux/resumeSlice';
import { FaXmark } from "react-icons/fa6";
import { HiOutlineLockClosed, HiPlus } from "react-icons/hi";
// ===============
import sections from 'media/builderIcons/sections.svg'
import templetes from 'media/builderIcons/templetes.svg'
import design from 'media/builderIcons/design.svg'
import improve from 'media/builderIcons/improve.svg'
import ats from 'media/builderIcons/ats.svg'
import robot from 'media/builderIcons/robot.svg'
import rearrange from 'media/builderIcons/rearrange.svg'

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] });
const bitter = Bitter({ subsets: ["latin"], weight: ["400", "700"] });
const chivo = Chivo({ subsets: ["latin"], weight: ["400", "700"] });
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"] });
const volkhov = Volkhov({ subsets: ["latin"], weight: ["400", "700"] });

const TextEditor = ({
  currentState,
  updateState,
  isSubscribed,
}) => {
  const fontStyles = {
    Rubik: rubik.className,
    Montserrat: montserrat.className,
    Lato: lato.className,
    Raleway: raleway.className,
    Bitter: bitter.className,
    Chivo: chivo.className,
    Oswald: oswald.className,
    Volkhov: volkhov.className,
  };

  const dispatch = useDispatch();

  // Define a color palette
  const colorPalette = [
    "#294452",
    "#369A8C",
    "#E6C374",
    "#F1A163",
    "#E27055",
    "#E05757",
    "#FBE7D5",
    "#DDBDAD",
    "#C99980",
    "#B8B6A4",
    "#A5A48E",
    "#F2F2F4",
  ];

  // Lock the last three colors (index 9, 10, and 11)
  const [lockedColors, setLockedColors] = useState([8, 9, 10]);

  // Unlock colors if user is subscribed
  useEffect(() => {
    if (isSubscribed) {
      setLockedColors([]);
    }
  }, [isSubscribed]);

  // Tab state management
  const [activeTab, setActiveTab] = useState("Design & Font");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex gap-2">
        {/*============= Left Side - Tab Navigation =============*/}
        <div className="w-[18%] py-4 bg-[#ffffff] border border-gray-300 rounded-md">
          <ul className="flex flex-col gap-8">
            <li
              className={`flex flex-col items-center justify-center gap-2 text-[12px] leading-[1.2] font-medium cursor-pointer ${activeTab === "Add Section" ? 'text-[#7B40EA]' : 'text-[#707275]'}`}
              onClick={() => handleTabChange("Add Section")}
            >
              <div className="">
                <Image src={sections} alt='Sections' />
              </div>
              <span>Add <br /> Section</span>
            </li>
            <li
              className={`flex flex-col items-center justify-center gap-2 text-[12px] leading-[1.2] font-medium cursor-pointer ${activeTab === "Templates" ? 'text-[#7B40EA]' : 'text-[#707275]'}`}
              onClick={() => handleTabChange("Templates")}
            >
              <div className="">
                <Image src={templetes} alt='Templates' />
              </div>
              <span>Templates</span>
            </li>
            <li
              className={`flex flex-col items-center justify-center gap-2 text-[12px] leading-[1.2] font-medium cursor-pointer ${activeTab === "Design & Font" ? 'text-[#7B40EA]' : 'text-[#707275]'}`}
              onClick={() => handleTabChange("Design & Font")}
            >
              <div className="">
                <Image src={design} alt='Design' />
              </div>
              <span>Design <br /> & Font</span>
            </li>
            <li
              className={`flex flex-col items-center justify-center gap-2 text-[12px] leading-[1.2] font-medium cursor-pointer ${activeTab === "Improve Text" ? 'text-[#7B40EA]' : 'text-[#707275]'}`}
              onClick={() => handleTabChange("Improve Text")}
            >
              <div className="">
                <Image src={improve} alt='Improve' />
              </div>
              <span>Improve <br /> Text</span>
            </li>
            <li
              className={`flex flex-col items-center justify-center gap-2 text-[12px] leading-[1.2] font-medium cursor-pointer ${activeTab === "ATS Check" ? 'text-[#7B40EA]' : 'text-[#707275]'}`}
              onClick={() => handleTabChange("ATS Check")}
            >
              <div className="">
                <Image src={ats} alt='ATS' />
              </div>
              <span>ATS <br /> Check</span>
            </li>
            <li
              className={`flex flex-col items-center justify-center gap-2 text-[12px] leading-[1.2] font-medium cursor-pointer ${activeTab === "AI Assistant" ? 'text-[#7B40EA]' : 'text-[#707275]'}`}
              onClick={() => handleTabChange("AI Assistant")}
            >
              <div className="">
                <Image src={robot} alt='Robot' />
              </div>
              <span>AI <br /> Assistant</span>
            </li>
            <li
              className={`flex flex-col items-center justify-center gap-2 text-[12px] leading-[1.2] font-medium cursor-pointer ${activeTab === "Rearrange" ? 'text-[#7B40EA]' : 'text-[#707275]'}`}
              onClick={() => handleTabChange("Rearrange")}
            >
              <div className="">
                <Image src={rearrange} alt='Rearrange' />
              </div>
              <span>Rearrange</span>
            </li>
          </ul>
        </div>

        {/*============= Right Side - Tab Content =============*/}
        <div className="w-[70%] p-4 bg-[#ffffff] border border-gray-300 rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="text-[16px] text-[#707275] font-bold">{activeTab}</h3>
          </div>
          {/*============= Add Section =============*/}
          {activeTab === "Add Section" && (
            <div className="mt-4">
              <button onClick={() => dispatch(addSection())} className="mt-4 px-4 py-2 bg-blue-500 text-white">
                Add Section
              </button>
            </div>
          )}
          {/*============= Templates =============*/}
          {activeTab === "Templates" && <div>Templates Content</div>}
          {/*============= Design & Font =============*/}
          {activeTab === "Design & Font" && (
            <div className={`mt-4 ${fontStyles[currentState.fontFamily] || ""}`}>
              {/* Color Palette */}
              <div className="flex flex-col items-start justify-start gap-4 py-4 border-y border-gray-300">
                <div className="flex flex-col items-start justify-start gap-2 w-full">
                  <label className="text-[14px] text-[#707275] font-bold">Color</label>
                  <div className="grid grid-cols-6 gap-2 w-full">
                    {colorPalette.map((color, index) => (
                      <div key={index} className={`relative w-8 h-8 p-[2px] rounded-full ${lockedColors.includes(index) ? "opacity-50 cursor-not-allowed" : ""} ${currentState.selectedIndex === index ? "border border-[#7B40EA]" : "border-0"}`} >
                        <div className={`w-full h-full flex items-center justify-center rounded-full cursor-pointer ${lockedColors.includes(index) ? "opacity-50 cursor-not-allowed" : ""}`} style={{ backgroundColor: color }} onClick={() => !lockedColors.includes(index) && updateState({ ...currentState, color, selectedIndex: index })}>
                          {lockedColors.includes(index) && (
                            <HiOutlineLockClosed className="text-[14px] text-[#000000]" />
                          )}
                          {/* Add HiPlus icon to the last color palette item */}
                          {index === colorPalette.length - 1 && (
                            <HiPlus className="text-[14px] text-[#000000]" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* custom Color */}
                <div className="flex items-center gap-3 border border-gray-400 rounded-sm px-2 w-full">
                  <input type="color" className="w-[11%] h-[32px] border-transparent rounded-full" value={currentState.color} onChange={(e) => updateState({ ...currentState, color: e.target.value })} />
                  <span className="text-[14px]">{currentState.color}</span>
                </div>
              </div>

              <div className="py-4 border-y-0.5 border-gray-300">
                {/* Font Style */}
                <div className="flex flex-col items-start justify-start gap-2">
                  <label className="text-[14px] text-[#707275] font-bold">Font Style</label>
                  <select value={currentState.fontFamily} onChange={(e) => updateState({ ...currentState, fontFamily: e.target.value })} className="p-2 border border-gray-400 rounded-sm focus:outline-none w-full" >
                    <option value="Arial">Arial</option>
                    <option value="Rubik">Rubik</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Lato">Lato</option>
                    <option value="Raleway">Raleway</option>
                    <option value="Bitter">Bitter</option>
                    <option value="Chivo">Chivo</option>
                    <option value="Oswald">Oswald</option>
                    <option value="Volkhov">Volkhov</option>
                    <option value="Times New Roman">Times New Roman</option>
                  </select>
                </div>

                {/* Font Size */}
                <div className="flex flex-col items-start justify-start gap-2 my-4">
                  <label className="text-[14px] text-[#707275] font-bold">Font Size</label>
                  <div className="flex items-center gap-8">
                    <div className={`flex items-center gap-2 cursor-pointer ${currentState.fontSize === "16px" ? "text-blue-500" : ""}`}>
                      <input type="radio" name="fontSize" className="cursor-pointer" value="16px" checked={currentState.fontSize === "16px"} onChange={() => updateState({ ...currentState, fontSize: "16px" })} />
                      <span className="text-[14px] text-[#000000] font-medium">Small</span>
                    </div>
                    <div className={`flex items-center gap-2 cursor-pointer ${currentState.fontSize === "20px" ? "text-blue-500" : ""}`}>
                      <input type="radio" name="fontSize" className="cursor-pointer" value="20px" checked={currentState.fontSize === "20px"} onChange={() => updateState({ ...currentState, fontSize: "20px" })} />
                      <span className="text-[14px] text-[#000000] font-medium">Medium</span>
                    </div>
                    <div className={`flex items-center gap-2 cursor-pointer ${currentState.fontSize === "24px" ? "text-blue-500" : ""}`}>
                      <input type="radio" name="fontSize" className="cursor-pointer" value="24px" checked={currentState.fontSize === "24px"} onChange={() => updateState({ ...currentState, fontSize: "24px" })} />
                      <span className="text-[14px] text-[#000000] font-medium">Large</span>
                    </div>
                  </div>
                </div>

                {/* Font Weight */}
                <div className="flex-col items-start justify-start gap-2 hidden">
                  <label className="text-[14px] text-[#707275] font-medium">Font Weight</label>
                  <select className="p-2 border border-gray-400 rounded-sm focus:outline-none w-full" value={currentState.fontWeight} onChange={(e) => updateState({ ...currentState, fontWeight: e.target.value })} >
                    <option value="normal">Normal</option>
                    <option value="bold">Bold</option>
                  </select>
                </div>
              </div>

              <div className="border-t-1 border-gray-300 py-4 hidden">
                {/* Margin */}
                <div className="flex flex-col items-start justify-start gap-2">
                  <label className="text-[14px] text-[#707275] font-medium">Margin</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={currentState.margin}
                    onChange={(e) => updateState({ ...currentState, margin: e.target.value })}
                    className="border border-gray-400 rounded-sm focus:outline-none w-full p-2"
                  />
                </div>

                {/* Padding */}
                <div className="flex flex-col items-start justify-start gap-2">
                  <label className="text-[14px] text-[#707275] font-medium">Padding</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={currentState.padding}
                    onChange={(e) => updateState({ ...currentState, padding: e.target.value })}
                    className="border border-gray-400 rounded-sm focus:outline-none w-full p-2"
                  />
                </div>
              </div>
            </div>
          )}
          {/*============= Improve Text =============*/}
          {activeTab === "Improve Text" && <div>Improve Text Content</div>}
        </div>
        {/*============= ATS =============*/}
        {/*============= AI =============*/}
        {/*============= Rearrange =============*/}
      </div>
    </>
  );
};

export default TextEditor;
