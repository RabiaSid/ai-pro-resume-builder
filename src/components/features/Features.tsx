"use client";

import React from "react";
import PattrenGreen from "media/assets/multi-liners-blue.png";
import Image from "next/image";
import FlipCard from "../common/card/flipCard/FlipCard";
import icon_1 from "media/assets/icon_1.webp";
import icon_2 from "media/assets/icon_2.webp";
import icon_3 from "media/assets/icon_3.webp";
import icon_4 from "media/assets/icon_4.webp";
import icon_5 from "media/assets/icon_5.webp";
import icon_6 from "media/assets/icon_6.webp";
import icon_7 from "media/assets/icon_7.webp";
import icon_8 from "media/assets/icon_8.webp";
import styles from "./feature.module.css";
import { H2, Medium } from "@/components/typography";

type propsType = {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
};

const Features = (props: propsType) => {
  const { title, description } = props;
  return (
    <section className="bg-[#01b2ac] relative border-t-[1px] overflow-hidden">
      <div className="absolute bottom-0 w-[800px] right-0">
        <Image
          src={PattrenGreen}
          alt="pattern image"
          className={styles.animate3d}
        />
      </div>
      <div className="container mx-auto w-full bg-no-repeat bg-cover py-10 xl:flex items-center justify-between px-4">
        <div className="w-full xl:w-[30%]">
          <H2 className="text-white drop-shadow-lg text-center sm:text-left">
            {title}
          </H2>
          <Medium className="drop-shadow-lg text-white text-center sm:text-left font-semibold py-2">
            {description}
          </Medium>
        </div>

        <div className="w-full xl:w-[70%] lg:flex items-center justify-between relative">
          <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
            <FlipCard
              icon={icon_1}
              title="Tested Templates"
              text="Benefit from industry-specific insights and keywords seamlessly infused into your documents."
            />
            <FlipCard
              icon={icon_5}
              title="ATS Friendly Templates"
              text="Build professional resumes and cover letters with our free resume maker that passes the application tracking systems."
            />
            <FlipCard
              icon={icon_2}
              title="Spell & Grammar Checker"
              text="Use AI Pro Resume to build and redefine a resume with our advanced grammar checker that fixes spelling and grammar."
            />
            <FlipCard
              icon={icon_6}
              title="Pre-Written Examples"
              text="Choose from our prewritten resumes and cover letters for popular roles so you spend less time writing and more time applying."
            />
            <FlipCard
              icon={icon_3}
              title="AI-Powered Content"
              text="Use our AI resume assistant for fascinating suggestions regarding engaging summaries, job duties, skills, and body content."
            />
            <FlipCard
              icon={icon_7}
              title="Human Review"
              text="Get perfectly designed resumes and cover letters with expert human reviews and professional resume writing services."
            />
            <FlipCard
              icon={icon_4}
              title="Easy to Edit and Customize"
              text="Our resume helper lets you easily modify and adapt content to align with your unique skills and experiences."
            />
            <FlipCard
              icon={icon_8}
              title="Transparent Pricing"
              text="What you see is what you pay at the best resume maker. We offer affordable resume writing services, cover letter writing services, and review."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
