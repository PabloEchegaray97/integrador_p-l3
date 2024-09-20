import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { handleRenderList } from "../views/store";

/*===CATEGORIAS===*/
const handleFilterProductosByCategory = (categoryIn) => {
    const products = handleGetProductLocalStorage()
    switch (categoryIn) {
        case categoriaActiva:
            handleRenderList(products)
            break;
        case "todo":
            handleRenderList(products)
            break;
        case "mayor-precio":
            const resultPrecioMayor = products.sort((a,b) => b.precio - a.precio)
            handleRenderList(resultPrecioMayor)
            break;
        case "menor-precio":
            const resultPrecioMenor = products.sort((a,b) => a.precio - b.precio)
            handleRenderList(resultPrecioMenor)
            break;
        case "hamburguesas":
        case "papas":
        case "gaseosas":
            const result = products.filter((el) => el.categoria == categoryIn)
            handleRenderList(result)

            break;
        default:
            break;
    }
}

//render de la vista categorias

export const renderCategories = () => {
    const ulList = document.getElementById('list-filter');
    ulList.innerHTML = `
    <li id="todo">Todos los productos</li>
    <li id="hamburguesas">Hamburguesas</li>
    <li id="papas">Papas</li>
    <li id="gaseosas">Gaseosas</li>
    <li id="mayor-precio">Mayor Precio</li>
    <li id="menor-precio">Menor Precio</li>
    `
    const liElements = ulList.querySelectorAll('li')
    liElements.forEach((el) => {
        el.addEventListener('click', () => {
            console.log('Click en: ', el.id);
            handleClick(el)
        })
    })
    const handleClick = (elemento) => {
        handleFilterProductosByCategory(elemento.id)
        liElements.forEach((el) => {
            if (el.classList.contains('li-active')) {
                el.classList.remove('li-active')
            } else {
                if (elemento == el) {
                    el.classList.add('li-active')
                }
            }
        })
    }

}
