import { useState } from "react";
import ApproveBtn from "./approveBtn";
import CommentBtn from "./commentBtn";
import RectangleContainer from "./rectangleContainer";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import ProjectListBar from "./projectTasks";

export default function ProjectBar() {
    const [dropdown, activateDropDown] = useState(false);

    return (
        <div className={`mx-3 mt-2 border ${dropdown === false ? "border-white" : "border-[#b5daf3]"} hover:border-blue-100`}>
            <div className="px-8 py-1  bg-[#F5FAFD] flex justify-between items-center border border-white ">
                <span className="font-bold text-lg"> Enat Bank </span>
                <div className="flex">
                    <ApproveBtn onClickFunction={()=>{}} />
                    <CommentBtn onClickFunction={()=>{}} />
                </div>
                <div className="flex items-center">
                    <RectangleContainer content={"Budget - 100,000 ETB"} />
                    {dropdown === true ? 
                        <FaAngleUp size={25} className="ml-5" onClick={() => activateDropDown(false)} />
                        :
                        <FaAngleDown size={25} className="ml-5" onClick={() => activateDropDown(true)} />
                    }
                </div>
            </div>
            {dropdown === true ? 
                <div className="px-8 py-5 bg-[#f2f2f2] items-center">
                    <ProjectListBar />
                    <ProjectListBar />
                    <ProjectListBar />
                    <ProjectListBar />
                    <ProjectListBar />
                </div>
                :
                <span> </span>
            }
        </div>
    )
}