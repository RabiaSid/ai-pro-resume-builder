import React from "react";
import MainBanner from "@/components/Banner/mainBanner";
import {
  BannerData,
  ClientData,
  FeaturesData,
  ResumeTemplateData,
  ReviewData,
} from "./data";
import OurFaqs from "@/components/Faq/faq";
import ResumeTemplateSlider from "@/components/TemplateSlider";
import Clients from "@/components/clients/Clients";
import Reviews from "@/components/reviews/Reviews";
import Features from "@/components/features/Features";
import Services from "@/components/services/Services";
import OnScrollAnime from '@/components/onScrollAnime/OnScrollAnime';

export default function Page() {
  return (
    <>
      <MainBanner {...BannerData} />
      <ResumeTemplateSlider {...ResumeTemplateData} />
      <OnScrollAnime />
      <Services />
      <Features {...FeaturesData} />
      <OurFaqs />
      <Clients {...ClientData} />
      <Reviews {...ReviewData} />
    </>
  );
}
