import React from 'react'
import Skills from './sections/Skills'
import Certificate from './sections/Certificate'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Projects from './sections/Projects'

const AllSections = () => {
  return (
    <div className='grid gap-4 h-[650px] overflow-auto p-2 mt-4'>
      <Skills lock={false} />
      <Certificate lock={false} />
      <Experience lock={true} />
      <Education lock={false} />
      <Projects lock={true} />
    </div>
  )
}

export default AllSections