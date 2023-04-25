import axios from 'axios'

const API_URL = 'https://stormy-teal-turtle.cyclic.app/api/tareas/'

//* Funcion para crear una nueva tarea
const createTarea = async (tareaData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, tareaData, config)
    return response.data
}

//? Obtener las tareas del usuario
const getTareas = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}


const tareaService = {
    createTarea,
    getTareas
}

export default tareaService