const Support = (props: { title: string, icon: string }) => {
    return(

    <div className="inline-block rounded-lg   p-1">
        <i className={props.icon}></i>
        
        <button className="inline-block rounded-md text-[#f5f5f4] px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative">
           {props.title}
        </button>
    </div>
    )
}
export default Support