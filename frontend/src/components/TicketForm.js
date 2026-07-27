import { useEffect, useState } from "react";
import API from "../services/api";

function TicketForm({
  ticketEditar,
  setTicketEditar,
  recargarTickets,
}) {
  const [ticket, setTicket] = useState({
    titulo: "",
    descripcion: "",
    categoria: "Red",
    prioridad: "Media",
    estado: "Abierto",
  });

  useEffect(() => {
    if (ticketEditar) {
      setTicket(ticketEditar);
    }
  }, [ticketEditar]);

  const limpiarFormulario = () => {
    setTicket({
      titulo: "",
      descripcion: "",
      categoria: "Red",
      prioridad: "Media",
      estado: "Abierto",
    });

    setTicketEditar(null);
  };

  const handleChange = (e) => {
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (ticketEditar) {
        await API.put(`/${ticketEditar._id}`, ticket);

        alert("Ticket actualizado correctamente");
      } else {
        await API.post("/", ticket);

        alert("Ticket guardado correctamente");
      }

      limpiarFormulario();
      recargarTickets();
    } catch (error) {
      console.error(error);
      alert("Error al guardar el ticket");
    }
  };

  return (
    <div>
      <h2>
        {ticketEditar ? "Editar Ticket" : "Nuevo Ticket"}
      </h2>

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
          {ticketEditar ? "Actualizar Ticket" : "Guardar Ticket"}
        </button>

        {ticketEditar && (
          <button
            type="button"
            onClick={limpiarFormulario}
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </button>
        )}
      </form>
    </div>
  );
}

export default TicketForm;