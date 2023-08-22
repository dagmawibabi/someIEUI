export default function CommentBtn({onClickFunction}) {
    return (
        <div onClick={onClickFunction} className="bg-[#A10F0F] px-5 py-2 m-2 text-white hover:bg-[#f04d4d]">
            Comment
        </div>
    )
}