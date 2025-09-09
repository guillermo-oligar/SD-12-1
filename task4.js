// Task 4: delUser(number)
import { getServerURL } from "./task1.js";

export async function delUser(id) {
    try {
        const response = await fetch(getServerURL() + `/users/${id}`, { method: "DELETE" });
        if (response.ok) console.log(`Usuario con id ${id} eliminado 💀`);
        else console.error(`No se pudo eliminar el usuario con id ${id}. 🤷‍♂️`);
    } catch (error) {
        console.error("Error al eliminar usuario:", error);
    }
}
