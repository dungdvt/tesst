import "../index.css"

const Cardright = () => {
  return (
    <article className="flex bg-white transition  container rounded-md"  style={{
      boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
    }}>
      <div className="hidden sm:block sm:basis-56 px-4 py-4">
        {/* <img className="pt-10" src="/ticket.png" alt="" /> */}
        <img
          alt=""
          src="/img_hero.png (1).png"
          className="aspect-square h-[180px] w-full object-cover rounded-md "
        />
      </div>  
      <div className="flex flex-1 flex-col justify-between ">
        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6 flex justify-between">
          <div>
            <a href="#">
              <h3 className="font-semibold text-lg text-gray-900">
                Hải Phòng Travel (Đất cảng) 
              </h3>
            </a>
            <div className="p-2 align-[4px] ">
              <time
                dateTime="2022-10-10"
                className=" items-center justify-between gap-4 text-xs font-bold  text-gray-900"
              >
                <div className="mt-4">
                  <i className="fa-solid fa-location-dot"></i>
                  <span className="ml-4 max-w-20 text-xl text-gray-600 text-semibold">7:01 . <span className="text-[12px] font-medium">Hà Nội</span></span>
                  <span className="w-px flex-1 bg-gray-900/10" />
                </div>
                <div className="mt-1">
                  <i className="fa-solid fa-grip-lines-vertical "></i>
                  <span className="ml-5 text-gray-400">1h30m</span>
                </div>

                <div className="mt-1">
                  <i className="fa-solid fa-location-dot"></i>
                  <span className=""><span className="ml-4 max-w-20 text-xl text-gray-500 text-semibold">8:45 . <span className="text-[12px] font-medium">Hải Phòng</span></span></span>
                  <span className="w-px flex-1 bg-gray-900/10" />
                </div>

              </time>
            </div>
          </div>
          <div className=" flex-col justify-end">
            <h4 className="text-blue-500 text-lg font-medium ml-20 pb-2">Từ 230.000VND</h4>
            <img className="px-2 mt-2 rounded-xl  ml-[125px]" src="/giamgia10.png" alt="" />
            <p className="pt-5 ml-[89px]">Còn 11 chỗ trống</p>
            <a
              className="ml-[72px] inline-block mt-4 rounded bg-amber-400 px-8 py-2 text-sm  text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
              href="/index2.html"
            >
              Chọn chuyến
            </a>
            <h6 className=" text-gray-900 font-medium mt-2">Không Cần Thanh Toán Trước</h6>
          </div>
        </div>
      </div>
  </article>

  )
}
export default Cardright