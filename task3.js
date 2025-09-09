// Task 3: addUser(first_name, last_name, email)
import { getServerURL } from "./task1.js";

export function addUser(first_name, last_name, email) {
    fetch(getServerURL() + "/users")
        .then(res => res.json())
        .then(users => {
            const maxId = users.reduce((max, u) => Math.max(max, parseInt(u.id)), 0);
            const newUser = { id: (maxId + 1).toString(), first_name, last_name, email };
            return fetch(getServerURL() + "/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser)
            });
        })
        .then(res => res.json())
        .then(data => console.log("Nuevo usuario agregado:", data))
        .catch(err => console.error("Error:", err));
}