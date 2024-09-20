import { productoActivo, setProductoActivo } from "../../main"
import { handleDeleteProduct } from "../services/product"

/*===POPUP===*/
const buttonCancel = document.getElementById('cancel-button')
buttonCancel.addEventListener('click', () => {
    closeModal()
})


//===FUNCIONES PARA ABRIR Y CERRAR MODAL
export const openModal = () => {
    const modal = document.getElementById('modal-popup')
    modal.style.display = 'flex'
    const buttonDelete = document.getElementById('delete-button')
    if (productoActivo) {
        buttonDelete.style.display = 'block'
    } else {
        buttonDelete.style.display = 'none'
    }
    if (productoActivo) {
        const nombre = document.getElementById('nombre')
        const img = document.getElementById('img')
        const precio = document.getElementById('precio')
        const categoria = document.getElementById('categoria')
        nombre.value = productoActivo.nombre
        img.value = productoActivo.img
        precio.value = productoActivo.precio
        categoria.value = productoActivo.categoria
    }
}

export const closeModal = () => {
    const modal = document.getElementById('modal-popup')
    modal.style.display = 'none'
    setProductoActivo(null)
    resetModal()
}

const resetModal = () => {
    const nombre = document.getElementById('nombre')
    const img = document.getElementById('img')
    const precio = document.getElementById('precio')
    const categoria = document.getElementById('categoria')
    nombre.value = ""
    img.value = ""
    precio.value = 0;
    categoria.value = ""
}
const deleteButton = document.getElementById('delete-button')
deleteButton.addEventListener('click', () => {
    handleButtonDelete()
})


const handleButtonDelete = () => {
    handleDeleteProduct()
}