export default function ApproveBtn({onClickFunction}) {
    return (
        <div onClick={onClickFunction} className="bg-[#0F3A62] px-5 py-2 m-2 text-white hover:bg-[#549ce0]">
            Approve
        </div>
    )
}