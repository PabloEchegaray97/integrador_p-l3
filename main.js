import { setInLocalStorage } from "./src/persistence/localstorage";
import { renderCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/searchBar";
import { openModal } from "./src/views/modal";
import { handleGetProductToStore } from "./src/views/store";
import './style.css' //para usar estilos dentro de js


/*===APLICACION===*/

export let categoriaActiva = null

export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn
}
export let productoActivo = null
export const setProductoActivo = (productoIn) => {
    productoActivo = productoIn
}

handleGetProductToStore()
renderCategories()

/*===HEADER===*/
const buttonAdd = document.getElementById('button-add-element')
buttonAdd.addEventListener('click', () => {
    openModal()
})

//===BUTTONSEARCH===

const butttonSearch = document.getElementById('button-search')
butttonSearch.addEventListener('click', () => {
    handleSearchProductByName()
})