import { handleGetProductLocalStorage } from "../persistence/localstorage"
import { handleRenderList } from "../views/store"

export const handleSearchProductByName = () => {
    const inputHeader = document.getElementById('input-header')
    const products = handleGetProductLocalStorage()
    const result = products.filter((el) => {
        return el.nombre.toLowerCase().includes(inputHeader.value)
    })
    handleRenderList(result)
}