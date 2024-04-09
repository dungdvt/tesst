export interface ITrip {
    busHouseId: string,
    fromStation: string,
    id?: string,
    startTime: string,
    isBooked?: number,
    price?: number,
    seats?: number
    toStation: string,
    busHouse?: IBusHouse
}

export interface IBusHouse {
    id: string,
    name: string,
    adress: string,
    phone: string
}