function Contentcl(props:{title: string,data: Array<string>}){
    return(
        <div>
            <h2 className="mb-2 font-bold text-2xl">{props.title}</h2>
            {props.data.map((value,i)=>(
                <a key={i} className="underline decoration-1 block py-2" href="#">{value}</a>
            ))}
        </div>
    )
}

export default Contentcl;