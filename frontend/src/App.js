import "./styles/App.css";
import TicketForm from "./components/TicketForm";

function App() {
  return (
    <div className="container">

      <div className="header">
        <h1>Sistema HelpDesk</h1>
        <p>Gestión de incidencias mediante React y Node.js</p>
      </div>

      <div className="card">
        <TicketForm />
      </div>

    </div>
  );
}

export default App;