import dynamic from "next/dynamic";

const TextEditor = dynamic(() => import("./formatting/TextEditor/TextEditor"));
const NewSection = dynamic(() => import("./formatting/NewSection/NewSection"));
const ResumePreview = dynamic(
  () => import("./formatting/ResumePreview/ResumePreview")
);
const AutoPlaySlider = dynamic(() => import("./slider/AutoPlaySlider"));
const AutoScrollSlider = dynamic(() => import("./slider/AutoScrollSlider"));
const Ads = dynamic(() => import("./ads/Ads"));
const mainBanner = dynamic(() => import("./Banner/mainBanner"));
const Clients = dynamic(() => import("./clients/Clients"));
const faq = dynamic(() => import("./Faq/faq"));
const facebookLogin = dynamic(() => import("./socialLogins/facebookLogin"));
const googleLogin = dynamic(() => import("./socialLogins/googleLogin"));
const linkedinLogin = dynamic(() => import("./socialLogins/linkedInLogin"));
const Reviews = dynamic(() => import("./reviews/Reviews"));
const PosterBanner = dynamic(() => import("./services/PosterBanner"));
const UserReferral = dynamic(() => import("./userReferral/UserReferral"));
const ServiceContent = dynamic(() => import("./services/ServiceContent"));
const Services = dynamic(() => import("./services/Services"));
const ServicesSection = dynamic(() => import("./services/ServicesSection"));
const profileSection = dynamic(
  () => import("./profile/profileSection/profileSection")
);
const loadingSkeleton = dynamic(
  () => import("./loadingSkeleton/loadingSkeleton")
);

export {
  AutoPlaySlider,
  AutoScrollSlider,
  TextEditor,
  NewSection,
  ResumePreview,
  Ads,
  mainBanner,
  Clients,
  faq,
  loadingSkeleton,
  profileSection,
  Reviews,
  PosterBanner,
  ServiceContent,
  Services,
  ServicesSection,
  facebookLogin,
  googleLogin,
  linkedinLogin,
  UserReferral,
};
