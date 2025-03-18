import MainBanner from "@/components/Banner/mainBanner";
import React from "react";
import Search from "@/components/common/search/Search";
import Templates from "@/components/Templates/Templates";
import Content from "@/components/templates-content/Content";
import { BannerData, CoverTemplateData } from "./data";
import OurFaqs from "@/components/Faq/faq";
import Ads from "@/components/ads/Ads";

const CoverTemplates = () => {
  return (
    <>
      <MainBanner {...BannerData} />
      <Search />
      <Templates />
      <Content section={CoverTemplateData} />
      <OurFaqs />
      <Ads />
    </>
  );
};

export default CoverTemplates;
