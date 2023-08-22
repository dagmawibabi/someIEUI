import { FaEdit, FaPlus } from "react-icons/fa";
import { useState } from "react";

export default function Subtasks({addSubtask}) {
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
      };    
    
      return (
        <div className="px-8 bg-[#f2f2f2] flex items-center">
            <div className="px-8 py-3 border w-full bg-[#F5FAFD] hover:bg-[#edf8ff]"> 
                <select value={selectedOption} onChange={handleChange} className="w-fit">
                    <option value="Option 1" className="w-fit">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </select>
            </div>
            <div className="px-8 py-3 border w-full bg-[#F5FAFD] hover:bg-[#edf8ff]"> Labor </div>
            <div className="px-8 py-3 border w-full bg-[#F5FAFD] hover:bg-[#edf8ff]"> 3000 </div>
            <div className="px-5 py-4 border h-full bg-[#F5FAFD] hover:bg-[#edf8ff]">
                <FaPlus size={18} onClick={() => addSubtask()} />
            </div>
            <div className="px-5 py-4 border  bg-[#F5FAFD] hover:bg-[#edf8ff]">
                <FaEdit size={18} />
            </div>
        </div>
    )
}