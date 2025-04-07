import React from 'react'
import { FaLock } from 'react-icons/fa6'

const Certificate = ({ sectionData, handleAddSec }: { sectionData: any, handleAddSec: any }) => {

  const handleAddSection = () => {
    handleAddSec({
      id: 2, // ✅ New unique ID
      name: "Certificate",
      description: "",
      height: "h-[80px]",
      visible: true,
    })
  };

  return (
    <div className="p-4 shadow-xl bg-white relative cursor-pointer h-[200px] overflow-hidden rounded-lg border border-gray-200">
      <div className="text-start space-y-1">
        <h1 className="border-black border-b-2 mb-2 text-lg font-semibold">Certification</h1>
        <p className="text-xs text-gray-700">Lorem ipsum dolor, sit amet cons</p>
        <p className="text-xs text-gray-700">Consectetur</p>
        <hr className="border-gray-300" />
        <p className="text-xs mt-2 text-gray-700">Consectetur adipisicing</p>
        <p className="text-xs text-gray-700">Consectetur gone</p>
        <hr className="border-gray-300" />
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

export default Certificate