import React from 'react'
import { FaCalendar, FaLock } from 'react-icons/fa'

const Education = ({ sectionData, handleAddSec }: { sectionData: any, handleAddSec: any }) => {

  const handleAddSection = () => {
    handleAddSec({
      id: 4,
      name: "Education",
      description: "",
      visible: false,
    })
  };

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

      {sectionData?.locked && <div className="absolute right-3 bottom-3 w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-md">
        <FaLock className="text-sm text-white" />
      </div>}

      <button
        // className="absolute inset-12
        //  bg-purple-700 cursor-pointer bg-opacity-80
        //   text-white text-center py-2 rounded-xl opacity-0 
        //   group-hover:opacity-100 transition-all"
        onClick={handleAddSection}
      >
        Add to resume
      </button>

    </div>
  )
}

export default Education