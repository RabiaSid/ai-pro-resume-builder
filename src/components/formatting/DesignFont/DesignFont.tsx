import React, { useEffect, useState } from "react";
import { HiOutlineLockClosed, HiPlus } from "react-icons/hi";
// Importing fonts
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
// ===============

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] });
const bitter = Bitter({ subsets: ["latin"], weight: ["400", "700"] });
const chivo = Chivo({ subsets: ["latin"], weight: ["400", "700"] });
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "700"] });
const volkhov = Volkhov({ subsets: ["latin"], weight: ["400", "700"] });

// Define types for the props and state
type DesignFontProps = {
  currentState: {
    color: string;
    selectedIndex: number;
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    margin: number | string;
    padding: number | string;
  };
  updateState: (newState: DesignFontProps['currentState']) => void;
  isSubscribed?: boolean;  // Added the isSubscribed prop
  lockedColors: number[];
};

const DesignFont = ({ currentState, updateState, isSubscribed = false, lockedColors: initialLockedColors }: DesignFontProps) => {
  // Define a color palette
  const colorPalette: string[] = [
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
    "",
  ];

  // Determine if the last 3 colors should be locked based on subscription status
  const [lockedColors, setLockedColors] = useState<number[]>(() => {
    const colors = [...initialLockedColors];

    // If the user is not subscribed, lock the last 3 colors
    if (!isSubscribed) {
      colors.push(colorPalette.length - 4, colorPalette.length - 3, colorPalette.length - 2);
    }

    return colors;
  });

  useEffect(() => {
    // When the subscription status or lockedColors changes, update the locked colors
    setLockedColors(prev => {
      const colors = [...prev];

      // Lock the last 3 colors if the user is not subscribed
      if (!isSubscribed) {
        const lastThreeColors = [colorPalette.length - 4, colorPalette.length - 3, colorPalette.length - 2];
        lastThreeColors.forEach(colorIndex => {
          if (!colors.includes(colorIndex)) {
            colors.push(colorIndex);
          }
        });
      } else {
        // If subscribed, unlock the last 3 colors
        return colors.filter(color => ![colorPalette.length - 4, colorPalette.length - 3, colorPalette.length - 2].includes(color));
      }

      return colors;
    });
  }, [isSubscribed, initialLockedColors]);

  // Define font family
  const fontStyles: { [key: string]: string } = {
    Rubik: rubik.className,
    Montserrat: montserrat.className,
    Lato: lato.className,
    Raleway: raleway.className,
    Bitter: bitter.className,
    Chivo: chivo.className,
    Oswald: oswald.className,
    Volkhov: volkhov.className,
  };

  return (
    <div className={`mt-4`}>
      {/* Color Palette */}
      <div className="flex flex-col items-start justify-start gap-4 py-4 border-y border-gray-300">
        <div className="flex flex-col items-start justify-start gap-2 w-full">
          <label className="text-[14px] text-[#707275] font-bold">Color</label>
          <div className="grid grid-cols-6 gap-2 w-full">
            {colorPalette.map((color, index) => (
              <div
                key={index}
                className={`relative w-8 h-8 p-[2px] rounded-full ${lockedColors.includes(index) ? "opacity-50 cursor-not-allowed" : ""} ${currentState.selectedIndex === index ? "border border-[#7B40EA]" : "border-0"}`}
              >
                <div
                  className={`w-full h-full flex items-center justify-center rounded-full cursor-pointer ${lockedColors.includes(index) ? "opacity-50 cursor-not-allowed" : ""}`}
                  style={{
                    backgroundColor: index === colorPalette.length - 1 ? '#F2F2F4' : color
                  }}
                  onClick={() => !lockedColors.includes(index) && updateState({ ...currentState, color, selectedIndex: index })}
                >
                  {lockedColors.includes(index) && <HiOutlineLockClosed className="text-[14px] text-[#000000]" />}
                  {index === colorPalette.length - 1 && <HiPlus className="text-[14px] text-[#000000]" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Color */}
        <div className="flex items-center gap-3 border border-gray-400 rounded-sm px-2 w-full">
          <input
            type="color"
            className="w-[11%] h-[32px] border-transparent rounded-full"
            value={currentState.color}
            onChange={(e) => updateState({ ...currentState, color: e.target.value })}
          />
          <span className="text-[14px] font-normal">{currentState.color}</span>
        </div>
      </div>

      <div className="py-4 border-y-0.5 border-gray-300">
        {/* Font Style */}
        <div className="flex flex-col items-start justify-start gap-2">
          <label className="text-[14px] text-[#707275] font-bold">Font Style</label>
          <select
            value={currentState.fontFamily}
            onChange={(e) => updateState({ ...currentState, fontFamily: e.target.value })}
            className="p-2 border border-gray-400 focus:outline-none w-full"
          >
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
            <div className={`flex items-center gap-2 cursor-pointer`}>
              <input
                type="radio"
                name="fontSize"
                className="cursor-pointer"
                value="16px"
                checked={currentState.fontSize === "16px"}
                onChange={() => updateState({ ...currentState, fontSize: "16px" })}
              />
              <span className={`text-[14px] text-[#000000] font-medium ${currentState.fontSize === "16px" ? "text-blue-500" : ""}`}>Small</span>
            </div>
            <div className={`flex items-center gap-2 cursor-pointer`}>
              <input
                type="radio"
                name="fontSize"
                className="cursor-pointer"
                value="20px"
                checked={currentState.fontSize === "20px"}
                onChange={() => updateState({ ...currentState, fontSize: "20px" })}
              />
              <span className={`text-[14px] text-[#000000] font-medium ${currentState.fontSize === "20px" ? "text-blue-500" : ""}`}>Medium</span>
            </div>
            <div className={`flex items-center gap-2 cursor-pointer`}>
              <input
                type="radio"
                name="fontSize"
                className="cursor-pointer"
                value="24px"
                checked={currentState.fontSize === "24px"}
                onChange={() => updateState({ ...currentState, fontSize: "24px" })}
              />
              <span className={`text-[14px] text-[#000000] font-medium ${currentState.fontSize === "24px" ? "text-blue-500" : ""}`}>Large</span>
            </div>
          </div>
        </div>

        {/* Font Weight (Hidden) */}
        <div className="hidden flex-col items-start justify-start gap-2">
          <label className="text-[14px] text-[#707275] font-bold">Font Weight</label>
          <select
            className="p-2 border border-gray-400 rounded-sm focus:outline-none w-full"
            value={currentState.fontWeight}
            onChange={(e) => updateState({ ...currentState, fontWeight: e.target.value })}
          >
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
  );
};

export default DesignFont;
