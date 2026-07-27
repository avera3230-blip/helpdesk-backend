import { useEffect, useState } from "react";
import API from "../services/api";

function TicketList({
  setTicketEditar,
  actualizarLista,
  recargarTickets,
}) {
  const [tickets, setTickets] = useState([]);

  const cargarTickets = async () => {
    try {
      const respuesta = await API.get("/");
      setTickets(respuesta.data);
    } catch (error) {
      console.error("Error al obtener los tickets:", error);
    }
  };

  useEffect(() => {
    cargarTickets();
  }, [actualizarLista]);

  const eliminarTicket = async (id) => {
    if (!window.confirm("¿Está seguro de eliminar este ticket?")) return;

    try {
      await API.delete(`/${id}`);
      alert("Ticket eliminado correctamente");
      recargarTickets();
    } catch (error) {
      console.error(error);
      alert("Error al eliminar el ticket");
    }
  };

  return (
    <div>
      <h2>Listado de Tickets</h2>

      {tickets.length === 0 ? (
        <p>No existen tickets registrados.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
          border="1"
        >
          <thead>
            <tr>
              <th style={{ padding: "10px" }}>Título</th>
              <th style={{ padding: "10px" }}>Categoría</th>
              <th style={{ padding: "10px" }}>Prioridad</th>
              <th style={{ padding: "10px" }}>Estado</th>
              <th style={{ padding: "10px", width: "220px" }}>
                Acciones
              </th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket._id}>
                <td style={{ padding: "10px" }}>{ticket.titulo}</td>
                <td style={{ padding: "10px" }}>{ticket.categoria}</td>
                <td style={{ padding: "10px" }}>{ticket.prioridad}</td>
                <td style={{ padding: "10px" }}>{ticket.estado}</td>

                <td
                  style={{
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <button
                    onClick={() => setTicketEditar(ticket)}
                  >
                    ✏️ Editar
                  </button>

                  <button
                    onClick={() => eliminarTicket(ticket._id)}
                  >
                    🗑️ Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TicketList;