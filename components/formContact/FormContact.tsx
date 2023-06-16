import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

export default function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    telefono: "",
    numberOfPeople: "",
    checkInDate: "",
    checkOutDate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Verifica si todos los campos están completos
    const isFormValid = Object.values(formData).every((value) => value !== "");

    if (isFormValid) {
      const { name, lastName, telefono } = formData;
      const message = `Hola! me interesa este producto? Mis datos son:
      Nombre: ${name} ${lastName}%0AEmail: ${telefono}%0A`;
      const url = `https://wa.me/3404519318?text=${message}`; // Reemplaza XXXXXXXXXX por el número de WhatsApp de la empresa

      window.open(url, "_blank");
    } else {
      // Muestra un mensaje de error o realiza alguna acción en caso de campos vacíos
      alert(
        "Por favor completa todos los campos antes de enviar el formulario."
      );
    }
  };

  return (
    <>
      <form style={{ borderColor: "red" }}>
        <TextField
          name="name"
          label="Nombre"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          sx={{ borderColor: "red" }}
          style={{ marginBottom: "10px" }}
          color="error"
        />
        <TextField
          name="lastName"
          label="Apellido"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          required
          style={{ marginBottom: "10px" }}
          color="error"
        />
        <TextField
          name="telefono"
          label="Celular"
          type="tel"
          value={formData.telefono}
          onChange={handleChange}
          fullWidth
          required
          style={{ marginBottom: "10px" }}
          color="error"
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          style={{ marginBottom: "30px", backgroundColor: "red" }}
        >
          Enviar a WhatsApp
        </Button>
      </form>
    </>
  );
}
