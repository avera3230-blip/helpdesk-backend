import { useState } from "react";
import "./styles/App.css";
import TicketForm from "./components/TicketForm";
import TicketList from "./components/TicketList";

function App() {
  const [ticketEditar, setTicketEditar] = useState(null);
  const [actualizarLista, setActualizarLista] = useState(false);

  const recargarTickets = () => {
    setActualizarLista(!actualizarLista);
  };

  return (
    <div className="container">

      <div className="header">
        <h1>Sistema HelpDesk</h1>
        <p>Gestión de incidencias mediante React y Node.js</p>
      </div>

      <div className="card">
        <TicketForm
          ticketEditar={ticketEditar}
          setTicketEditar={setTicketEditar}
          recargarTickets={recargarTickets}
        />
      </div>

      <div className="card">
        <TicketList
          setTicketEditar={setTicketEditar}
          actualizarLista={actualizarLista}
          recargarTickets={recargarTickets}
        />
      </div>

    </div>
  );
}

export default App;