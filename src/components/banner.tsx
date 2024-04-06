import Select from "./select";
import Text from "./text";
import Support from "./support";

const Banner = () => {
  return (
    <>
      <section className="relative bg-[url('/banner1.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />
        <div className="relative mx-auto px-4 py-16 sm:px-6 lg:flex lg:items-center lg:px-8">
          <div className="mx-auto max-w-3x2" style={{ height: "270px", maxWidth: "1100px", width: "100%" }}>
            <h2 className="text-white text-2xl text-center mb-5">Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ</h2>
            <form className="bg-white p-4 flex gap-4 justify-center rounded-tl-lg rounded-tr-lg">
              <Text title="Xe khách" icon="fa-solid fa-bus" sale="" />
              <Text title="Máy bay" icon="fa-solid fa-plane" sale="-20%" />
              <Text title="Tàu hỏa" icon="fa-solid fa-train" sale="mới" />
              <Text title="Thuê xe" icon="fa-solid fa-car" sale="mới" />
            </form>
            <form className="bg-white p-4 flex space-x-9 justify-center rounded-bl-lg rounded-br-lg ">
              <div style={{ height: "60px" }} className="px-16 py-1 flex space-x-9 justify-center border border-gray-300 rounded-lg">
                <Select title="Nơi xuất phát" icon="fa-solid fa-location-dot" value="Hà Nội" />
                <Select title="Nơi đến" icon="fa-solid fa-location-dot text-[#b91c1c]" value="Bắc Sơn - Yên Nghĩa" />
                <Select title="Ngày đi" icon="fa-regular fa-calendar text-[#0284c7]" value="T2, 18/03/2024" />
                <p className="py-2 px-4 border-none rounded-lg  mr-10 text-lg text-blue-500">Thêm ngày về</p>
              </div>
              <button className="text-white bg-[#fcd34d] text-[#0c0a09] hover:bg-blue-600 focus:outline-none px-8 py-1 rounded-md">
                Tìm kiếm
              </button>
            </form>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-full text-center bg-[#171717] bg-opacity-80">
          <Support title="Chắc chắn có chỗ" icon="fa-solid fa-check text-[#fde047]" />
          <Support title="Hỗ trợ 24/7" icon="fa-solid fa-phone text-[#fde047]" />
          <Support title="Nhiều ưu đãi" icon="fa-solid fa-ticket text-[#fde047]" />
          <Support title="Thanh toán đa dạng" icon="fa-brands fa-amazon-pay text-[#fde047]" />
        </div>
      </section>
    </>
  );
};

export default Banner;