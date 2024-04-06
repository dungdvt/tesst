const Card = (props: { title: string, mony: string, color: string, img:string }) => {
    return <div className="col-sm-12 col-md-6 col-lg-3">
        <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
            <img
                alt=""
                src={props.img}
                className="h-56 w-full rounded-md object-cover"
            />
            <div className="mt-2 ">
                <dl style={{ paddingBottom: "25px", paddingLeft: "10px" }} className={props.color}>
                    <div >
                        <dd style={{ color: "white" }} className="font-medium">{props.title}</dd>
                    </div>
                    <div>
                        <dd style={{ color: "white" }} className="text-sm text-gray-500">{props.mony}</dd>
                    </div>
                </dl>
            </div>
        </a>
    </div>
  
  }
  
  export default Card