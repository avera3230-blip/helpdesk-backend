import { useState } from "react";
import API from "../services/api";

function TicketForm() {
  const [ticket, setTicket] = useState({
    titulo: "",
    descripcion: "",
    categoria: "Red",
    prioridad: "Media",
    estado: "Abierto",
  });

  const handleChange = (e) => {
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/", ticket);

      alert("Ticket guardado correctamente");

      setTicket({
        titulo: "",
        descripcion: "",
        categoria: "Red",
        prioridad: "Media",
        estado: "Abierto",
      });
    } catch (error) {
      console.error(error);
      alert("Error al guardar el ticket");
    }
  };

  return (
    <div>
      <h2>Nuevo Ticket</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={ticket.titulo}
          onChange={handleChange}
          required
        />

        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={ticket.descripcion}
          onChange={handleChange}
          required
        />

        <select
          name="categoria"
          value={ticket.categoria}
          onChange={handleChange}
        >
          <option value="Red">Red</option>
          <option value="Hardware">Hardware</option>
          <option value="Software">Software</option>
        </select>

        <select
          name="prioridad"
          value={ticket.prioridad}
          onChange={handleChange}
        >
          <option value="Alta">Alta</option>
          <option value="Media">Media</option>
          <option value="Baja">Baja</option>
        </select>

        <select
          name="estado"
          value={ticket.estado}
          onChange={handleChange}
        >
          <option value="Abierto">Abierto</option>
          <option value="En Progreso">En Progreso</option>
          <option value="Cerrado">Cerrado</option>
        </select>

        <button type="submit">
          Guardar Ticket
        </button>
      </form>
    </div>
  );
}

export default TicketForm;