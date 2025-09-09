// Task 2: listUsers()
import { getServerURL } from "./task1.js";

export function listUsers() {
    fetch(getServerURL() + "/users")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error("Error al obtener usuarios", err));
}