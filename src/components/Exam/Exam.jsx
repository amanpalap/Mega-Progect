import { Link } from "react-router-dom";
import { ExamCard } from "../index";

function Exam() {
  return (
    <div className="h-fit">
      <div className="w-full px-5 md:px-20 mt-5 md:mt-15 flex md:my-20 flex-wrap shadow-2xl justify-end items-center bg-transparent">


<ExamCard Label="1st Year" Path="/1year" className="justify-end"></ExamCard>

<ExamCard Label="2st Year" Path="/2year" className="justify-end" classname="md:mr-64"></ExamCard>

<ExamCard Label="3st Year" Path="/3year" className="justify-start" classname="md:ml-64"></ExamCard>

<ExamCard Label="4st Year" Path="/4year" className="justify-start"></ExamCard>

</div>
    </div>
  );
}

export default Exam;
