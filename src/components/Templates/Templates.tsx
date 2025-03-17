"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoIosEye } from "react-icons/io";
import template_1 from "media/assets/resume_template_images/template_1.webp";
import template_2 from "media/assets/resume_template_images/template_2.webp";
import template_3 from "media/assets/resume_template_images/template_3.webp";
import template_4 from "media/assets/resume_template_images/template_4.webp";
import template_5 from "media/assets/resume_template_images/template_5.webp";
import template_6 from "media/assets/resume_template_images/template_6.webp";
import template_7 from "media/assets/resume_template_images/template_7.webp";
import template_8 from "media/assets/resume_template_images/template_8.webp";
import template_9 from "media/assets/resume_template_images/template_9.webp";
import template_10 from "media/assets/resume_template_images/template_10.webp";
import template_11 from "media/assets/resume_template_images/template_11.webp";
import template_12 from "media/assets/resume_template_images/template_12.webp";

const Templates = () => {
  const [isHovered, setIsHovered] = useState<any>(false);
  const [templates, setTemplates] = useState<any[]>([
    {
      id: 1,
      name: "Sleek Simplicity",
      image: template_1,
      category_id: 3,
      sort: 1,
      status: 1,
      is_example: 0,
      is_paid: 1,
      template_id: 8,
      price: "10.00",
      duration: 60,
      created_at: "2023-10-24T05:39:31.000000Z",
      updated_at: "2024-12-10T09:54:41.000000Z",
      deleted_at: null,
    },
    {
      id: 2,
      name: "Sleek Simplicity",
      image: template_2,
      category_id: 3,
      sort: 1,
      status: 1,
      is_example: 0,
      is_paid: 0,
      template_id: 8,
      price: "10.00",
      duration: 60,
      created_at: "2023-10-24T05:39:31.000000Z",
      updated_at: "2024-12-10T09:54:41.000000Z",
      deleted_at: null,
    },
    {
      id: 3,
      name: "Sleek Simplicity",
      image: template_3,
      category_id: 3,
      sort: 1,
      status: 1,
      is_example: 0,
      is_paid: 0,
      template_id: 8,
      price: "10.00",
      duration: 60,
      created_at: "2023-10-24T05:39:31.000000Z",
      updated_at: "2024-12-10T09:54:41.000000Z",
      deleted_at: null,
    },
    {
      id: 4,
      name: "Sleek Simplicity",
      image: template_4,
      category_id: 3,
      sort: 1,
      status: 1,
      is_example: 0,
      is_paid: 0,
      template_id: 8,
      price: "10.00",
      duration: 60,
      created_at: "2023-10-24T05:39:31.000000Z",
      updated_at: "2024-12-10T09:54:41.000000Z",
      deleted_at: null,
    },
    {
      id: 5,
      name: "Sleek Simplicity",
      image: template_5,
      category_id: 3,
      sort: 1,
      status: 1,
      is_example: 0,
      is_paid: 0,
      template_id: 8,
      price: "10.00",
      duration: 60,
      created_at: "2023-10-24T05:39:31.000000Z",
      updated_at: "2024-12-10T09:54:41.000000Z",
      deleted_at: null,
    },
    {
      id: 6,
      name: "Sleek Simplicity",
      image: template_6,
      category_id: 3,
      sort: 1,
      status: 1,
      is_example: 0,
      is_paid: 0,
      template_id: 8,
      price: "10.00",
      duration: 60,
      created_at: "2023-10-24T05:39:31.000000Z",
      updated_at: "2024-12-10T09:54:41.000000Z",
      deleted_at: null,
    },
    {
      id: 7,
      name: "Sleek Simplicity",
      image: template_7,
      category_id: 3,
      sort: 1,
      status: 1,
      is_example: 0,
      is_paid: 0,
      template_id: 8,
      price: "10.00",
      duration: 60,
      created_at: "2023-10-24T05:39:31.000000Z",
      updated_at: "2024-12-10T09:54:41.000000Z",
      deleted_at: null,
    },
    {
      id: 8,
      name: "Sleek Simplicity",
      image: template_8,
      category_id: 3,
      sort: 1,
      status: 1,
      is_example: 0,
      is_paid: 0,
      template_id: 8,
      price: "10.00",
      duration: 60,
      created_at: "2023-10-24T05:39:31.000000Z",
      updated_at: "2024-12-10T09:54:41.000000Z",
      deleted_at: null,
    },
    {
      id: 9,
      name: "Sleek Simplicity",
      image: template_9,
      category_id: 3,
      sort: 1,
      status: 1,
      is_example: 0,
      is_paid: 0,
      template_id: 8,
      price: "10.00",
      duration: 60,
      created_at: "2023-10-24T05:39:31.000000Z",
      updated_at: "2024-12-10T09:54:41.000000Z",
      deleted_at: null,
    },
    {
      id: 10,
      name: "Sleek Simplicity",
      image: template_10,
      category_id: 3,
      sort: 1,
      status: 1,
      is_example: 0,
      is_paid: 0,
      template_id: 8,
      price: "10.00",
      duration: 60,
      created_at: "2023-10-24T05:39:31.000000Z",
      updated_at: "2024-12-10T09:54:41.000000Z",
      deleted_at: null,
    },
    {
      id: 11,
      name: "Sleek Simplicity",
      image: template_11,
      category_id: 3,
      sort: 1,
      status: 1,
      is_example: 0,
      is_paid: 0,
      template_id: 8,
      price: "10.00",
      duration: 60,
      created_at: "2023-10-24T05:39:31.000000Z",
      updated_at: "2024-12-10T09:54:41.000000Z",
      deleted_at: null,
    },
    {
      id: 12,
      name: "Sleek Simplicity",
      image: template_12,
      category_id: 3,
      sort: 1,
      status: 1,
      is_example: 0,
      is_paid: 0,
      template_id: 8,
      price: "10.00",
      duration: 60,
      created_at: "2023-10-24T05:39:31.000000Z",
      updated_at: "2024-12-10T09:54:41.000000Z",
      deleted_at: null,
    },
  ]);

  // const IsHoveredTrue = (i: number) => {
  //   () => setIsHovered(true)
  // }
  // const IsHoveredFalse = (i: number) => {
  //   () => setIsHovered(false)
  // }

  return (
    <>
      <div
        className={
          templates.length === 0
            ? ""
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        }
      >
        {templates?.length > 0 ? (
          templates.map((template, index) => {
            return (
              <div
                className="relative flex justify-center items-center px-4 cursor-pointer flex-wrap mt-10 transition-all duration-700"
                key={index}
              >
                <div className="w-max lg:m-4">
                  <div
                    className={`relative transition-all duration-700  ${isHovered === template.id ? "scale-105" : "scale-100"}`}
                    onMouseEnter={() => setIsHovered(template.id)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    {/* Eye Icon with Count */}
                    <div className="bg-gradient-to-r from-[#01B2AC]/80 to-[#00caa5]/80 px-2 h-6 right-4 top-4 rounded-sm gap-2 flex items-center justify-center absolute z-50">
                      <IoIosEye color="#fff" size={22} />
                      <span className="text-sm text-white font-medium">
                        100
                      </span>
                    </div>

                    {/* Premium Badge */}
                    {template.is_paid === 1 && (
                      <div
                        className={`absolute left-[-35px] top-[24px] w-[150px] h-8 text-white -rotate-45 flex justify-center items-center z-50 transition-all duration-700 ${isHovered === template.id ? "scale-110" : "scale-100"}`}
                        style={{
                          background:
                            "linear-gradient(to right, #01B2AC, #0072B1)",
                          clipPath:
                            "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
                        }}
                      >
                        <span>Premium</span>
                      </div>
                    )}

                    {/* Image with Border Animation */}
                    <div className="relative">
                      {/* Border Animation */}
                      <div
                        className={`absolute border border-solid border-[#01B2AC]  w-full h-full z-10 transition-all duration-700 ${isHovered === template.id
                          ? "-bottom-3 -right-3 scale-103 rounded-xl"
                          : "bottom-0 right-0 scale-100 rounded-2xl"
                          }`}
                      ></div>

                      {/* Image */}
                      <Image
                        src={template.image}
                        alt="Template Image"
                        width={300}
                        height={300}
                        className={`shadow-sm shadow-cyan-950/70 rounded-xl w-full z-20 relative border transition-transform duration-700 
                        ${isHovered === template.id ? "scale-103" : "scale-100"
                          }`}
                      />

                      <div
                        className={`absolute box2 shadow-lg left-20 transition-transform duration-2000  
                        ${isHovered === template.id ? "bottom-56 z-30" : "z-10 bottom-0"} 
                        rounded-lg py-2 cursor-pointer JosefinSans text-md 
                      bg-[#01B2AC] hover:bg-[#0072b1] text-white w-[60%] 
                        flex justify-center items-center flex-wrap`}
                      >
                        Use This Template
                      </div>
                    </div>

                    {/* Template Name */}
                    <p className="duration-300 transition-all text-md text-black text-center mt-8">
                      {template.name}
                    </p>

                    {/* Price or Free Label */}
                    {template.is_paid === 1 ? (
                      <p className="duration-300 transition-all text-md text-primary-blue font-bold text-center mt-2">
                        $ {template.price}
                      </p>
                    ) : (
                      <p className="duration-300 transition-all text-md text-primary-blue font-bold text-center mt-2">
                        FREE
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h1 className="my-2 text-xl font-bold px-6">Loading....</h1>
        )}
      </div>
    </>
  );
};

export default Templates;
