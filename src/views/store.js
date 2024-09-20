/*===STORE=== */
import { setProductoActivo } from "../../main"
import { handleGetProductLocalStorage } from "../persistence/localstorage"
import { openModal } from "./modal"
//funcion que se encarga de traer elementos y llamar al render
export const handleGetProductToStore = () => {
    const products = handleGetProductLocalStorage()
    handleRenderList(products)
}
//se encarga de filtrar y de renderizar la seccion con todos sus respectivos elementos
export const handleRenderList = (productsIn) => {
    //filtrado de arrays por categoria
    const hamburguesas = productsIn.filter((el) => el.categoria == "hamburguesas")
    const papas = productsIn.filter((el) => el.categoria == "papas")
    const gaseosas = productsIn.filter((el) => el.categoria == "gaseosas")
    //funcion que renderiza los elementos de la seccion
    const renderProductGroup = (products, title) => {
        console.log(products);

        if (products.length > 0) {
            const productsHTML = products.map((product, index) => {
                return `
                    <div class="container-target-item" id="product-${product.categoria}-${index}">
                        <div>
                            <img src=${product.img}/>
                        </div>
                        <div>
                            <h2>${product.nombre}</h2>
                        </div>
                        <div  class="target-props">
                            <p><b>Precio: ${product.precio}</b></p>
                        </div>
                    </div>
                `
            })
            //retorna la seccion con todos los elementos dentro
            return `
                    <section class="section-store">
                        <div class="container-title-section"><h3>${title}</h3></div>
                        <div class="container-product-store">
                            ${productsHTML.join("")}
                        </div>
                    </section>
                `
        } else {
            return ""
        }
    }
    //renderizar c/u de los productos dentro de su categoria
    const appContainer = document.getElementById('store-container')
    appContainer.innerHTML = `
        ${renderProductGroup(hamburguesas, "Hamburguesas")}
        ${renderProductGroup(gaseosas, "Gaseosas")}
        ${renderProductGroup(papas, "Papas")}
    `
    //se añaden los eventos de manera dinamica
    const addEvents = (productsIn) => {
        console.log(productsIn);
        if (productsIn) {
            productsIn.forEach((element, index) => {
                const productContainer = document.getElementById(`product-${element.categoria}-${index}`)
                productContainer.addEventListener('click', () => {
                    console.log('Producto activo ', element);
                    setProductoActivo(element)
                    openModal()
                })
            })
        }
    }
    addEvents(hamburguesas)
    addEvents(gaseosas)
    addEvents(papas)


}