import { Router } from "express";

export const router = Router()

const findAllPassengers = (req, res) => {
    res.json({ message: "Aquí se recibirá un pasajero por id" });
  };
  
  const createPassenger = (req, res) => {
      const passenger = req.body;
  
    res.json(passenger);
  }
  
  const findOnePassenger = (req, res) => {
      const { id } = req.params;
  
      res.json({
        message: "Aquí se recibirá un pasajero por id",
        id,
      });
  }
  
  const updatePassenger = (req, res) => {
      const { id } = req.params;
  
      res.json({
        message: "Aquí se actualizará un pasajero por id",
        id,
      });
  }
  
  const deletePassenger = (req, res) => {
      const { id } = req.params;
  
      res.json({
        message: "Aquí se eliminaá un pasajero por id",
        id,
      });
  }
  
  //Rutas
  //endpoint 1: obtener todos los pasajeros
  router.get("/passengers", findAllPassengers);
  
  //endpoint 2: crear un pasajero
  
  router.post("/passengers", createPassenger);
  
  //endpoint 3: obtener un pasajero dado su id
  
  router.get("/passengers/:id", findOnePassenger);
  
  //endpoint 4: actualizar la información de un pasajero
  
  router.patch("/passengers/:id", updatePassenger);
  
  //endpoint 5: eliminar la información de un pasajero
  
  router.delete("/passengers/:id", deletePassenger);