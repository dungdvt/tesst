import Select from "./select";
import Text from "./text";

const Form = () => {
  return (
    <div className="relative border-2 mt-10 mx-auto w-60 sm:w-full px-4 sm:px-6 lg:flex lg:items-center lg:px-8 rounded-lg">
      <div className="text-center w-full">
        <form className="bg-white p-4 flex gap-4 justify-center rounded-tl-lg rounded-tr-lg sm:flex-wrap">
          <Text title="Xe khách" icon="fa-solid fa-bus" sale="" />
          <Text title="Máy bay" icon="fa-solid fa-plane" sale="-20%" />
          <Text title="Tàu hỏa" icon="fa-solid fa-train" sale="mới" />
          <Text title="Thuê xe" icon="fa-solid fa-car" sale="mới" />
        </form>
        <form className="bg-white p-4 flex space-x-9 justify-center rounded-bl-lg rounded-br-lg sm:flex-wrap">
          <div style={{ height: "60px" }} className="px-16 py-1 flex space-x-2 justify-center border border-gray-300 rounded-lg">
            <Select title="Nơi xuất phát" icon="fa-solid fa-location-dot" value="Hà Nội" />
            <Select title="Nơi đến" icon="fa-solid fa-location-dot text-[#b91c1c]" value="Bắc Sơn - Yên Nghĩa" />
            <Select title="Ngày đi" icon="fa-regular fa-calendar text-[#0284c7]" value="T2, 18/03/2024" />
            <p className="py-2 px-4 border-none rounded-lg mr-2 text-lg text-blue-500">Thêm ngày về</p>
          </div>
          <button className="text-white bg-[#fcd34d] text-[#0c0a09] hover:bg-blue-600 focus:outline-none px-8 py-1 rounded-md">
            Tìm kiếm
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;