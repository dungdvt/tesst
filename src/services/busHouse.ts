import instance from "./api";

const getBusHouse = async () => {
    const data = await instance.get("/busHouses")
    return data
}

export {
    getBusHouse
}