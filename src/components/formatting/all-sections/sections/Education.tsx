import React from 'react'
import { FaCalendar, FaLock } from 'react-icons/fa'

const Education = ({ lock }: { lock: boolean }) => {

  const educationList = [
    {
      institute: "Software Engineering",
      location: "Karachi, Pakistan",
      date: "2019"
    },
    {
      institute: "Master of Business Administration",
      location: "Karachi, Pakistan",
      date: "2017"
    }
  ];

  return (
    <div className="p-4 shadow-xl bg-white relative cursor-pointer h-[200px] overflow-hidden rounded-lg border border-gray-200">
      <div className="text-start space-y-1">
        <h1 className="border-black border-b-2 mb-2 text-lg font-semibold">Education</h1>
        <div className='flex flex-col items-start'>
          {
            educationList?.map((skill: any) => (
              <>
                <div className='text-start mt-2 text-xs items-start'>
                  <h1 className="text-xs font-medium">{skill?.institute}</h1>
                  <p className="text-[10px]">{skill.location}</p>
                  <p className="text-[10px] flex items-center gap-1">
                    <span><FaCalendar className='text-[10px]' /></span>
                    <span>{skill?.date}</span>
                  </p>
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

export default Education