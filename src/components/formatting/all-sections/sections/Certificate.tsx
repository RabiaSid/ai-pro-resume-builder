import React from 'react'
import { FaLock } from 'react-icons/fa6'

const Certificate = ({ lock }: { lock: boolean }) => {
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

      {lock && <div className="absolute right-3 bottom-3 w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-md">
        <FaLock className="text-sm text-white" />
      </div>}
    </div>

  )
}

export default Certificate