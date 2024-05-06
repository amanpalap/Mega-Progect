import React from 'react'
import ExamCard from '../ExamCard'


function IVyear() {
  return (
    <div className='md:h-screen h-fit flex flex-wrap items-center justify-center w-full'>
      <div className="w-full px-5 md:px-20 mt-14 md:mt-5 flex md:my-10 flex-wrap justify-center items-center bg-transparent">


      <ExamCard Label="ST" Path="/1year" className="justify-center w-1/2"></ExamCard>
      <ExamCard Label="PUT" Path="/1year" className="justify-center w-1/2"></ExamCard>
      <ExamCard Label="UT" Path="/1year" className="justify-center w-full"></ExamCard>
      </div>
    </div>
  )
}

export default IVyear
