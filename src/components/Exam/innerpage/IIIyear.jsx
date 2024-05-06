import React from 'react'
import ExamCard from '../ExamCard'

function IIIyear() {
  return (
    <div className='h-fit justify-center items-center'> 
      <div className="w-full px-5 md:px-20 mt-5 md:mt-15 flex md:my-20 flex-wrap shadow-2xl justify-end items-center bg-transparent"></div>

      <ExamCard Label="ST" Path="/1year" className="justify-center"></ExamCard>
      <ExamCard Label="PUT" Path="/1year" className="justify-center"></ExamCard>
      <ExamCard Label="UT" Path="/1year" className="justify-center"></ExamCard>
    </div>
  )
}

export default IIIyear
