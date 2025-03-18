"use client";

import React from "react";
import Ads from "@/components/ads/Ads";
import MainBanner from "@/components/Banner/mainBanner";
import { ContactUsBannerData } from "./data";
import ContactUs from "@/components/contact-us/ContactUs";

const page = () => {
  return (
    <>
      <MainBanner {...ContactUsBannerData} />
      <Ads />
      <ContactUs />
    </>
  );
};

export default page;
