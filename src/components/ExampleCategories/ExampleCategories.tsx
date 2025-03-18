"use client";
import React, { useState } from 'react'
import styles from './ExampleCategories.module.css'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import Templates from '../Templates/Templates';

const settings: any = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1300,
    },
    {
      breakpoint: 1280, // Approximate for large screens
      settings: {
        slidesToShow: 3, // Matches `md:w-[33%]`
      },
    },
    {
      breakpoint: 768, // Matches the `md` breakpoint in Tailwind
      settings: {
        slidesToShow: 2, // Matches `sm:w-[50%]`
      },
    },
    {
      breakpoint: 640, // Matches the `sm` breakpoint in Tailwind
      settings: {
        slidesToShow: 1, // Matches `w-full`
      },
    },
  ],
};

export default function ExampleCategories() {
  const [isHovered, setIsHovered] = useState<any>(false);
  const [categories, set_categories] = useState<any[]>([
    {
      id: 6,
      name: "Creative",
      short_description:
        "These creative resume examples are ideal for designers, animators, and UI UX designers. The essence of  these resume examples reflects the blend of innovation with creativity. Our carefully designed  professional resume template highlights skills, collaborations, and creative projects. With AI Pro  Resume, you do not have to worry about the content in your resume. Our pre-written professional  resume examples are present to assist you in designing a resume, and you can add your portfolio and  creative projects to make your resume more fascinating.",
      cover_letter_description: null,
      parent_id: 2,
      top: 0,
      icon: "categories.svg",
    },
    {
      id: 10,
      name: "Creative & Cultural Fields",
      short_description:
        "<p>Use these professional resume templates if you want to keep your resume simple and career-oriented. These creative resume examples for freshers are perfect to kickstart your careers. You can add your portfolio, projects, and previous work updates to demonstrate the reception of your efforts. These are the best resume formats for storytellers and field artists. If you use these professional resume example templates, adjust the colors and fonts according to your preference to make them more elegant. Our target resume examples allow you to customize your resume for a specific job and assist you in adding the sections that matter the most.</p>",
      cover_letter_description:
        "<p>If you are applying for roles in creative or cultural fields, your cover letter should stand out just as your ideas do. Our collection includes <strong>short, simple cover letter examples </strong>that let your personality and creativity shine. Whether you are a student looking for inspiration with our <strong>student cover letter examples</strong> or applying for a wide range of positions with <strong>general job cover letter examples</strong>, we have got you covered. These <strong>simple cover letter examples</strong> help you highlight your unique skills and passion in a way that feels authentic and approachable.</p>",
      parent_id: 2,
      top: 1,
      icon: "categories.svg",
    },
    {
      id: 11,
      name: "Education & Learning",
      short_description:
        "<p>Educational resume examples are ideal for teachers, academic professors, and trainers who want to inspire and shape minds. These professional resume templates highlight your educational qualifications, certifications, and classroom experience. With AI Pro Resume pre-written resume example, you can design a resume that reflects your expertise in nurturing a positive learning environment. You can add a teacher philosophy segment to make your resume more personalized and display your unique educational approach. Our creative resume examples ensure your resume stands out in the academic sector.</p>",
      cover_letter_description:
        "<p>Only the best cover letter can set the stage for success in education and learning-related fields. Whether you are exploring opportunities with <strong>professional cover letter templates</strong> or need the <strong>best cover letter</strong> <strong>format</strong> to display your skills, we are here to help. For students and recent graduates, our <strong>cover letter example for internships</strong> is perfect for highlighting their enthusiasm and goals. Get your hands on <strong>professional cover letter templates </strong>and examples and secure your dream job.</p>",
      parent_id: 2,
      top: 0,
      icon: "categories.svg",
    },
    {
      id: 13,
      name: "Engineering & Scientific",
      short_description:
        "<p>To write a professional engineering resume, you must display your abilities and skills in designing and analyzing complex systems using advanced technical knowledge. AI Pro Resume makes it easy to design resumes using engineering resume examples. Our targeted resume examples chronologically highlight your skills and previous projects to make the resume more professional. Whether you are applying for network, mechanical, electrical, structural, geotechnical, or industrial engineering positions, we have pre-written creative resume examples that allow you to create your desired resumes quickly.</p>",
      cover_letter_description:
        '<p>AI Pro Resume features everything you need to take your engineering and scientific roles to the next level. We have incredible <strong style="color: rgb(14, 16, 26);">general cover letter examples</strong> and specialized cover letter templates for students and professionals. Whether you are looking for a <strong style="color: rgb(14, 16, 26);">short cover letter example</strong> or preparing something polished with our <strong style="color: rgb(14, 16, 26);">business cover letter examples</strong>, we have the perfect fit. Pair your skills confidently with one of our <strong style="color: rgb(14, 16, 26);">professional resume examples</strong> to create a standout application.</p>',
      parent_id: 2,
      top: 0,
      icon: "categories.svg",
    },
    {
      id: 14,
      name: "Food Service",
      short_description:
        "<p>Whether a fresher entering the food industry or an experienced expert, food service resume examples on AI Pro Resumehelp you create a standout resume. Our creative resume examples for freshers offer a simple yet professional resume format highlighting your hospitality passion. You can use our target resume examples if you are an experienced professional. Our pre-written creative resume example will further guide you about creating a professional resume for free. You can also pair our professional cover letter template with your resume to get your dream job easily.</p>",
      cover_letter_description:
        '<p><span style="color: rgb(14, 16, 26);">AI Pro Resume has the </span><strong style="color: rgb(14, 16, 26);">best cover letter examples</strong><span style="color: rgb(14, 16, 26);"> for the food service industry to make a great first impression. Our</span><strong style="color: rgb(14, 16, 26);"> professional cover letter templates</strong><span style="color: rgb(14, 16, 26);"> and AI-powered cover letter examples are perfect for </span>production managers,<strong> </strong>servers,<strong> </strong>territory sales managers, culinary/baking chefs, assistant sous chefs, and food and beverage servers.<strong> </strong><span style="color: rgb(14, 16, 26);">You can use our </span><strong style="color: rgb(14, 16, 26);">example cover letter for internships </strong><span style="color: rgb(14, 16, 26);">if you want guidance or aim to land your first role. Our professional </span><strong style="color: rgb(14, 16, 26);">cover letter examples</strong><span style="color: rgb(14, 16, 26);"> highlight your passion for food service and assist you in getting your dream job with ease. </span></p>',
      parent_id: 2,
      top: 0,
      icon: "categories.svg",
    },
    {
      id: 16,
      name: "Information Technology (IT)",
      short_description:
        "<p>You can use our Information Technology target resume examples if you are pursuing a career in IT. Freshers can explore our professional resume examples for freshers, as these resumes display your academic projects, certifications, and technical skills fascinatingly. We also have creative resume examples for those who are experts and want to stand out in their careers. Pair your resume with the best cover letter format to give your professional profile a sleek and organized look. Use our cover letter examples and pre-written templates to reflect how your background aligns with recruiter expectations.</p>",
      cover_letter_description:
        '<p><span style="color: rgb(14, 16, 26);">Make your tech world journey smooth with our </span><strong style="color: rgb(14, 16, 26);">best cover letter examples</strong><span style="color: rgb(14, 16, 26);">. Whether you are a recent graduate starting your career or aiming for a leadership role with our </span><strong style="color: rgb(14, 16, 26);">cover letter examples for management jobs.</strong><span style="color: rgb(14, 16, 26);"> Check out our </span><strong style="color: rgb(14, 16, 26);">internal job application cover letter examples</strong><span style="color: rgb(14, 16, 26);"> to highlight your growth and expertise. With our </span><strong style="color: rgb(14, 16, 26);">sample job cover letter examples</strong><span style="color: rgb(14, 16, 26);">, you will have the tools to create a standout application for roles like software developer, IT manager, or data analyst.</span></p>',
      parent_id: 2,
      top: 0,
      icon: "categories.svg",
    },
    {
      id: 19,
      name: "Maintenance & Repair",
      short_description:
        "<p>With AI Pro Resume, maintenance, and repair professional resume examples, you can easily grab the recruiter's attention. If you are applying for HVAC, automotive repair, or general maintenance roles, these target resume templates ensure your expertise shines. We offer resume examples for job seekers highlighting your hands-on training, certifications, and transferable skills. If you are creating your resume for the first time, use our resume experience examples to give it a professional look. However, if you have a wealth of experience, go for our two-page resume examples, ideal for detailing your advanced skills.</p>",
      cover_letter_description:
        "<p>Keeping things running smoothly is your career journey with our incredible cover letter examples. Whether you apply for roles like maintenance technician, repair specialist, or equipment mechanic, we have professional cover letter templates. Use our <strong>example of a basic cover letter</strong> to create a straightforward and professional application, or try a <strong>short cover letter example</strong> to make a quick yet lasting impression. For flexibility, our <strong>general cover letter examples</strong> work perfectly across different maintenance and repair positions. </p>",
      parent_id: 2,
      top: 0,
      icon: "categories.svg",
    },
    {
      id: 22,
      name: "Medicine Healthcare & Wellbeing",
      short_description:
        "<p>Use our Medicine, Healthcare, and Wellness professional resume examples to design a polished resume in no time. Our creative resume examples are perfect for medical professionals, caregivers, nurses, and wellness experts. You can use our free resume examples to build profiles that reflect your experiences effortlessly. Our good resume examples focus on certifications, internships, and volunteer work to help you land your dream job. Create a standout resume with AI Pro Resume that demonstrates your commitment to healthcare and well-being with professionalism.</p>",
      cover_letter_description:
        "<p>A perfect cover letter should reflect your compassion, expertise, and dedication to helping others. You can use AI Pro Resume <strong>professional cover letter templates</strong> for various positions in the healthcare and wellbeing industry as they highlight the right skills and experiences. Whether you are applying for roles like a nurse, medical assistant, therapist, or healthcare administrator, our AI-generated cover letters enable you to stand out. Our <strong>cover letter examples</strong> are perfect for beginners and professionals as they display your qualifications in a way that resonates with recruiters.</p>",
      parent_id: 2,
      top: 0,
      icon: "categories.svg",
    },
    {
      id: 23,
      name: "Office & Administrative",
      short_description:
        "<p>Our office and administrative resume examples help you create a polished resume highlighting your organizational skills, multitasking abilities, and proficiency in office management. These professional resume templates cater to administrative assistants, office managers, and clerks. If you are looking for inspiration, then use our target resume examples. It will guide you in structuring your resume with skills and expertise. Try our great resume examples, which combine a clean design with sections highlighting your technical and interpersonal skills.</p>",
      cover_letter_description:
        "<p>AI Pro Resume has just what you need if you are ready to bring your organizational skills to an office or administrative role. From administrative assistants to office managers and receptionists, our <strong>professional cover letter templates </strong>make your application stand out. Whether you are preparing your first application with our <strong>cover letter examples for internships</strong> or creating a polished introduction with our <strong>resume cover letter examples</strong>, we have options for every step of your career. You can make a winning application in minutes with our sample cover letter examples. </p>",
      parent_id: 2,
      top: 1,
      icon: "categories.svg",
    },
    {
      id: 43,
      name: "Management",
      short_description:
        "<p>Our management resume examples are designed to help leaders and professionals display their ability to guide teams, oversee projects, and achieve business goals. AI Pro Resume's simple resume examples underline organizational skills, making them proficient resumes for managerial roles. You can use our professional summary resume examples to highlight your key achievements and leadership qualities. Let our professional resume examples guide you in building a resume that reflects your career achievements while maintaining a polished appearance.</p>",
      cover_letter_description:
        "<p>Management is all about showing your ability to lead and make things happen. Our <strong>management cover letter examples</strong> help you to display your skills and experience. Whether you are looking to manage a team, department, or an entire organization, AI Pro Resume has everything that can assist you in getting the opportunity. We have kept it simple and impactful to ensure your experience shines through clearly. These <strong>professional cover letter templates</strong> allow you to highlight your leadership style and help you stand out in the job market.</p>",
      parent_id: 2,
      top: 1,
      icon: "categories.svg",
    },
  ])
  const [top_categories, set_top_categories] = useState<any[]>([
    // {
    //   id: 3,
    //   name: "All Templates",
    //   short_description:
    //     "AI Pro Resume is your ultimate destination for creating professional resumes and cover letters. To save  you time and effort, we have introduced creative resume examples. These great resume examples are  pre-written. You just have to click on them and add minor details to make your resume more  personalized. We offer professional resume templates that assist you in landing the interview. Whether  you are starting your career or a seasoned professional, AI Pro Resume ensures your resume shines in  the crowd.",
    //   cover_letter_description: null,
    //   parent_id: 2,
    //   top: 1,
    //   icon: "categories.svg",
    //   resume_examples: [
    //     {
    //       id: 83,
    //       resume_name: "Industrial Engineer",
    //       first_name: "Mark",
    //       middle_name: "D. Henderson",
    //       last_name: "Henderson",
    //       email_address: "mark.henderson@email.com",
    //       job_title: "example",
    //       phone_number: "03115645434",
    //       contact_number: "04653242531",
    //       template_id: 3,
    //       category_id: 13,
    //       country_id: 20,
    //       state: "Homjel'",
    //       city: "Rahachow",
    //       street_address: "675 street Ld Avenue",
    //       postal_code: "1445",
    //       date_of_birth: "2022-10-05",
    //       gender: "male",
    //       maritial_status: "single",
    //       nationality: null,
    //       id_no: "7656342648790",
    //       // preview_image: template_1,
    //       created_at: "2024-05-23T10:48:32.000000Z",
    //       updated_at: "2024-11-01T10:56:28.000000Z",
    //       deleted_at: null,
    //       template: {
    //         id: 3,
    //         name: "Elegant Executive",
    //         is_paid: 0,
    //       },
    //       job_positions: [
    //         {
    //           id: 53,
    //           name: "Civil Engineer",
    //           pivot: {
    //             resume_example_id: 83,
    //             job_position_id: 53,
    //           },
    //         },
    //       ],
    //     },
    //   ]
    // }

  ]);

  return (
    <div className="grid grid-cols-12 gap-8 px-4 lg:px-16 xl:px-20 2xl:px-40">
      <div className="col-span-3 ">
        <div className="border border-[#00caa5] rounded-lg shadow-[0px_0px_20px_0px_rgba(0,0,0,0.2)]">
          <h1 className="font-Lexend text-2xl py-4 px-4 text-[#0072b1]">
            Categories
          </h1>
          <hr className="border-t border-[#00caa5]" />
          {categories
            .map((category: any, index: any) => (
              <div
                key={index}
                id={category.id}
                className={`flex gap-2 font-Lexend justify-start items-center p-2 text-slate-900 cursor-pointer  hover:text-[#0072b1] my-2 `}
              >
                <p className="font-Lexend text-lg pl-2">{category.name}</p>
              </div>
            ))}
        </div >
      </div >
      <div className='col-span-9'>
        <div className="flex justify-between items-center flex-wrap border-b pb-4">
          <div className="">
            <h2 className="font-Lexend text-md lg:text-2xl text-[#0072b1]">
              All Template
            </h2>
          </div>

          <div className="flex justify-end items-center">
            <div className="border-2 border-[#0072b1] hover:border-[#00caa5] text-[#0072b1] hover:text-[#00caa5] rounded-full p-1 transition-all duration-200 cursor-pointer">
              <BiLeftArrowAlt
                size={25}
                className="custom-arrow prev-arrow"
              />
            </div>

            <div className="ml-4 border-2 border-[#0072b1] hover:border-[#00caa5] text-[#0072b1] hover:text-[#00caa5] rounded-full p-1 transition-all duration-200 cursor-pointer">
              <BiRightArrowAlt
                size={25}
                className="custom-arrow prev-arrow"
              />
            </div>
          </div>
        </div>

        <div>
          <Slider
            {...settings}
          >
            <Templates />
          </Slider>
        </div>
      </div>

    </div >
  )
}

