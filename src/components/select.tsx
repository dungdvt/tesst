const Select = (props: { title: string, icon: String, value: String }) => {


    return <div>
      
            <div className="flex items-center space-x-4">
                <span className="text-2xl"><i className={props.icon}></i></span>

                <div>
                    <span className="block  align-left text-gray-400">{props.title}</span>
                    <select
                        name="HeadlineAct"
                        id="HeadlineAct"
                        className="w-full text-gray-700 font-semibold"
                        
                    >
                        <option className="" value="JM">{props.value}</option>
                        <option value="SRV">Quảng Ninh</option>
                        <option value="JH">Hải Phòng</option>
                        <option value="BBK">Cao Bằng</option>
                        <option value="AK">Lạng Sơn</option>
                        <option value="BG">Hà Giang</option>
                        <option value="EC">Tuyên Quanh</option>
                    </select>
                </div>
            </div>
       
    </div>
}

export default Select;