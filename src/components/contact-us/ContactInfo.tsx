import React from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoPinterest,
  BiMailSend,
  BiSolidMap,
  BiSolidPhone,
} from "react-icons/bi";

const ContactInfo = () => {
  return (
    <>
      <div className="w-full xl:w-[40%] lg:w-[50%] pt-20  py-2">
        <div className="flex justify-center items-center flex-wrap">
          <div className="px-2 sm:px-10 md:pt-30 pt-32 sm:pt-16 lg:py-10">
            <h1 className="text-teal-500 font-bold text-xl ml-0 lg:text-3xl mb-5 lg:mb-10 font-Lexend p-2">
              Contact Information
            </h1>
            <div className="py-2 px-2 flex items-center font-Lexend flex-wrap">
              <BiSolidPhone className="text-teal-500 text-3xl mr-2 lg:text-4xl" />
              <a
                // href={`tel:${our_settings.contact_number}`}
                className="text-gray-900 font-medium ml-3 lg:ml-2 text-md lg:text-xl flex items-center"
              >
                {/* {our_settings.contact_number} */}
                +1 (438) 883-8289
              </a>
            </div>
            <div className="py-2 px-2 flex items-center font-Lexend">
              <BiMailSend className="text-teal-500 text-3xl mr-2 lg:text-4xl" />
              <a
                // href={`mailto:${our_settings.website_email}`}
                className="text-gray-900 font-medium ml-3 lg:ml-2 text-md lg:text-xl flex items-center"
              >
                {/* {our_settings.website_email} */}
                marketing.cognitiveit@gmail.com
              </a>
            </div>
            <div className="py-2 px-2 flex items-center font-Lexend">
              <BiSolidMap className="text-teal-500 text-4xl mr-2 lg:text-5xl" />
              <span className="text-gray-900 font-medium ml-3 lg:ml-2 text-md lg:text-xl flex items-center">
                {/* {our_settings.location_address} */}
                989 Derry Rd E # 403, Mississauga, ON L5T 2J8, Canada
              </span>
            </div>
            <h1 className="text-gray-700 font-medium font-Lexend ml-0 lg:ml-0 text-xl my-10">
              Follow Us
            </h1>
            <div className="flex item-center justify-start text-5xl lg:text-6xl my-8">
              <a
                target="_blank"
                // href={our_settings.facebook_account_link}
                className="text-[#0072b1] hover:text-[#00caa5]"
              >
                <BiLogoFacebook className="rounded-full border-2 p-2 mr-4 hover:bg-[#0072b1] border-[#0072b1]" />
              </a>
              <a
                target="_blank"
                // href={our_settings.instagram_account_link}
                className="text-[#0072b1] hover:text-[#00caa5]"
              >
                <BiLogoInstagram className="rounded-full border-2 p-2 mr-4 hover:bg-[#0072b1] border-[#0072b1]" />
              </a>
              <a
                target="_blank"
                // href={our_settings.linkedin_account_link}
                className="text-[#0072b1] hover:text-[#00caa5]"
              >
                <BiLogoLinkedin className="rounded-full border-2 p-2 mr-4 hover:bg-[#0072b1] border-[#0072b1]" />
              </a>
              <a
                target="_blank"
                href="https://www.pinterest.ca/aiproresume/"
                className="text-[#0072b1] hover:text-[#00caa5]"
              >
                <BiLogoPinterest className="rounded-full border-2 p-2 mr-4 hover:bg-[#0072b1] border-[#0072b1]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
