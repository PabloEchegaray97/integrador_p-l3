/*==GUARDAR O MODIFICAR ELEMENTOS===*/
import { productoActivo } from "../../main"
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localstorage"
import { closeModal, openModal } from "../views/modal"
import { handleGetProductToStore, handleRenderList } from "../views/store"
import Swal from "sweetalert2"
const acceptButton = document.getElementById('accept-button')
acceptButton.addEventListener('click', () => {
    handleSaveOrModifyElements()
})
const handleSaveOrModifyElements = () => {
    const nombre = document.getElementById('nombre').value
    const img = document.getElementById('img').value
    const precio = document.getElementById('precio').value
    const categoria = document.getElementById('categoria').value
    let object = null
    if (productoActivo) {
        object = {
            ...productoActivo,
            nombre,
            img,
            precio,
            categoria
        }
    } else {
        object = {
            id: new Date().toISOString(),
            nombre,
            img,
            precio,
            categoria
        }
    }
    if (object!=null) {
        Swal.fire({
            title: "¡Correcto!",
            text: "Producto guardado correctamente.",
            icon: "success"
        });
    }
    setInLocalStorage(object)
    handleGetProductToStore()
    closeModal()
}

//eliminar elementos

export const handleDeleteProduct = () => {
    Swal.fire({
        title: "¿Estas seguro de eliminar el producto?",
        text: "No podrás revertirlo",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar."
    }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage()
            const result = products.filter((el) => el.id !== productoActivo.id);
            localStorage.setItem("products", JSON.stringify(result))
            const newProducts = handleGetProductLocalStorage()
            handleRenderList(newProducts)
            closeModal()
            Swal.fire({
                title: "¡Eliminado con exito!",
                text: "Producto eliminado con éxito.",
                icon: "success"
            });
        } else {
            closeModal()
        }
    });

}