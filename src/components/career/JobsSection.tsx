"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiSolidChevronsRight } from "react-icons/bi";

type Job = {
  id: number;
  name: string;
  slug: string;
  short_description: string;
  updated_at: string;
};

const JobsSection = () => {
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const user = { token: "jkdkw2jgdw2kjdgw2kdg " }; // Dummy user state for testing

  useEffect(() => {
    // Dummy job data for UI testing
    const dummyJobs: Job[] = [
      {
        id: 1,
        name: "Software Engineer",
        slug: "software-engineer",
        short_description:
          "We are looking for a talented software engineer to join our team.",
        updated_at: "2024-02-20T10:00:00Z",
      },
      {
        id: 2,
        name: "Product Manager",
        slug: "product-manager",
        short_description:
          "Join our team as a product manager and shape the future of our products.",
        updated_at: "2024-02-18T15:30:00Z",
      },
      {
        id: 3,
        name: "UX Designer",
        slug: "ux-designer",
        short_description:
          "Seeking a creative UX designer to enhance user experiences.",
        updated_at: "2024-02-17T12:00:00Z",
      },
      {
        id: 4,
        name: "Data Scientist",
        slug: "data-scientist",
        short_description:
          "Analyze data and build AI models to drive business decisions.",
        updated_at: "2024-02-16T09:45:00Z",
      },
      {
        id: 5,
        name: "Marketing Specialist",
        slug: "marketing-specialist",
        short_description:
          "Develop and execute marketing campaigns for brand growth.",
        updated_at: "2024-02-15T14:20:00Z",
      },
      {
        id: 6,
        name: "DevOps Engineer",
        slug: "devops-engineer",
        short_description:
          "Manage and optimize cloud infrastructure for scalable applications.",
        updated_at: "2024-02-14T11:30:00Z",
      },
      {
        id: 7,
        name: "HR Manager",
        slug: "hr-manager",
        short_description:
          "Oversee hiring, employee relations, and HR policies.",
        updated_at: "2024-02-13T08:15:00Z",
      },
      {
        id: 8,
        name: "Cybersecurity Analyst",
        slug: "cybersecurity-analyst",
        short_description:
          "Protect company data and ensure security compliance.",
        updated_at: "2024-02-12T17:50:00Z",
      },
      {
        id: 9,
        name: "Sales Executive",
        slug: "sales-executive",
        short_description:
          "Drive sales growth and build strong client relationships.",
        updated_at: "2024-02-11T16:40:00Z",
      },
    ];
    setAllJobs(dummyJobs);
  }, []);

  return (
    <>
      <div className="w-full flex flex-col items-center text-center">
        <div className="w-full lg:w-[70%] my-3">
          <h1 className="text-[#0072b1] font-bold text-lg lg:text-4xl sm:text-2xl leading-[1.5]">
            Revitalize Your
            <span className="text-[#00caa5]">
              {" "}
              Career Journey, Discover
            </span>{" "}
            Fulfilling Prospects with AI Pro Resume
          </h1>
        </div>

        <div className="mt-6 container">
          <h3 className="text-[#0072b1] text-center text-lg sm:text-2xl">
            Apply For
          </h3>
          <div className="flex justify-center items-center flex-wrap">
            {allJobs.map((job) => {
              const date = new Date(job.updated_at);
              const fullDate = `${date.getUTCDate()} ${date.toLocaleString(
                "default",
                {
                  month: "short",
                }
              )} ${date.getUTCFullYear()}`;

              return (
                <div
                  key={job.id}
                  className="m-6 w-full lg:w-[44%] 2xl:w-[29%] bg-gradient-to-t from-[#009fb1] to-[#13b6b5] p-1 rounded-2xl"
                >
                  <div className="bg-white p-4 rounded-2xl shadow-md h-auto">
                    <div className="flex flex-col gap-3 justify-between h-full">
                      <div className="flex flex-col gap-2">
                        <h1 className="text-slate-700 text-lg sm:text-2xl font-semibold text-center">
                          <Link
                            href={`/job_detail/${job.slug}`}
                            className="text-[#13b6b5] hover:text-[#0072b1]"
                          >
                            {job.name}
                          </Link>
                        </h1>
                        <p className="text-slate-700 text-sm sm:text-md text-center">
                          {job.short_description
                            .split(" ")
                            .slice(0, 15)
                            .join(" ") + "..."}
                        </p>
                      </div>
                      <div className="w-full flex justify-between items-center py-2">
                        <div className="bg-[#0072b1] text-white font-semibold px-4 py-1 rounded-full text-xs sm:text-sm">
                          {fullDate}
                        </div>
                        {user.token ? (
                          <Link
                            href={`/apply-now/${job.id}`}
                            className="flex items-center text-[#0072b1] hover:text-[#13b6b5]"
                          >
                            <BiSolidChevronsRight size={25} />
                            <span className="text-xs font-bold ml-2">
                              Apply
                            </span>
                          </Link>
                        ) : (
                          <Link
                            href="/login"
                            className="flex items-center text-[#0072b1] hover:text-[#13b6b5]"
                          >
                            <BiSolidChevronsRight size={25} />
                            <span className="text-xs font-bold ml-2">
                              Login to Apply
                            </span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsSection;
