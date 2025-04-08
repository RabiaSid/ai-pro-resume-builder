import React from 'react'
import ImproveText from '@/components/formatting/improveText/improveText'
import Template from '@/components/formatting/Template/template'
import ImportParser from '@/components/formatting/importParser/importParser'


export default function Formatting() {


    return (
        <div className='grid grid-cols-12 w-full gap-20 p-4'>
            <div className='col-span-4'>
                <ImportParser />
                <ImproveText />
            </div>
            <div className='col-span-8'>
                <Template />
            </div>
        </div>
    )
}
