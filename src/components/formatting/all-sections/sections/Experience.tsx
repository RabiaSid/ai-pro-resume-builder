import React from 'react'
import { FaCalendar, FaLock, FaStar } from 'react-icons/fa'

const Experience = ({ sectionData, handleAddSec }: { sectionData: any, handleAddSec: any }) => {

  const handleAddSection = () => {
    handleAddSec({
      id: 3,
      name: "Experience",
      description: "",
      height: "h-[80px]",
    })
  };

  const ExperienceList = [
    {
      name: "Software Engineering",
      details: ["But I must explain to you how all this mistahow all this mistaken", "How all this mistahow all this mistaken", "There are many reg rtg de reg rtg de reg rtg denounce with righteous."],
      date: "2019"
    }
  ];

  return (
    <div className="group relative w-full border border-[#CECECE] h-52
     bg-white rounded-[10px] p-5 flex flex-row hover:bg-primary2 overflow-hidden  shadow-md transition-all">
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


      {!sectionData?.locked && <div
        className="absolute -right-[40px] top-[-16px] z-50 w-[140px] h-12
    bg-[#9885FF] rotate-45
    flex items-center justify-center transition-all duration-700"
        style={{
          clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
        }}
      >
        <span className="text-white flex items-center justify-center left-[77px] absolute">
          <FaStar />
        </span>
      </div>}


      <button
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    bg-primary3 cursor-pointer 
    text-white text-center p-2 rounded-lg opacity-0 
    group-hover:opacity-100 transition-all font-semibold text-base"
        onClick={handleAddSection}
      >
        Add to Resume
      </button>
    </div>
  )
}

export default Experience