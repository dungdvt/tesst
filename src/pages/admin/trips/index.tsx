import { useEffect, useState } from "react";
import { ITrip } from "../../../interfaces/trips";
import { Link } from "react-router-dom";
import axios from "axios";

const TripsList = () => {
  const [trips, setTrips] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // fetch trip
  const fetchTrips = async () => {
    const data = await (
      await fetch("http://localhost:3000/trips?_expand=busHouse")
    ).json();
    setTrips(data);
  };
  useEffect(() => {
    fetchTrips();
  }, []);
  return (
    <div>
      <Link className="p-2 bg-[#16a34a] text-white" to="/admin/trips/add">
        Thêm mới chuyến đi
      </Link>
      {trips.map((item) => (
        <Trip data={item} onDelete = {setRefresh} refresh ={refresh} />
      ))}
    </div>
  );
};

export default TripsList;

const Trip = (props: { data: ITrip,onDelete,refresh }) => {

  console.log(props.data);

  return (
    <article className="rounded-xl border-2 border-gray-100 bg-white">
      <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
        <a href="#" className="block shrink-0">
          <img
            alt=""
            src="/img_hero.png (1).png"
            className="size-14 rounded-lg object-cover"
          />
        </a>

        <div>
          <h3 className="font-medium sm:text-lg">
            <a href="#" className="hover:underline">
              {props.data.busHouse?.name}
            </a>
          </h3>
          <p className="line-clamp-2 text-lg text-black-700 ">
            {props.data.busHouseId}
          </p>

          <div className="mt-2 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center gap-1 text-gray-500">

              <p className="text-xs">Số ghế: {props.data.seats}</p>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <p className="text-xs">Giá tiền:{props.data.price}</p>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <p className="text-xs">Ngày:{props.data.startTime}</p>
            </div>
            <p className="line-clamp-2 text-sm text-gray-700">
            Điểm đi: {props.data.fromStation} - Điểm đến: {props.data.toStation}
            </p>

            {/* <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                        <a href="#" className="font-medium underline hover:text-gray-700"> {props.data.name} </a>
                    </p> */}
          </div>
        </div>
      </div>

      <div className="">
        <div className="m-10 flex gap-x-5">
          <Link to={"trips/update/" + props.data.id }>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              color="#16A349"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </Link>
          <button
            className="bg-red-500 py-1 px-3 rounded-full text-white"
            onClick={async () => {
              if (confirm("Bạn có muốn xóa chuyến xe này không ?")) {
                const res = await axios.delete(
                  `http://localhost:3000/trips/${props.data.id}`
                );
                props.onDelete(!props.refresh)
                window.location.reload();

              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>

    </article>
  );
};
