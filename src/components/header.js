import { FaArrowLeft } from "react-icons/fa";

export default function Header() {
    return (
        <div className="bg-[#F5FAFD] px-10 py-10 flex justify-start items-center">
            <FaArrowLeft />
            <span className="font-bold mx-5"> 
                Master Budget
            </span>
        </div>
    )
}