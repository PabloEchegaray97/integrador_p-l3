/*===LOCAL STORAGE===*/

export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem('products'))
    if (products) {
        return products
    } else {
        return []
    }
}

//*===GUARDAR EN LOCALSTORAGE===*/
//recibir un producto
export const setInLocalStorage = (productIn) => {
    if (productIn) {
        // Traer todos los elementos
        let productsInLocal = handleGetProductLocalStorage()

        // Encontrar el índice del producto existente
        const existingIndex = productsInLocal.findIndex((productsLocal) => {
            return productsLocal.id === productIn.id // Asegúrate de devolver el resultado de la comparación
        })

        // Verificar si el elemento existe
        if (existingIndex !== -1) {
            // Si existe, reemplazar el producto
            productsInLocal[existingIndex] = productIn
        } else {
            // Si no existe, agregarlo
            productsInLocal.push(productIn)
        }

        // Guardar el nuevo array en localStorage
        localStorage.setItem("products", JSON.stringify(productsInLocal))
    }
}

