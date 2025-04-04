import React from 'react'
import { FaLock } from 'react-icons/fa'

const Skills = ({ lock }: { lock: boolean }) => {
  const skillsList = ["ReactJS", "MongoDB", "Angular", "NextJS", "Typescript", "NodeJs", "ExpressJs"];
  return (
    <div className="p-4 shadow-xl bg-white relative cursor-pointer h-[200px] overflow-hidden rounded-lg border border-gray-200">
      <div className="text-start space-y-1">
        <h1 className="border-black border-b-2 mb-2 text-lg font-semibold">Skills</h1>
        <p className="text-xs text-gray-500">Frontend Developer</p>
        <div className='grid grid-cols-4 gap-x-2'>
          {
            skillsList?.map((skill: any) => (
              <p className="text-[10px] text-center border-gray-500 border-b-[1.5px] mt-2">{skill}</p>
            ))
          }
        </div>
        <hr className="border-gray-300" />
      </div>

      {/* Lock Icon */}
      {lock && <div className="absolute right-3 bottom-3 w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-md">
        <FaLock className="text-sm text-white" />
      </div>}
    </div>
  )
}

export default Skills