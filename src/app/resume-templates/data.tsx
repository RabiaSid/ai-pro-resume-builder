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
      Ready to Stand Out?{" "}
      <span
        className="bg-no-repeat bg-cover leading-[1.5] font-lexend font-bold text-primaryCran"
      >
        Pick the Perfect
      </span>{" "}
      Resume Template
    </>
  ),
  description: (
    <>
      Curriculum templates are the key that makes your resume stand out.
      AI Pro Resumes offers the best professional resume templates that
      are ATS-friendly and customizable. To create a professional resume,
      select from your preferred best resume templates, insert all the
      details, and download in PDF format.
      <br />
      <br />
      We have templates for all. Whether you are looking for a basic
      resume template, a simple modern resume template, a resume portfolio
      template, or an outdoor professional guiding resume template, we
      have got you covered. Let’s now catch the recruiter's attention with
      a clean simple resume template!
    </>
  ),
  font2: true,
  link: (
    <>
      Click here to check our
      <span className="text-[#00caa5] lg:px-2 px-1">
        <Link href="/resume-templates">Resume Templates</Link>
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

const stepsToCreateResume = [
  "Go to the AI pro resume home page.",
  "Click the login button and sign up for your account.",
  "Now go to resume options in the header of the website.",
  "Click and press to resume template and explore the templates.",
  "Select any template you like.",
  "You will head to the next page with the template customization options.",
  "On the right side of the screen, you will find the option to edit your resume.",
  "On the left hand, you will get a preview of your resume.",
];

const FillAllDetails = [
  "Header: Add your name, email, contact information, job position, LinkedIn URL, postal address, country, state, and city name.",
  "Summary: Click on the summary sections and write a small professional summary. When you start writing your summary, AI-based suggestions will automatically appear. If you want to use these suggestions, simply click on them to add them to your summary.",
  "Experience: At the experience sections, click in to add a new section. List your previous job experiences with dates, job titles, and responsibilities. You can use AI-based suggestion features to create incredible job responsibilities. It will appear in the bulb icon on the right corner of the job responses sections. Just click the icon and select your preferred job responsibilities. Once you get it, click on that, and it will appear in the job responsibility section. Make changes to the responsibilities if you want to make it more personalized.",
  "Education: Enter your educational background, including degrees, institutions, grades, and dates.",
  "Technical Skills: Add relevant technical skills; if you want to add a custom skill, type and press enter.",
  "Soft Skills: List interpersonal skills, such as communication, teamwork, or problem-solving.",
  "Certificates: Press add new and include any certifications or professional development courses you have completed.",
  "Honors and Awards: Select Add New and highlight any awards or recognition you have received.",
  "Languages: Mention any languages you speak or write fluently",
  "References: Add references or indicate availability upon request.",
  "Custom Section: If necessary, include any additional information relevant to your career.",
];

const UniqueFeatures = [
  "Download your resume in PDF format.",
  "Find matching cover letter templates to pair perfectly with your resume. You will find that in our professional cover letter template sections.",
  "Work on the go with our mobile-friendly tools.",
  "Save time with pre-made templates for fields like",
  "Creative & Cultural Fields",
  "Education & Learning",
  "Engineering & Scientific",
  "Food Service",
  "Information Technology (IT)",
  "Maintenance & Repair",
  "Medicine Healthcare & Wellbeing",
  "Office & Administrative",
];

export const ResumeTemplateData = [
  {
    title: (
      <>
        Build Your Perfect Resume with
        <span className="text-[#00caa5] ml-4 text-2xl md:text-3xl">
          Professional Resume Template
        </span>
      </>
    ),

    description: (
      <>
        AI Pro Resume offers several professional and free resume templates.
        Whether you are a student, fresher, or experienced professional, we have
        the best professional resume templates for you. All our templates are
        customizable; you can modify font, color, and layouts according to your
        needs.
        <br />
        <br />
        All our templates are ATS-friendly. They can pass applicant tracking
        systems. You are in the right place if you do not know how to choose the
        perfect template from the two-column resume template.{" "}
      </>
    ),
  },
  {
    title: <>Steps to Create A Resume With Best Professional Resume Template</>,
    description: (
      <>
        Creating a professional resume takes a lot of time and effort. However,
        with AI Pro Resume, you can easily create a professional resume and
        cover letter. We have everything from two-column resume templates​ to
        clean, simple resume templates, resume portfolio templates, curriculum
        templates​, basic resume templates, and simple modern resume templates
        to meet your needs.
        <br />
        <br />
        Follow the steps below to design a resume that help you in getting your
        dream job.{" "}
      </>
    ),
    steps: stepsToCreateResume,
  },
  {
    title: <> Fill all the details in the following sections:</>,
    steps: FillAllDetails,
  },
  {
    title: "Switch Templates",
    description: (
      <>
        Now, after filling in all the details, if you think it's not the right
        template and want to change it, no worries; you can do it with just a
        single click. Click switch template, and choose the one that suits your
        details best. That’s it. Your complete data will be migrated to the new
        template. You can also change color, font, and layout according to your
        needs. You can even add pictures to your resume, as some of our
        templates have pictures. Now, you have a professionally crafted resume
        with a perfect resume template in no time.
      </>
    ),
  },
  {
    title: <>Our Unique Features That Fit Your Needs</>,
    steps: UniqueFeatures,
  },
];
