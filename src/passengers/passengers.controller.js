export const findAllPassengers = (req, res) => {
  res.json({ message: "Aquí se recibirá un pasajero por id" });
};

export const createPassenger = (req, res) => {
  const passenger = req.body;

  res.json(passenger);
};

export const findOnePassenger = (req, res) => {
  const { id } = req.params;

  res.json({
    message: "Aquí se recibirá un pasajero por id",
    id,
  });
};

export const updatePassenger = (req, res) => {
  const { id } = req.params;

  res.json({
    message: "Aquí se actualizará un pasajero por id",
    id,
  });
};

export const deletePassenger = (req, res) => {
  const { id } = req.params;

  res.json({
    message: "Aquí se eliminaá un pasajero por id",
    id,
  });
};
