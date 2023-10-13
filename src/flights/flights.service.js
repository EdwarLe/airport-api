import Flight from "./flights.model.js";

export class FlightsService {
    async findOneFlight(id) {
        return await Flight.findOne({
            where:{
                id,
                status: true
            }
        })
    }

    async findAllFlights() {
        return await Flight.findAll({
            where: {
                status: true
            }
        })
    }

    async createFlight(data) {
        return await Flight.create(data)
    }

    async updateFlight(flight, data) {
        return await flight.update(data)
    }

    async deleteFlight(flight) {
        return await flight.update({status: false})
    }
}