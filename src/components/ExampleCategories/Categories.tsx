"use client";

import React, { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import premium from "media/assets/premium.webp";
import Image from "next/image";
import Slider from "react-slick";
import template_1 from "media/assets/resume_template_images/template_1.webp";
import './categories.css'

const Categories = () => {
  const [isfilter, setIsfilter] = useState<any>(false);
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
  ]);
  const [top_categories, set_top_categories] = useState<any[]>([
    {
      id: 3,
      name: "All Templates",
      short_description:
        "AI Pro Resume is your ultimate destination for creating professional resumes and cover letters. To save  you time and effort, we have introduced creative resume examples. These great resume examples are  pre-written. You just have to click on them and add minor details to make your resume more  personalized. We offer professional resume templates that assist you in landing the interview. Whether  you are starting your career or a seasoned professional, AI Pro Resume ensures your resume shines in  the crowd.",
      cover_letter_description: null,
      parent_id: 2,
      top: 1,
      icon: "categories.svg",
      resume_examples: [
        {
          id: 83,
          resume_name: "Industrial Engineer",
          first_name: "Mark",
          middle_name: "D. Henderson",
          last_name: "Henderson",
          email_address: "mark.henderson@email.com",
          job_title: "example",
          phone_number: "03115645434",
          contact_number: "04653242531",
          template_id: 3,
          category_id: 13,
          country_id: 20,
          state: "Homjel'",
          city: "Rahachow",
          street_address: "675 street Ld Avenue",
          postal_code: "1445",
          date_of_birth: "2022-10-05",
          gender: "male",
          maritial_status: "single",
          nationality: null,
          id_no: "7656342648790",
          preview_image: template_1,
          created_at: "2024-05-23T10:48:32.000000Z",
          updated_at: "2024-11-01T10:56:28.000000Z",
          deleted_at: null,
          template: {
            id: 3,
            name: "Elegant Executive",
            is_paid: 0,
          },
          job_positions: [
            {
              id: 53,
              name: "Civil Engineer",
              pivot: {
                resume_example_id: 83,
                job_position_id: 53,
              },
            },
          ],
        },
        {
          id: 84,
          resume_name: "Geotechnical Engineer",
          first_name: "Michael J. Anderson",
          middle_name: "J.",
          last_name: "Anderson",
          email_address: "michael.anderson@email.com",
          job_title: "example",
          phone_number: "0882693923",
          contact_number: "03729202327",
          template_id: 3,
          category_id: 13,
          country_id: 230,
          state: "New York",
          city: "Garden City",
          street_address: "street 2 garden city",
          postal_code: "10822",
          date_of_birth: "2022-10-05",
          gender: "male",
          maritial_status: "single",
          nationality: null,
          id_no: "3902839283776",
          preview_image: template_1,
          created_at: "2024-05-23T11:20:43.000000Z",
          updated_at: "2024-11-01T10:56:12.000000Z",
          deleted_at: null,
          template: {
            id: 3,
            name: "Elegant Executive",
            is_paid: 0,
          },
          job_positions: [
            {
              id: 54,
              name: "Junior Civil Engineer",
              pivot: {
                resume_example_id: 84,
                job_position_id: 54,
              },
            },
          ],
        },
        {
          id: 83,
          resume_name: "Industrial Engineer",
          first_name: "Mark",
          middle_name: "D. Henderson",
          last_name: "Henderson",
          email_address: "mark.henderson@email.com",
          job_title: "example",
          phone_number: "03115645434",
          contact_number: "04653242531",
          template_id: 3,
          category_id: 13,
          country_id: 20,
          state: "Homjel'",
          city: "Rahachow",
          street_address: "675 street Ld Avenue",
          postal_code: "1445",
          date_of_birth: "2022-10-05",
          gender: "male",
          maritial_status: "single",
          nationality: null,
          id_no: "7656342648790",
          preview_image: template_1,
          created_at: "2024-05-23T10:48:32.000000Z",
          updated_at: "2024-11-01T10:56:28.000000Z",
          deleted_at: null,
          template: {
            id: 3,
            name: "Elegant Executive",
            is_paid: 0,
          },
          job_positions: [
            {
              id: 53,
              name: "Civil Engineer",
              pivot: {
                resume_example_id: 83,
                job_position_id: 53,
              },
            },
          ],
        },
        {
          id: 84,
          resume_name: "Geotechnical Engineer",
          first_name: "Michael J. Anderson",
          middle_name: "J.",
          last_name: "Anderson",
          email_address: "michael.anderson@email.com",
          job_title: "example",
          phone_number: "0882693923",
          contact_number: "03729202327",
          template_id: 3,
          category_id: 13,
          country_id: 230,
          state: "New York",
          city: "Garden City",
          street_address: "street 2 garden city",
          postal_code: "10822",
          date_of_birth: "2022-10-05",
          gender: "male",
          maritial_status: "single",
          nationality: null,
          id_no: "3902839283776",
          preview_image: template_1,
          created_at: "2024-05-23T11:20:43.000000Z",
          updated_at: "2024-11-01T10:56:12.000000Z",
          deleted_at: null,
          template: {
            id: 3,
            name: "Elegant Executive",
            is_paid: 0,
          },
          job_positions: [
            {
              id: 54,
              name: "Junior Civil Engineer",
              pivot: {
                resume_example_id: 84,
                job_position_id: 54,
              },
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Simple",
      short_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer metus felis, interdum blandit aliquet id, egestas ac ante. Curabitur ullamcorper vehicula nisi non malesuada.",
      cover_letter_description: null,
      parent_id: 2,
      top: 1,
      icon: "categories.svg",
      resume_examples: [
        {
          id: 83,
          resume_name: "Industrial Engineer",
          first_name: "Mark",
          middle_name: "D. Henderson",
          last_name: "Henderson",
          email_address: "mark.henderson@email.com",
          job_title: "example",
          phone_number: "03115645434",
          contact_number: "04653242531",
          template_id: 3,
          category_id: 13,
          country_id: 20,
          state: "Homjel'",
          city: "Rahachow",
          street_address: "675 street Ld Avenue",
          postal_code: "1445",
          date_of_birth: "2022-10-05",
          gender: "male",
          maritial_status: "single",
          nationality: null,
          id_no: "7656342648790",
          preview_image: template_1,
          created_at: "2024-05-23T10:48:32.000000Z",
          updated_at: "2024-11-01T10:56:28.000000Z",
          deleted_at: null,
          template: {
            id: 3,
            name: "Elegant Executive",
            is_paid: 0,
          },
          job_positions: [
            {
              id: 53,
              name: "Civil Engineer",
              pivot: {
                resume_example_id: 83,
                job_position_id: 53,
              },
            },
          ],
        },
        {
          id: 84,
          resume_name: "Geotechnical Engineer",
          first_name: "Michael J. Anderson",
          middle_name: "J.",
          last_name: "Anderson",
          email_address: "michael.anderson@email.com",
          job_title: "example",
          phone_number: "0882693923",
          contact_number: "03729202327",
          template_id: 3,
          category_id: 13,
          country_id: 230,
          state: "New York",
          city: "Garden City",
          street_address: "street 2 garden city",
          postal_code: "10822",
          date_of_birth: "2022-10-05",
          gender: "male",
          maritial_status: "single",
          nationality: null,
          id_no: "3902839283776",
          preview_image: template_1,
          created_at: "2024-05-23T11:20:43.000000Z",
          updated_at: "2024-11-01T10:56:12.000000Z",
          deleted_at: null,
          template: {
            id: 3,
            name: "Elegant Executive",
            is_paid: 0,
          },
          job_positions: [
            {
              id: 54,
              name: "Junior Civil Engineer",
              pivot: {
                resume_example_id: 84,
                job_position_id: 54,
              },
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Modern",
      short_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer metus felis, interdum blandit aliquet id, egestas ac ante. Curabitur ullamcorper vehicula nisi non malesuada.",
      cover_letter_description: null,
      parent_id: 2,
      top: 1,
      icon: "categories.svg",
      resume_examples: [
        {
          id: 83,
          resume_name: "Industrial Engineer",
          first_name: "Mark",
          middle_name: "D. Henderson",
          last_name: "Henderson",
          email_address: "mark.henderson@email.com",
          job_title: "example",
          phone_number: "03115645434",
          contact_number: "04653242531",
          template_id: 3,
          category_id: 13,
          country_id: 20,
          state: "Homjel'",
          city: "Rahachow",
          street_address: "675 street Ld Avenue",
          postal_code: "1445",
          date_of_birth: "2022-10-05",
          gender: "male",
          maritial_status: "single",
          nationality: null,
          id_no: "7656342648790",
          preview_image: template_1,
          created_at: "2024-05-23T10:48:32.000000Z",
          updated_at: "2024-11-01T10:56:28.000000Z",
          deleted_at: null,
          template: {
            id: 3,
            name: "Elegant Executive",
            is_paid: 0,
          },
          job_positions: [
            {
              id: 53,
              name: "Civil Engineer",
              pivot: {
                resume_example_id: 83,
                job_position_id: 53,
              },
            },
          ],
        },
        {
          id: 84,
          resume_name: "Geotechnical Engineer",
          first_name: "Michael J. Anderson",
          middle_name: "J.",
          last_name: "Anderson",
          email_address: "michael.anderson@email.com",
          job_title: "example",
          phone_number: "0882693923",
          contact_number: "03729202327",
          template_id: 3,
          category_id: 13,
          country_id: 230,
          state: "New York",
          city: "Garden City",
          street_address: "street 2 garden city",
          postal_code: "10822",
          date_of_birth: "2022-10-05",
          gender: "male",
          maritial_status: "single",
          nationality: null,
          id_no: "3902839283776",
          preview_image: template_1,
          created_at: "2024-05-23T11:20:43.000000Z",
          updated_at: "2024-11-01T10:56:12.000000Z",
          deleted_at: null,
          template: {
            id: 3,
            name: "Elegant Executive",
            is_paid: 0,
          },
          job_positions: [
            {
              id: 54,
              name: "Junior Civil Engineer",
              pivot: {
                resume_example_id: 84,
                job_position_id: 54,
              },
            },
          ],
        },
        {
          id: 83,
          resume_name: "Industrial Engineer",
          first_name: "Mark",
          middle_name: "D. Henderson",
          last_name: "Henderson",
          email_address: "mark.henderson@email.com",
          job_title: "example",
          phone_number: "03115645434",
          contact_number: "04653242531",
          template_id: 3,
          category_id: 13,
          country_id: 20,
          state: "Homjel'",
          city: "Rahachow",
          street_address: "675 street Ld Avenue",
          postal_code: "1445",
          date_of_birth: "2022-10-05",
          gender: "male",
          maritial_status: "single",
          nationality: null,
          id_no: "7656342648790",
          preview_image: template_1,
          created_at: "2024-05-23T10:48:32.000000Z",
          updated_at: "2024-11-01T10:56:28.000000Z",
          deleted_at: null,
          template: {
            id: 3,
            name: "Elegant Executive",
            is_paid: 0,
          },
          job_positions: [
            {
              id: 53,
              name: "Civil Engineer",
              pivot: {
                resume_example_id: 83,
                job_position_id: 53,
              },
            },
          ],
        },
        {
          id: 84,
          resume_name: "Geotechnical Engineer",
          first_name: "Michael J. Anderson",
          middle_name: "J.",
          last_name: "Anderson",
          email_address: "michael.anderson@email.com",
          job_title: "example",
          phone_number: "0882693923",
          contact_number: "03729202327",
          template_id: 3,
          category_id: 13,
          country_id: 230,
          state: "New York",
          city: "Garden City",
          street_address: "street 2 garden city",
          postal_code: "10822",
          date_of_birth: "2022-10-05",
          gender: "male",
          maritial_status: "single",
          nationality: null,
          id_no: "3902839283776",
          preview_image: template_1,
          created_at: "2024-05-23T11:20:43.000000Z",
          updated_at: "2024-11-01T10:56:12.000000Z",
          deleted_at: null,
          template: {
            id: 3,
            name: "Elegant Executive",
            is_paid: 0,
          },
          job_positions: [
            {
              id: 54,
              name: "Junior Civil Engineer",
              pivot: {
                resume_example_id: 84,
                job_position_id: 54,
              },
            },
          ],
        },
      ],
    },
    {
      id: 8,
      name: "Accounting & Finance",
      short_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer metus felis, interdum blandit aliquet id, egestas ac ante. Curabitur ullamcorper vehicula nisi non malesuada.",
      cover_letter_description: null,
      parent_id: 2,
      top: 1,
      icon: "categories.svg",
      resume_examples: [
        {
          id: 83,
          resume_name: "Industrial Engineer",
          first_name: "Mark",
          middle_name: "D. Henderson",
          last_name: "Henderson",
          email_address: "mark.henderson@email.com",
          job_title: "example",
          phone_number: "03115645434",
          contact_number: "04653242531",
          template_id: 3,
          category_id: 13,
          country_id: 20,
          state: "Homjel'",
          city: "Rahachow",
          street_address: "675 street Ld Avenue",
          postal_code: "1445",
          date_of_birth: "2022-10-05",
          gender: "male",
          maritial_status: "single",
          nationality: null,
          id_no: "7656342648790",
          preview_image: template_1,
          created_at: "2024-05-23T10:48:32.000000Z",
          updated_at: "2024-11-01T10:56:28.000000Z",
          deleted_at: null,
          template: {
            id: 3,
            name: "Elegant Executive",
            is_paid: 0,
          },
          job_positions: [
            {
              id: 53,
              name: "Civil Engineer",
              pivot: {
                resume_example_id: 83,
                job_position_id: 53,
              },
            },
          ],
        },
        {
          id: 84,
          resume_name: "Geotechnical Engineer",
          first_name: "Michael J. Anderson",
          middle_name: "J.",
          last_name: "Anderson",
          email_address: "michael.anderson@email.com",
          job_title: "example",
          phone_number: "0882693923",
          contact_number: "03729202327",
          template_id: 3,
          category_id: 13,
          country_id: 230,
          state: "New York",
          city: "Garden City",
          street_address: "street 2 garden city",
          postal_code: "10822",
          date_of_birth: "2022-10-05",
          gender: "male",
          maritial_status: "single",
          nationality: null,
          id_no: "3902839283776",
          preview_image: template_1,
          created_at: "2024-05-23T11:20:43.000000Z",
          updated_at: "2024-11-01T10:56:12.000000Z",
          deleted_at: null,
          template: {
            id: 3,
            name: "Elegant Executive",
            is_paid: 0,
          },
          job_positions: [
            {
              id: 54,
              name: "Junior Civil Engineer",
              pivot: {
                resume_example_id: 84,
                job_position_id: 54,
              },
            },
          ],
        },
        {
          id: 83,
          resume_name: "Industrial Engineer",
          first_name: "Mark",
          middle_name: "D. Henderson",
          last_name: "Henderson",
          email_address: "mark.henderson@email.com",
          job_title: "example",
          phone_number: "03115645434",
          contact_number: "04653242531",
          template_id: 3,
          category_id: 13,
          country_id: 20,
          state: "Homjel'",
          city: "Rahachow",
          street_address: "675 street Ld Avenue",
          postal_code: "1445",
          date_of_birth: "2022-10-05",
          gender: "male",
          maritial_status: "single",
          nationality: null,
          id_no: "7656342648790",
          preview_image: template_1,
          created_at: "2024-05-23T10:48:32.000000Z",
          updated_at: "2024-11-01T10:56:28.000000Z",
          deleted_at: null,
          template: {
            id: 3,
            name: "Elegant Executive",
            is_paid: 0,
          },
          job_positions: [
            {
              id: 53,
              name: "Civil Engineer",
              pivot: {
                resume_example_id: 83,
                job_position_id: 53,
              },
            },
          ],
        },
        {
          id: 84,
          resume_name: "Geotechnical Engineer",
          first_name: "Michael J. Anderson",
          middle_name: "J.",
          last_name: "Anderson",
          email_address: "michael.anderson@email.com",
          job_title: "example",
          phone_number: "0882693923",
          contact_number: "03729202327",
          template_id: 3,
          category_id: 13,
          country_id: 230,
          state: "New York",
          city: "Garden City",
          street_address: "street 2 garden city",
          postal_code: "10822",
          date_of_birth: "2022-10-05",
          gender: "male",
          maritial_status: "single",
          nationality: null,
          id_no: "3902839283776",
          preview_image: template_1,
          created_at: "2024-05-23T11:20:43.000000Z",
          updated_at: "2024-11-01T10:56:12.000000Z",
          deleted_at: null,
          template: {
            id: 3,
            name: "Elegant Executive",
            is_paid: 0,
          },
          job_positions: [
            {
              id: 54,
              name: "Junior Civil Engineer",
              pivot: {
                resume_example_id: 84,
                job_position_id: 54,
              },
            },
          ],
        },
      ],
    },
    {
      id: 9,
      name: "Construction",
      short_description:
        "<p>Are you looking to land a job in the construction industry? We have covered you with the best cover letter examples to help you stand out. Our AI-powered cover letter examples for job applications are designed to shine your experience, whether you are just starting out or already have some hands-on experience. Use our example cover letter to display your skills and passion for the job. Explore our good cover letter examples to get the best one that suits your role and industry.</p>",
      cover_letter_description:
        "<p>Are you looking to land a job in the construction industry? We have covered you with the <strong>best cover letter</strong> examples to help you stand out. Our AI-powered <strong>cover letter examples</strong> for job applications are designed to shine your experience, whether you are just starting out or already have some hands-on experience. Use our <strong>example cover letter</strong> to display your skills and passion for the job. Explore our <strong>good cover letter examples </strong>to get the best one that suits your role and industry.</p>",
      parent_id: 2,
      top: 1,
      icon: "categories.svg",
      resume_examples: [
        {
          id: 83,
          resume_name: "Industrial Engineer",
          first_name: "Mark",
          middle_name: "D. Henderson",
          last_name: "Henderson",
          email_address: "mark.henderson@email.com",
          job_title: "example",
          phone_number: "03115645434",
          contact_number: "04653242531",
          template_id: 3,
          category_id: 13,
          country_id: 20,
          state: "Homjel'",
          city: "Rahachow",
          street_address: "675 street Ld Avenue",
          postal_code: "1445",
          date_of_birth: "2022-10-05",
          gender: "male",
          maritial_status: "single",
          nationality: null,
          id_no: "7656342648790",
          preview_image: template_1,
          created_at: "2024-05-23T10:48:32.000000Z",
          updated_at: "2024-11-01T10:56:28.000000Z",
          deleted_at: null,
          template: {
            id: 3,
            name: "Elegant Executive",
            is_paid: 0,
          },
          job_positions: [
            {
              id: 53,
              name: "Civil Engineer",
              pivot: {
                resume_example_id: 83,
                job_position_id: 53,
              },
            },
          ],
        },
        {
          id: 84,
          resume_name: "Geotechnical Engineer",
          first_name: "Michael J. Anderson",
          middle_name: "J.",
          last_name: "Anderson",
          email_address: "michael.anderson@email.com",
          job_title: "example",
          phone_number: "0882693923",
          contact_number: "03729202327",
          template_id: 3,
          category_id: 13,
          country_id: 230,
          state: "New York",
          city: "Garden City",
          street_address: "street 2 garden city",
          postal_code: "10822",
          date_of_birth: "2022-10-05",
          gender: "male",
          maritial_status: "single",
          nationality: null,
          id_no: "3902839283776",
          preview_image: template_1,
          created_at: "2024-05-23T11:20:43.000000Z",
          updated_at: "2024-11-01T10:56:12.000000Z",
          deleted_at: null,
          template: {
            id: 3,
            name: "Elegant Executive",
            is_paid: 0,
          },
          job_positions: [
            {
              id: 54,
              name: "Junior Civil Engineer",
              pivot: {
                resume_example_id: 84,
                job_position_id: 54,
              },
            },
          ],
        },
        {
          id: 83,
          resume_name: "Industrial Engineer",
          first_name: "Mark",
          middle_name: "D. Henderson",
          last_name: "Henderson",
          email_address: "mark.henderson@email.com",
          job_title: "example",
          phone_number: "03115645434",
          contact_number: "04653242531",
          template_id: 3,
          category_id: 13,
          country_id: 20,
          state: "Homjel'",
          city: "Rahachow",
          street_address: "675 street Ld Avenue",
          postal_code: "1445",
          date_of_birth: "2022-10-05",
          gender: "male",
          maritial_status: "single",
          nationality: null,
          id_no: "7656342648790",
          preview_image: template_1,
          created_at: "2024-05-23T10:48:32.000000Z",
          updated_at: "2024-11-01T10:56:28.000000Z",
          deleted_at: null,
          template: {
            id: 3,
            name: "Elegant Executive",
            is_paid: 0,
          },
          job_positions: [
            {
              id: 53,
              name: "Civil Engineer",
              pivot: {
                resume_example_id: 83,
                job_position_id: 53,
              },
            },
          ],
        },
        {
          id: 84,
          resume_name: "Geotechnical Engineer",
          first_name: "Michael J. Anderson",
          middle_name: "J.",
          last_name: "Anderson",
          email_address: "michael.anderson@email.com",
          job_title: "example",
          phone_number: "0882693923",
          contact_number: "03729202327",
          template_id: 3,
          category_id: 13,
          country_id: 230,
          state: "New York",
          city: "Garden City",
          street_address: "street 2 garden city",
          postal_code: "10822",
          date_of_birth: "2022-10-05",
          gender: "male",
          maritial_status: "single",
          nationality: null,
          id_no: "3902839283776",
          preview_image: template_1,
          created_at: "2024-05-23T11:20:43.000000Z",
          updated_at: "2024-11-01T10:56:12.000000Z",
          deleted_at: null,
          template: {
            id: 3,
            name: "Elegant Executive",
            is_paid: 0,
          },
          job_positions: [
            {
              id: 54,
              name: "Junior Civil Engineer",
              pivot: {
                resume_example_id: 84,
                job_position_id: 54,
              },
            },
          ],
        },
      ],
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
      resume_examples: [
        {
          id: 30,
          resume_name: "HR Generalist",
          first_name: "Oliver",
          middle_name: "null",
          last_name: "Walker",
          email_address: "Olivwalker@example.com",
          job_title: "example",
          phone_number: "15853042943",
          contact_number: "+15853042943",
          template_id: 3,
          category_id: 23,
          country_id: 230,
          state: "California",
          city: "Los Angeles",
          street_address:
            "789 Innovation Lane New York, NY 10032, United States",
          postal_code: "10032",
          date_of_birth: "1992-05-04",
          gender: "male",
          maritial_status: "single",
          nationality: null,
          id_no: "78676552",
          preview_image: template_1,
          created_at: "2024-03-06T12:15:13.000000Z",
          updated_at: "2024-11-01T11:08:58.000000Z",
          deleted_at: null,
          template: {
            id: 3,
            name: "Elegant Executive",
            is_paid: 0,
          },
          job_positions: [
            {
              id: 24,
              name: "Healthcare Operations Research Analyst",
              pivot: {
                resume_example_id: 30,
                job_position_id: 24,
              },
            },
          ],
        },
      ],
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
      resume_examples: [
        {
          id: 24,
          resume_name: "Project Manager",
          first_name: "Noah",
          middle_name: "null",
          last_name: "Davis",
          email_address: "Davis123@example.com",
          job_title: "example",
          phone_number: "14245351294",
          contact_number: "+14245351294",
          template_id: 10,
          category_id: 43,
          country_id: 230,
          state: "California",
          city: "Los Angeles",
          street_address: "70 Glenridge Dr. Los Angeles, CA 90037",
          postal_code: "90037",
          date_of_birth: "1992-09-23",
          gender: "male",
          maritial_status: "single",
          nationality: null,
          id_no: "56442892",
          preview_image: template_1,
          created_at: "2024-03-06T01:42:58.000000Z",
          updated_at: "2024-11-01T11:10:26.000000Z",
          deleted_at: null,
          template: {
            id: 10,
            name: "Fresher Resume",
            is_paid: 1,
          },
          job_positions: [],
        },
        {
          id: 22,
          resume_name: "Customer Service Representative",
          first_name: "Jackson",
          middle_name: "null",
          last_name: "Scott",
          email_address: "jackscott@example.com",
          job_title: "example",
          phone_number: "13239164670",
          contact_number: "+13239164670",
          template_id: 7,
          category_id: 43,
          country_id: 230,
          state: "California",
          city: "Los Angeles",
          street_address: "857 Madison Ave. Los Angeles, CA 90001",
          postal_code: "90001",
          date_of_birth: "1991-12-05",
          gender: "male",
          maritial_status: "single",
          nationality: null,
          id_no: "43537854",
          preview_image: template_1,
          created_at: "2024-03-06T01:22:19.000000Z",
          updated_at: "2024-11-01T11:12:03.000000Z",
          deleted_at: null,
          template: {
            id: 7,
            name: "Innovative Edge",
            is_paid: 1,
          },
          job_positions: [
            {
              id: 30,
              name: "Geotechnical Engineer",
              pivot: {
                resume_example_id: 22,
                job_position_id: 30,
              },
            },
          ],
        },
      ],
    },
  ]);

  const [showAllCategories, setShowAllCategories] = useState<any>(false);

  const [templates, set_templates] = useState<any[]>([]);
  const [selectedCatName, setSelectedCatName] = useState<any>("");
  const [selectedCatDesc, setSelectedCatDesc] = useState<any>("");

  const toggleCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  const chk_temp = (cat_id: number, cat_name: string, cat_des: string) => {
    setIsfilter(true);

    // Using static templates (replace this with your actual data)
    const resumeExamples = [
      { id: 1, name: "Resume 1", category_id: cat_id },
      { id: 2, name: "Resume 2", category_id: cat_id },
    ];

    // set_templates(top_categories.resume_examples);
    setSelectedCatName(cat_name);
    setSelectedCatDesc(cat_des);
  };

  return (
    <>
      <div className="flex justify-start items-start flex-wrap px-4 lg:px-16 xl:px-20 2xl:px-40">
        <div className="w-[100%] lg:w-[25%] 2xl:w-[30%] mb-10">
          <div className="border border-[#00caa5] rounded-lg shadow-[0px_0px_20px_0px_rgba(0,0,0,0.2)]">
            <h1 className="font-Lexend text-2xl py-4 px-4 text-[#0072b1]">
              Categories
            </h1>
            <hr className="border-t border-[#00caa5]" />
            {categories
              ?.sort((a, b) => a.name.localeCompare(b.name))
              .map((category, index) => (
                <div
                  key={index}
                  id={category.id}
                  onClick={() => {
                    chk_temp(
                      category.id,
                      category.name,
                      category.short_description
                    );
                  }}
                  className={`flex gap-2 font-Lexend justify-start items-center p-2 text-slate-900 cursor-pointer  hover:text-[#0072b1] my-2 ${
                    !showAllCategories && index >= 3 ? "hidden md:flex" : ""
                  }`}
                >
                  {/* <img
                    src={global.imageUrl + category.icon}
                    className="w-4"
                    alt={category.icon}
                  /> */}
                  <p className="font-Lexend text-lg pl-2">{category.name}</p>
                </div>
              ))}
            {categories.length > 3 && (
              <div className="md:hidden">
                <div
                  onClick={toggleCategories}
                  className="flex justify-start items-center p-2 text-slate-900 cursor-pointer hover:text-[#0072b1] hover:bg-white rounded-2xl hover:shadow-[0px_10px_20px_0px_rgba(0,0,0,0.3)] my-2"
                >
                  <p className="font_1 text-lg pl-2 text-[#0072b1]">
                    {showAllCategories ? "Show Less" : "Show More"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-[100%] lg:w-[75%] 2xl:w-[70%]">
          {!isfilter ? (
            top_categories?.map((top_categories, index) => {
              if (top_categories.resume_examples.length === 0) return;
              const settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow:
                  top_categories.resume_examples.length < 4
                    ? top_categories.resume_examples.length
                    : 3,
                slidesToScroll: 1,
                arrows: false, // Hide navigation arrows
                autoplay: true, // Enable auto sliding
                autoplaySpeed: 2000,
                responsive: [
                  {
                    breakpoint: 1300,
                    settings: {
                      slidesToShow:
                        top_categories.resume_examples.length < 4
                          ? top_categories.resume_examples.length
                          : 3,
                    },
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

              return (
                <div key={index}>
                  <div className="flex justify-between items-center flex-wrap ">
                    <div className="px-2 lg:px-8">
                      <h1 className="font-Lexend text-md lg:text-2xl text-[#0072b1]">
                        {top_categories.name}
                      </h1>
                    </div>

                    <div className="flex justify-end items-center">
                      <div className="border-2 border-[#0072b1] hover:border-[#00caa5] text-[#0072b1] hover:text-[#00caa5] rounded-full p-1 transition-all duration-200 cursor-pointer">
                        <BiLeftArrowAlt
                          size={25}
                          className="custom-arrow prev-arrow"
                          // onClick={() => sliderRefs.current[index].slickPrev()}
                        />
                      </div>

                      <div className="ml-4 border-2 border-[#0072b1] hover:border-[#00caa5] text-[#0072b1] hover:text-[#00caa5] rounded-full p-1 transition-all duration-200 cursor-pointer">
                        <BiRightArrowAlt
                          size={25}
                          className="custom-arrow prev-arrow"
                          // onClick={() => sliderRefs.current[index].slickNext()}
                        />
                      </div>
                    </div>
                  </div>
                  {top_categories.resume_examples.length < 4 ? (
                    <div className="flex justify-start items-start flex-wrap ">
                      {top_categories.resume_examples?.map(
                        (template: any, idx: any) => {
                          return (
                            <div
                              key={idx}
                              className="w-full sm:w-[50%] md:w-[33%] "
                            >
                              <div
                                className="dd_btn4 flex justify-normal items-start px-6 py-8 lg:p-2 text-slate-600 cursor-pointer flex-wrap mt-2 "
                                id={"bborder_box3_" + template.id + idx}
                              >
                                <div className="cl_hover2 lg:m-4  ">
                                  <div className="relative">
                                    <div
                                      className=" w-6 h-6  right-4 top-4 rounded-full flex items-center justify-center absolute z-50"
                                      // onClick={() => openTemplatesModal(idx)}
                                    >
                                      {/* <img src={search_symbol} /> */}
                                    </div>
                                    {template.template.is_paid === 1 && (
                                      <div
                                        className="flex bg-gradient-to-r from-[#01B2AC] to-[#0072B1] w-[150px] h-8 absolute left-[-35px] top-6 text-white -rotate-45 justify-center items-center z-50"
                                        style={{
                                          clipPath:
                                            "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
                                        }}
                                      >
                                        <Image
                                          src={premium}
                                          alt="premium icon"
                                        />
                                        <span>Premium</span>
                                      </div>
                                    )}
                                    <div
                                      className="relative bborder_box"
                                      id={"bborder_box_" + template.id + idx}
                                    >
                                      <div
                                        className="absolute border border-solid border-[#01B2AC] rounded-xl w-full h-full z-10"
                                        id={"bborder_box2_" + template.id + idx}
                                      ></div>
                                      <Image
                                        src={template.preview_image}
                                        width={300}
                                        height={300}
                                        alt="My Image"
                                        className="shadow-[0px_0px_3px_3px_rgba(0,0,0,0.3)] rounded-xl w-full z-20 relative"
                                      />
                                    </div>
                                    <div
                                      className="dd_menu4 rounded-xl z-30 absolute top-0 left-0 w-full h-[94%] justify-evenly items-end p-2 "
                                      // onClick={() =>
                                      //   NavigateToSteps(
                                      //     template.id,
                                      //     template.template_id,
                                      //     template.template.is_paid
                                      //   )
                                      // }
                                    >
                                      <div className="absolute box2 shadow-lg rounded-lg py-2 cursor-pointer JosefinSans text-sm bg-[#01B2AC] hover:bg-[#0072b1] text-white w-[60%] flex justify-center items-center flex-wrap">
                                        Use This Example
                                      </div>
                                    </div>
                                    <p className="cl_inner2 duration-300 transition-all Montserrat text-md text-black text-center mt-4 max-w-[160px] truncate mx-auto">
                                      {template.resume_name}
                                    </p>
                                    <span className="mt-2">
                                      {template?.job_positions.map(
                                        (position: any, posIdx: any) => (
                                          <div
                                            key={posIdx}
                                            className="bg-[#0072b1] flex items-center justify-center text-white text-xs font-semibold px-4 py-1 rounded mt-2"
                                          >
                                            <span className="max-w-[160px] truncate mx-auto">
                                              {position.name}
                                            </span>
                                          </div>
                                        )
                                      )}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  ) : (
                    <Slider
                      {...settings}
                      // ref={(el) => (sliderRefs.current[index] = el)}
                    >
                      {top_categories.resume_examples?.map(
                        (template: any, idx: any) => {
                          return (
                            <div key={idx}>
                              <div
                                className="dd_btn4 flex justify-normal items-start px-6 py-8 lg:p-2 text-slate-600 cursor-pointer flex-wrap mt-2 "
                                id={"border_box3_" + idx}
                              >
                                <div className="cl_hover2 w-max lg:m-4">
                                  <div className="relative">
                                    <div
                                      className=" w-6 h-6  right-4 top-4 rounded-full flex items-center justify-center absolute z-50"
                                      // onClick={() => openTemplatesModal(idx)}
                                    >
                                      {/* <img src={search_symbol} /> */}
                                    </div>
                                    {template.template.is_paid === 1 && (
                                      <div
                                        className="flex bg-gradient-to-r from-[#01B2AC] to-[#0072B1] w-[150px] h-8 absolute left-[-35px] top-6 text-white -rotate-45 justify-center items-center z-50"
                                        style={{
                                          clipPath:
                                            "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
                                        }}
                                      >
                                        <Image
                                          src={premium}
                                          alt="premium icon"
                                        />
                                        <span>Premium</span>
                                      </div>
                                    )}
                                    <div
                                      className="relative border_box"
                                      id={"border_box_" + idx}
                                    >
                                      <div
                                        className="absolute border border-solid border-[#01B2AC] rounded-xl w-full h-full z-10"
                                        id={"border_box2_" + idx}
                                      ></div>
                                      <Image
                                        src={template.preview_image}
                                        width={300}
                                        height={300}
                                        alt="My Image"
                                        className="shadow-[0px_0px_3px_3px_rgba(0,0,0,0.3)] rounded-xl w-full z-20 relative"
                                      />
                                    </div>
                                    <div
                                      className="dd_menu4 rounded-xl z-30 absolute top-0 left-0 w-full h-[94%] justify-evenly items-end p-2 "
                                      // onClick={() =>
                                      //   NavigateToSteps(
                                      //     template.id,
                                      //     template.template_id,
                                      //     template.template.is_paid
                                      //   )
                                      // }
                                    >
                                      <div className="absolute box2 shadow-lg rounded-lg py-2 cursor-pointer JosefinSans text-sm bg-[#01B2AC] hover:bg-[#0072b1] text-white w-[60%] flex justify-center items-center flex-wrap">
                                        Use This Example
                                      </div>
                                    </div>
                                    <p className="cl_inner2 duration-300 transition-all Montserrat text-md text-black text-center mt-4 max-w-[160px] truncate mx-auto">
                                      {template.resume_name}
                                    </p>
                                    {template?.job_positions.map(
                                      (position: any, posIdx: any) => (
                                        <div
                                          key={posIdx}
                                          className="bg-[#0072b1] text-white flex items-center justify-center text-xs font-semibold px-4 py-1 rounded mt-2"
                                        >
                                          <span className="max-w-[160px] truncate mx-auto">
                                            {position.name}
                                          </span>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </Slider>
                  )}

                  <br />
                  <br />
                  {/* {isModalOpen && (
                  <TemplatesSlider
                    open={isModalOpen}
                    onClose={closeTemplatesModal}
                    templates={top_categories.resume_examples}
                    initialIndex={initialIndex}
                  />
                )} */}
                </div>
              );
            })
          ) : (
            <div className="flex flex-col gap-4 mt-4 ">
              <div className="px-10">
                <h1 className="font-Lexend text-2xl text-[#0072b1]">
                  {selectedCatName}
                </h1>
              </div>
              <hr />
              <div className="px-10">
                <p className="font-Lexend text-lg pl-2">{selectedCatDesc}</p>
              </div>
              <div
                className={`${
                  templates?.length === 0
                    ? ""
                    : "grid sm:grid-cols-3 gap-4 px-4 border-4"
                } `}
              >
                {templates?.length !== 0 ? (
                  templates?.map((template: any, idx: any) => {
                    return (
                      <div key={idx} className="w-full">
                        <div
                          className="dd_btn4 flex justify-normal items-start text-slate-600 cursor-pointer flex-wrap mt-10"
                          id={"border_box3_" + idx}
                        >
                          <div className="lg:m-4">
                            <div className="relative">
                              <div
                                className=" w-6 h-6  right-4 top-4 rounded-full flex items-center justify-center absolute z-50"
                                //   onClick={() => openTemplatesModal(idx)}
                              >
                                {/* <img src={search_symbol} /> */}
                              </div>
                              {template?.template.is_paid === 1 && (
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
                              )}
                              <div
                                className="relative border_box"
                                id={"border_box_" + idx}
                              >
                                <div
                                  className="absolute border border-solid border-[#01B2AC] rounded-xl w-full h-full z-10"
                                  id={"border_box2_" + idx}
                                ></div>
                                <Image
                                  src={template.preview_image}
                                  width={300}
                                  height={300}
                                  alt="My Image"
                                  className="shadow-[0px_0px_3px_3px_rgba(0,0,0,0.3)] rounded-xl w-full z-20 relative min-h-[300px]"
                                />
                              </div>
                              <div
                                className="dd_menu4 rounded-xl z-30 absolute top-0 left-0 w-full h-[94%] justify-evenly items-end p-2 "
                                //   onClick={() =>
                                //     NavigateToSteps(
                                //       template.id,
                                //       template.template_id
                                //     )
                                //   }
                              >
                                <div className="absolute box2 shadow-lg rounded-lg py-2 cursor-pointer JosefinSans text-sm bg-[#01B2AC] hover:bg-[#0072b1] text-white w-[60%] flex justify-center items-center flex-wrap">
                                  Use This Example
                                </div>
                              </div>
                              <p className="cl_inner2 duration-300 transition-all Montserrat text-md text-black text-center mt-4 max-w-[160px] truncate mx-auto">
                                {template?.resume_name}
                              </p>
                              {template?.job_positions.map(
                                (position: any, posIdx: any) => (
                                  <div
                                    key={posIdx}
                                    className="bg-[#0072b1] text-white flex items-center justify-center text-xs font-semibold px-4 py-1 rounded mt-2"
                                  >
                                    <span className="max-w-[160px] truncate mx-auto">
                                      {position.name}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <h1 className="my-2 text-xl font-bold px-6">No results</h1>
                )}
                {/* {isModalOpen && (
                <TemplatesSlider
                  open={isModalOpen}
                  onClose={closeTemplatesModal}
                  templates={templates}
                  initialIndex={initialIndex}
                />
              )} */}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Categories;
