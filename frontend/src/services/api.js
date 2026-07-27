import axios from "axios";

const API = axios.create({
  baseURL: "https://helpdesk-fullstack.onrender.com/api/tickets",
});

export default API;