"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
// import axios from "axios";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import ReviewCard from "../common/card/ReviewCard";
import { H2, Medium } from "@/components/typography";

type propsType = {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
};

const Reviews = (props: propsType) => {
  const { title, description } = props;
  const [our_reviews, set_our_reviews] = useState<any[]>([
    {
      id: 1,
      userName: "Hamza",
      postedDate: "11-12-13",
      review: "This is an amazing product! Highly recommended.",
      stars: 4,
    },
    {
      id: 2,
      userName: "Ali",
      postedDate: "12-01-14",
      review: "Great experience, will definitely buy again!",
      stars: 5,
    },
    {
      id: 3,
      userName: "Sara",
      postedDate: "15-03-15",
      review: "Good quality but delivery was slow.",
      stars: 3,
    },
    {
      id: 2,
      userName: "Ali",
      postedDate: "12-01-14",
      review: "Great experience, will definitely buy again!",
      stars: 5,
    },
    {
      id: 3,
      userName: "Sara",
      postedDate: "15-03-15",
      review: "Good quality but delivery was slow.",
      stars: 3,
    },
  ]);

  const reviewsSliderRef: any = useRef(null);

  return (
    <>
      <section className="bg-[#eeeef1] pt-6 mt-5 py-10">
        <div className="container m-auto flex flex-col relative">
          <div className="flex flex-col gap-4 lg:grid justify-center text-center">
            <div className="items-center">
              <div className="px-4  py-2 relative">
                <H2 className="text-primaryBlue py-4">{title}</H2>
                <Medium className=" m-auto text-black font-Lexend">
                  {description}
                </Medium>
              </div>
            </div>
          </div>

          <div className="bg-opacity-25 flex flex-col w-full h-fit  items-center px-4 mb-10 mt-4 relative">
            <div className="w-full our__reviews">
              {our_reviews.length > 0 && (
                <Slider
                  ref={reviewsSliderRef}
                  {...{
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    arrows: false,
                  }}
                  responsive={[
                    {
                      breakpoint: 1300,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true,
                      },
                    },
                    {
                      breakpoint: 800,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      },
                    },
                  ]}
                >
                  {our_reviews?.map((rev, idx) => (
                    <ReviewCard key={idx} review={rev} />
                  ))}
                </Slider>
              )}
            </div>
            <div className="absolute -bottom-8 flex justify-between h-8 px-4 gap-12 w-full items-center">
              <div
                className="z-10 hidden sm:block"
                onClick={() => reviewsSliderRef.current.slickPrev()}
              >
                <FaLongArrowAltLeft className="text-primaryGreen text-2xl cursor-pointer transition-all hover:text-3xl" />
              </div>

              <div
                className="z-10 hidden sm:block"
                onClick={() => reviewsSliderRef.current.slickNext()}
              >
                <FaLongArrowAltRight className="text-primaryGreen text-2xl cursor-pointer transition-all hover:text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
