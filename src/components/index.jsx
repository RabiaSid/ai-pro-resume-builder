import dynamic from "next/dynamic";

const AutoPlaySlider = dynamic(() => import("./slider/AutoPlaySlider"));
const AutoScrollSlider = dynamic(() => import("./slider/AutoScrollSlider"));

export { AutoPlaySlider, AutoScrollSlider };
