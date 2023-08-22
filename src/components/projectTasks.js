import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Subtasks from "./subtasks";

export default function ProjectListBar() {
    const [dropdown, activateDropDown] = useState(false);
    const [subtasks, setSubTasks] = useState([{}]);
    
    function addSubtask() {
        let newInputBox = {};
        setSubTasks([...subtasks, newInputBox]);
    }


    return (
        <div className={`border ${dropdown === false ? "border-white" : "border-[#def2ff] my-3"}`}>
            <div className="flex justify-between hover:bg-[#edf8ff] bg-[#F5FAFD]">
                <div className="px-8 py-3 border w-full"> Site Survey </div>
                <div className="px-8 py-3 border w-full"> 10 Days </div>
                <div className="px-8 py-3 border w-full"> July 12, 2023 </div>
                <div className="px-8 py-3 border w-full"> March 17, 2023 </div>
                <div className="px-8 py-3 border w-full"> 1 Month </div>
                {
                    dropdown === true ? 
                        <div className="px-6 py-3 border w-fit items-center align-middle" onClick={() => activateDropDown(false)}>
                            <FaArrowUp />
                        </div> 
                        : 
                        <div className="px-6 py-3 border w-fit items-center align-middle" onClick={() => activateDropDown(true)}>
                            <FaArrowDown />
                        </div> 
                }
            </div>
            {
                dropdown === true ? 
                    subtasks.map((content, index) => {
                        return <Subtasks addSubtask={addSubtask} />
                    })
                : <span> </span>
            }
        </div>
    )
}