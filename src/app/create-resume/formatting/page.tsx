import ReArrangeSection from '@/components/formatting/rearrange/rearrange'
import React from 'react'

export default function Formatting() {
    return (
        <div className='grid grid-cols-12 w-full gap-20 p-4'>
            <div className='col-span-4'>
                <ReArrangeSection />
            </div>
            <div className='col-span-8 border-4'>
                kljhklzkljhklzkljhklzkljhklzkljhklz
            </div>
        </div>
    )
}
