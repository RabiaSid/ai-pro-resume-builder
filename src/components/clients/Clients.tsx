"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import client1 from "media/assets/about_icon_1.webp";
import { H2 } from "@/components/typography";
import Carousel from "../common/carousel/Carousel";

type PropsType = {
  title: string | React.ReactNode;
};

const Clients = ({ title }: PropsType) => {

  const dummyClients = [
    { id: 1, image: client1 },
    { id: 2, image: client1 },
    { id: 3, image: client1 },
    { id: 4, image: client1 },
    { id: 5, image: client1 },
  ];

  return (
    <section className="relative container mx-auto py-4 md:8">
      <div className="w-full bg-white">

        <div className="text-md sm:text-lg text-center font-bold text-primary flex sm:gap-2 justify-center items-center">
          <H2 className="text-primaryBlue">{title}</H2>
        </div>


        <div className="relative px-8">

          <Carousel nextArrow={false} prevArrow={false} appendDots={false}>
            {dummyClients.map((client) => (
              <div key={client.id} className="p-2 md:p-6 lg:p-10">
                <div className="bg-white shadow-lg border-2 rounded-md p-4 m-auto w-[150px] md:w-[220px] lg:w-[240px] flex justify-center items-center">
                  <Image
                    src={client.image}
                    alt="Client Logo"
                    width={160}
                    height={160}
                    className="w-[120px] md:w-[140px] lg:w-[160px]"
                  />
                </div>
              </div>
            ))}
          </Carousel>

        </div>
      </div>

    </section>
  );
};

export default Clients;
