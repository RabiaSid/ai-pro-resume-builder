import React, { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import MultiInputField from "../common/multiInputField/MultiInputField";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [captchaError, setCaptchaError] = useState<any>();
  const [verified, setVerified] = useState<any>(false);

  const handleCheckCaptcha = (val: string | null) => {
    setVerified(true);
    setCaptchaError("");
  };

  // Reset the reCAPTCHA value after a certain time
  const resetRecaptchaValue = () => {
    setVerified(null);
  };

  // Set a timeout to reset the reCAPTCHA value after 5 minutes (adjust as needed)
  const TIMEOUT_DURATION = 1 * 60 * 1000; // 5 minutes in milliseconds
  let timeoutId: any;

  const handleRecaptchaTimeout = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(resetRecaptchaValue, TIMEOUT_DURATION);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const contact_submit = (data: any) => {
    console.log("data", data);
    // if (!verified) {
    //   setCaptchaError("Please verify that you are a human!");
    //   return;
    // }
  };

  return (
    <>
      <form onSubmit={handleSubmit(contact_submit)}>
        <div className="bg-white shadow-2xl md:shadow-xl rounded-2xl md:px-4 lg:px-16 py-10 lg:py-20 relative lg:bottom-[100px] border">
          <h1 className="text-gray-700 font-bold font-Lexend text-xl md:text-2xl lg:text-3xl mb-6 lg:mb-10 px-2 md:px-0">
            Send us a message
          </h1>

          {/* Full Name */}
          <MultiInputField
            control={control}
            name="fullName"
            placeholder="Full Name"
            type="text"
            rules={{ required: "Full Name is required" }}
          />

          {/* Phone Number */}
          <MultiInputField
            control={control}
            name="phone"
            placeholder="Enter your phone number"
            type="phone"
            rules={{ required: "Phone number is required" }}
          />

          {/* Email */}
          <MultiInputField
            control={control}
            name="email"
            placeholder="Email"
            type="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email format",
              },
            }}
          />

          {/* Message (Textarea) */}
          <MultiInputField
            control={control}
            name="message"
            placeholder="How can we help you?"
            type="textarea"
            rules={{ required: "Message is required" }}
          />

          {/* ReCAPTCHA & Submit */}
          <div className="py-8 flex flex-row-reverse">
            <div className="w-full flex flex-col sm:flex sm:flex-row items-center justify-center gap-10">
              {/* Captcha */}
              <div className="flex flex-col items-start mt-4">
                <span className="text-red-500 text-sm font-Lexend">
                  {captchaError}
                </span>
                <ReCAPTCHA
                  sitekey={"6LdRjxslAAAAAIP7BsNtsYgCvPM5RfNXjHGIzveJ"}
                  onChange={(val) => {
                    handleCheckCaptcha(val);
                    handleRecaptchaTimeout();
                  }}
                />
              </div>
              <button className="bg-[#0072b1] text-white hover:bg-[#00caa5] transition-all duration-150 ease-in font-Lexend text-lg px-8 py-2 rounded-full mt-5">
                SUBMIT
              </button>
              <button
                id="processing_loader"
                style={{ display: "none" }}
                className=" bg-[#0072b1] text-white hover:bg-[#00caa5] transition-all duration-150 ease-in font-Lexend text-lg px-8 py-2 rounded-full flex font-Lexend"
                type="button"
              >
                <BiLoaderAlt size={28} className="mr-2 animate-spin" />{" "}
                Processing...
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
