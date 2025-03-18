import MainBanner from "@/components/Banner/mainBanner";
import React from "react";
import Search from "@/components/common/search/Search";
import Templates from "@/components/Templates/Templates";
import Content from "@/components/templates-content/Content";
import { BannerData, ResumeTemplateData } from "./data";
import OurFaqs from "@/components/Faq/faq";
import Ads from "@/components/ads/Ads";


const ResumeTemplates = () => {
  return (
    <>
      <MainBanner {...BannerData} />
      <Search />
      <Templates />
      <Content section={ResumeTemplateData} />
      <OurFaqs />
      <Ads />
    </>
  );
};

export default ResumeTemplates;
