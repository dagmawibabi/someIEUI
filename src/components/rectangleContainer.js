export default function RectangleContainer({content, isBold=false}) {
    return (
        <div className={`bg-[#F5FAFD] px-8 py-4 m-2 w-fit h-fit border hover:bg-[#edf7fd] ${isBold && "font-semibold"}`}>
            {content}
        </div>
    )
}