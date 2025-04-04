import React from 'react'
import { FaCalendar, FaLock } from 'react-icons/fa'

const Experience = ({ lock }: { lock: boolean }) => {

  const ExperienceList = [
    {
      name: "Software Engineering",
      details: ["But I must explain to you how all this mistahow all this mistaken", "How all this mistahow all this mistaken", "There are many reg rtg de reg rtg de reg rtg denounce with righteous."],
      date: "2019"
    }
  ];

  return (
    <div className="p-4 shadow-xl bg-white relative cursor-pointer h-[200px] overflow-hidden rounded-lg border border-gray-200">
      <div className="text-start space-y-1">
        <h1 className="border-black border-b-2 mb-2 text-lg font-semibold">Experience</h1>
        <div className='flex flex-col items-start'>
          {
            ExperienceList?.map((skill: any) => (
              <>
                <div className='text-start mt-2 text-xs items-start'>
                  <h1 className="text-xs font-medium">{skill?.name}</h1>
                  <p className="text-[10px] flex items-center gap-1">
                    <span><FaCalendar className='text-[10px]' /></span>
                    <span>{skill?.date}</span>
                  </p>
                  <ul className="list-disc ms-4">
                    {skill?.details?.map((data: any, index: number) => (
                      <li className='text-[10px]' key={index}>{data}</li>
                    ))}
                  </ul>
                </div>
              </>
            ))
          }
        </div>
      </div>

      {lock && <div className="absolute right-3 bottom-3 w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-md">
        <FaLock className="text-sm text-white" />
      </div>}
    </div>
  )
}

export default Experience