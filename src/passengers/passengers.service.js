import Passenger from "./passengers.model.js";

export class PassengerService {
  findOnePassenger() {}

  async findAllPassengers() {
    return await Passenger.findAll();
  }

  async createPassenger(data) {
    return await Passenger.create(data);
  }
}
