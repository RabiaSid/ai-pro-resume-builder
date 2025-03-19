import React from "react";
import MainBanner from "@/components/Banner/mainBanner";
import {
  BannerData,
} from "./data";
import UserList from "@/components/formatting/drag-and-drop/UserList";

export default function Page() {
  return (
    <>
      <MainBanner {...BannerData} />
      <div>
        <UserList />
      </div>
    </>
  );
}
