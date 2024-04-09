import { useForm, SubmitHandler } from 'react-hook-form'
import { putTrip } from '../../../services/trips.api'
import {  useNavigate, useParams } from 'react-router-dom'
import { IBusHouse, ITrip } from '../../../interfaces/trips'
import axios from 'axios'
import { useEffect, useState } from 'react'


type UpdateTripForm = {
    busHouseId: string,
    startTime: string,
    price: number,
    seats: number
    busStation: string,
    fromStation: string,
    toStation: string
}

const UpdateTrip = () => {
    const { id } = useParams();

    const [trip,setTrip] = useState(null)


    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<UpdateTripForm>()

    const getData = async (id) => {
        const res = await axios.get(`http://localhost:3000/trips/${id}`)
        setTrip(res.data)

    }

    useEffect(() => {
        getData(id)
    },[])
    console.log(trip)
    const onSubmit: SubmitHandler<UpdateTripForm> = async (data) => {

        try {
            if (id) {
                putTrip(id, data)
            }

            navigate("/admin")
        } catch {
            alert("Cập nhật thất bại")
        }
        // console.log(data);
    }

    return <div className=''>
        <h1 className="text-2xl font-bold">Cập nhật chuyến đi</h1>
        <form action="#" className="space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className="sr-only" htmlFor="name">
                    Nhà xe
                </label>

                <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder={trip?.busHouseId}
                    type="text"
                    {...register("busHouseId", { required: "Dữ liệu bắt buộc" })}
                />
                <p className='text-sm text-red-500'>{errors.busHouseId?.message}</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label className="sr-only" htmlFor="email">
                        Thời gian bắt đầu
                    </label>
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder={trip?.startTime}
                        type="datetime-local"
                        min={new Date().toISOString().slice(0, -14)}
                        {...register("startTime", { required: "Dữ liệu bắt buộc" })}
                    />
                    <p className='text-sm text-red-500'>{errors.startTime?.message}</p>
                </div>
                <div>
                    <label className="sr-only" htmlFor="email">
                        Số ghế:
                    </label>
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder={trip?.seats}
                        type="number"
                        {...register("seats", { required: "Dữ liệu bắt buộc" })}
                    />
                    <p className='text-sm text-red-500'>{errors.seats?.message}</p>
                </div>
                <div>
                    <label className="sr-only" htmlFor="email">
                        Giá:
                    </label>
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder={trip?.price}
                        type="number"
                        {...register("price", { required: "Dữ liệu bắt buộc", min: 1000 })}
                    />
                    <p className='text-sm text-red-500'>{errors.price?.message}</p>
                </div>
                <div>
                    <label className="sr-only" htmlFor="phone">
                        Điểm đi
                    </label>
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder={trip?.fromStation}
                        type="text"
                        {...register("fromStation", { required: "Dữ liệu bắt buộc" })}
                    />
                    <p className='text-sm text-red-500'>{errors.fromStation?.message}</p>
                </div>
                <div>
                    <label className="sr-only" htmlFor="phone">
                        Điểm đến
                    </label>
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder={trip?.toStation}
                        type="text"
                        {...register("toStation", { required: "Dữ liệu bắt buộc" })}
                    />
                    <p className='text-sm text-red-500'>{errors.toStation?.message}</p>
                </div>
            </div>


            <div className="mt-4">
                <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                    Cập nhật chuyến đi
                </button>
            </div>
        </form>
    </div>



}

export default UpdateTrip