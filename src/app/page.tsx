import React from "react";
import MainBanner from "@/components/Banner/mainBanner";
import {
  BannerData,
} from "./data";
import DndExample from "@/components/formatting/drag-and-drop/DndExample";

export default function Page() {
  return (
    <>
      <MainBanner {...BannerData} />
      <div>
        <DndExample />
      </div>
    </>
  );
}
