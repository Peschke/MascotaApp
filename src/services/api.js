import axios from "axios";

const api = axios.create({
    BaseURL: "https://mascotas.pythonanywhere.com/api/",
});

export default api;