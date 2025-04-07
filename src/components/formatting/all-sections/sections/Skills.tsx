import { addNewSection } from '@/redux/slices/addSectionSlice';
import { RootState } from '@/redux/store';
import React from 'react'
import { FaLock } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';

const Skills = ({ sectionData, handleAddSec }: { sectionData: any, handleAddSec: any }) => {

  const dispatch = useDispatch();
  const { availableSections } = useSelector((state: RootState) => state.addSection)
  const skillsList = ["ReactJS", "MongoDB", "Angular", "NextJS", "Typescript", "NodeJs", "ExpressJs"];


  const handleAddSection = () => {
    handleAddSec({
      id: 1, // ✅ New unique ID
      name: "Skills",
      description: "",
      locked: false,
      visible: true,
    })
  };
  console.log(sectionData, "sectionData");

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

export default Skills