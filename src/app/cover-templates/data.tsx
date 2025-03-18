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
      Mark your First{" "}
      <span
        className="bg-no-repeat bg-cover leading-[1.5] font-lexend font-bold text-primaryCran"
      >
        Impression impactful with our unique
      </span>{" "}
      Cover Letter templates.
    </>
  ),
  description: (
    <>
      AI Pro Resume offers the best cover letter templates to assist you
      in getting your dream job. Try our sample cover letter templates to
      save time and effort. We have pre-written resumes and professional
      cover letter template examples that give your cover letter a
      polished and proficient look.
      <br />
      <br />
      Our AI-powered suggestions and customizable cover letter templates
      assist you in effortlessly displaying your skills and personality.
      Whether you are looking for a short cover letter template, academic
      cover letter template, or AI cover letter generator, your search
      ends at AI Pro Resume. Get the best cover letter templates and shine
      in the job market.
    </>
  ),
  font2: true,
  link: (
    <>
      Click here to check our
      <span className="text-[#00caa5] lg:px-2 px-1">
        <Link href="/cover-templates">Cover letter Templates</Link>
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
  ]
}

const ResumeBasedCoverLetter = [
  "If you create your resume using AI Pro Resume, your cover letter is just a click away.",
  "Select Write a Cover Letter, and we will generate a polished cover letter using the details from your resume.You must select the job title, add the job description,and tick the check box beneath the job description section.",
  "This option eliminates the need to add extra information,saving you time while ensuring your cover letter highlights your skills and accomplishments.",
  "Now add the hiring manager details and company name you are applying to and click on generate.",
  "Within seconds, you will have your professionally AI-generated cover letter.",
];

const AddYourSignature = [
  "Draw : Use your mouse or touchscreen to draw your signature.",
  "Upload : Upload an image of your signature.",
  "Type : simply type your name.",
];

const CustomizeFontAndTheme = [
  "Font Style : Choose your preferred writing style.",
  "Font Size : Adjust the size of the text for readability.",
  "Themes : Select a theme and color scheme that matches your professional brand.",
];

const DownloadAndShare = ["Email", "WhatsApp", "Facebook", "LinkedIn"];

export const CoverTemplateData = [
  {
    title: (
      <>
        Steps To Create a Cover Letter with Professional
        <span className="text-[#00caa5] ml-4 text-2xl md:text-3xl">
          Cover Letter Templates
        </span>
      </>
    ),

    description: (
      <>
        Start creating your cover letter by logging into your AI Pro Resume
        account. Once logged in, go to the Tools section in the header. Click on
        Write a cover letter to begin. A new page will open. On the left side,
        you will see a preview of your cover letter; on the right, you will find
        the input fields. Ai Pro Resume offers auto-generated cover letter
        options to speed up your cover letter creation process. You must provide
        your hiring manager details, company name, and job position.
      </>
    ),
  },
  {
    title: <>Resume-Based Cover Letter Creation</>,
    steps: ResumeBasedCoverLetter,
  },
  {
    title: <>Add Your Signature</>,
    description: (
      <>
        Go to the Signatures section. You will have three options to create your
        signature:
      </>
    ),
    steps: AddYourSignature,
  },
  {
    title: "Switch Templates",
    description: (
      <>
        AI Pro Resume offers a variety of professional cover letter templates
        from which to select. You can switch templates anytime if you change
        your mind while making your cover letter and want a different look. Just
        go to the Switch Template section and choose your preferred design.
      </>
    ),
  },
  {
    title: <> Customize Fonts and Theme</>,
    description: (
      <>Further personalize your cover letter by adjusting the following:</>
    ),
    steps: CustomizeFontAndTheme,
  },
  {
    title: <>Download or Share Your Cover Letter</>,
    description: (
      <>
        Once satisfied with your cover letter, click the Download button to save
        it as a PDF.
        <br />
        <br />
        You can also directly share your cover letter through:
      </>
    ),
    steps: DownloadAndShare,
  },
];
