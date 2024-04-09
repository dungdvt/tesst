import { useForm, SubmitHandler } from 'react-hook-form'
import { postTrip } from '../../../services/trips.api'
import { useNavigate,useLoaderData } from 'react-router-dom'


type AddTripForm = {
    busHouseId: string,
    startTime: string,
    price: number,
    seats: number
    busStation: string,
    fromStation: string,
    toStation: string
}

const AddTrip = () => {
  
    
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<AddTripForm>()

    const onSubmit: SubmitHandler<AddTripForm> = async (data) => {
        
        try {
            await postTrip(data)
            navigate("/admin")
        } catch {
            alert("Thêm mới thất bại")
        }
        // console.log(data);
    }

    return <div className=''>
    <h1 className="text-2xl font-bold">Thêm mới chuyến đi</h1>
    <form action="#" className="space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label className="sr-only" htmlFor="name">
                Nhà xe
            </label>
            
            <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Nhà xe"
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
                    placeholder="Thời gian bắt đầu"
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
                    placeholder="Số ghế..."
                    type="number"
                    {...register("seats", { required: "Dữ liệu bắt buộc" , min:1})}
                />
                <p className='text-sm text-red-500'>{errors.seats?.message}</p>
            </div>
            <div>
                <label className="sr-only" htmlFor="email">
                    Giá:
                </label>
                <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Giá"
                    type="number"
                    {...register("price", { required: "Dữ liệu bắt buộc" ,min:1000})}
                />
                <p className='text-sm text-red-500'>{errors.price?.message}</p>
            </div>
            <div>
                <label className="sr-only" htmlFor="phone">
                    Điểm đi
                </label>
                <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Điểm đi"
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
                    placeholder="Điểm đến"
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
                Thêm mới chuyến đi
            </button>
        </div>
    </form>
    </div>
         
        
    
}

export default AddTrip