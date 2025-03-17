import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactUs = () => {
  return (
    <>
      <section className="w-full px-2 md:px-4 lg:px-20 2xl:px-40 pb-20 lg:pb-10">
        <div className="w-full  xl:h-[900px] relative bottom-0 rounded-2xl md:mt-[-50px] lg:mt-0 sm:px-4 lg:px-10 flex flex-wrap justify-between items-center align-middle ">
          <div className="w-full xl:w-[60%]">
            <div className="md:bg-gradient-to-t from-[#0072b1] to-[#00caa5] rounded-t-2xl rounded-b-2xl lg:rounded-2xl sm:px-4 h-[600px] relative bottom-[-20px] xl:bottom-0">
              <ContactForm />
            </div>
          </div>

          <ContactInfo />
        </div>
      </section>
    </>
  );
};

export default ContactUs;
