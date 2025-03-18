"use client";

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import brand from "media/assets/brand.webp";
import premium from "media/assets/premium.webp";
import AppButton from "../common/button/pages";
import Template1 from "media/assets/resume_template_images/template_3.webp";
import Template2 from "media/assets/resume_template_images/template_2.webp";
import Template3 from "media/assets/resume_template_images/template_3.webp";
import { H2, Medium } from "@/components/typography";
import { AutoPlaySlider } from "@/components";

type Template = {
  id: number;
  image: any;
  is_paid: number;
};

type User = {
  token?: string;
  purchase_templates?: { id: number }[];
};

type propsType = {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
};

export default function ResumeTemplateSlider(props: propsType) {
  const { title, description } = props;

  const [templates, setTemplates] = useState<Template[]>([
    { id: 1, image: Template1, is_paid: 0 },
    { id: 2, image: Template2, is_paid: 1 },
    { id: 3, image: Template3, is_paid: 0 },
    { id: 1, image: Template1, is_paid: 0 },
    { id: 2, image: Template2, is_paid: 1 },
    { id: 3, image: Template3, is_paid: 0 },
  ]);
  const [userPurchasedTemplates, setUserPurchasedTemplates] = useState<
    Template[]
  >([]);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1500, settings: { slidesToShow: 2 } },
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="container md:px-4 mx-auto relative">
      <div className="mt-2 px-2 flex justify-center items-center flex-wrap relative">
        <H2 className="text-primaryBlue py-4">{title}</H2>
        <div className="flex w-full sm:justify-center sm:items-center sm:text-center">
          <div className="block">
            <Medium className="mb-2 m-auto text-slate-800  text-justify font-Lexend">
              {description}
            </Medium>
            <div
              className={`${
                templates.length === 0 ? "" : "grid grid-cols-1 gap-4"
              }`}
            >
              <AutoPlaySlider
                options={{ align: "start" }}
                arrowPosition="hidden"
              >
                {templates.map((template, index) => {
                  const isPurchased = userPurchasedTemplates.some(
                    (purchasedTemplate) => purchasedTemplate.id === template.id
                  );
                  return (
                    <div
                      key={index}
                      className="grow-0 shrink-0 basis-[100%] md:basis-[50%] xl:basis-1/3 pl-5"
                    >
                      <div className="relative m-6" key={index}>
                        {isPurchased ? (
                          <div
                            className="flex bg-gradient-to-r from-[#00caa5] to-[#01B2AC] w-[150px] h-8 absolute left-[-35px] top-6 text-white -rotate-45 justify-center items-center z-50"
                            style={{
                              clipPath:
                                "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
                            }}
                          >
                            <Image src={brand} alt="purchased icon" />
                            <span>Own</span>
                          </div>
                        ) : (
                          template.is_paid === 1 && (
                            <div
                              className="flex bg-gradient-to-r from-[#01B2AC] to-[#0072B1] w-[150px] h-8 absolute left-[-35px] top-6 text-white -rotate-45 justify-center items-center z-50"
                              style={{
                                clipPath:
                                  "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
                              }}
                            >
                              <Image src={premium} alt="premium icon" />
                              <span>Premium</span>
                            </div>
                          )
                        )}

                        <Image
                          src={template.image}
                          alt="My Image"
                          className="shadow-[0px_0px_3px_rgba(0,0,0,1)] rounded-xl w-[100%] sm:w-[90%] p-2 lg:p-0"
                        />
                      </div>
                    </div>
                  );
                })}
              </AutoPlaySlider>
            </div>

            <div className="flex justify-center items-center w-full pt-8">
              <AppButton title="View All Templates" width="w-fit" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
