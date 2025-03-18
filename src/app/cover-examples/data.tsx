import bannerArrow from "media/assets/Banner_arrow_icon.webp";
import Image from "next/image";
import Link from "next/link";
import template_design1 from "media/assets/template_design_1.webp";
import template_design2 from "media/assets/template_design_2.webp";
import template_design3 from "media/assets/template_design_3.webp";
import template_design4 from "media/assets/template_design_4.webp";

// Companies
import saudi from "media/assets/company/saudi.webp";
import aerotek from "media/assets/company/aerotek.webp";
import geti from "media/assets/company/geti.webp";
import ladders from "media/assets/company/ladders.webp";
import snagajob from "media/assets/company/snagajob.webp";
import alison from "media/assets/company/alison.webp";

export const BannerData = {
  title: (
    <>
      Your Perfect{" "}
      <span className="bg-no-repeat bg-cover leading-[1.5] font-lexend font-bold text-primaryCran">
        Cover Letter
      </span>{" "}
      An Easy-to-Follow Example with AI Touch
    </>
  ),
  description: <></>,
  font2: true,
  link: (
    <>
      Click here to check our
      <span className="text-[#00caa5] lg:px-2 px-1">
        <Link href="/resume-examples">Resume Example</Link>
      </span>
      <Image src={bannerArrow} className="ml-1" alt="arrow" />
    </>
  ),
  button1: {
    title: "IMPORT RESUME",
    mainColor: "#0072b1",
    sliderColor: "#fff59c",
    mainTextColor: "#FFFFFF",
    hoverTextColor: "#0072b1",
    authLink: "/import-resume",
    guestLink: "/login",
  },
  BannerBoxImagesData: [
    template_design1,
    template_design2,
    template_design3,
    template_design4,
  ],
  isGradient: false,
  customerLogoText: "Our customers were hired by:",
  customerLogo: [
    {
      image: saudi,
      alt: saudi,
      width: "w-[150px]",
    },
    {
      image: aerotek,
      alt: aerotek,
      width: "w-[100px]",
    },
    {
      image: geti,
      alt: geti,
      width: "w-[70px]",
    },
    {
      image: ladders,
      alt: ladders,
      width: "w-[80px]",
    },
    {
      image: snagajob,
      alt: snagajob,
      width: "w-[80px]",
    },
    {
      image: alison,
      alt: alison,
      width: "w-[80px]",
    },
  ],
};
