import { Link } from "react-router-dom";
import { ExamCard } from "../index";

function Exam() {
  return (
    <div className="flex h-fit md:h-screen flex-wrap items-center justify-center">
      <div className="w-full px-5 mt-10 md:px-20 md:mt-15 flex md:my-20 flex-wrap justify-center items-center bg-transparent">

        <ExamCard Label="1st Year" Path="/1year" className="w-1/2"></ExamCard>

        <ExamCard Label="2st Year" Path="/2year" className="w-1/2"></ExamCard>

        <ExamCard Label="3st Year" Path="/3year" className="w-1/2"></ExamCard>

        <ExamCard Label="4st Year" Path="/4year" className="w-1/2"></ExamCard>

      </div>
    </div>
  );
}

export default Exam;
