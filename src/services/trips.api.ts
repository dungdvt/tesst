import { ITrip } from "../interfaces/trips"
import instance from "./api"


export const getTrips = () => {
    const data = instance.get("/trips")
    return  data
}

export const postTrip = (data: ITrip) => {
    const uri = "trips"
    return instance.post(uri, data)
}

export const putTrip = (id: number | string, data: ITrip) => {
    const uri = "trips/" + id
    return instance.put(uri, data)
}

export const deleteTrip = (id: number | string) => {
    const uri = "trips/" + id
    return instance.delete(uri)
}