// const getProductFromLS = () => {
//     const productCart = localStorage.getItem('cart')
//     if (productCart) {
//         return JSON.parse(productCart)
//     }
//     return []
// }

// const saveProductCart = (cart) => {
//     const cartStringify = JSON.stringify(cart)
//     localStorage.setItem(cartStringify)
// }

// const addProductToLS = (id) => {
//     const cart = getProductFromLS()
//     cart.push(id)
//     saveProductCart(cart)
// }


const getProductFromLS = () => {
    const cartProducts = localStorage.getItem('cart')
    if (cartProducts) {
        return JSON.parse(cartProducts)
    }
    return []
}

const saveProductCart = cart => {
    const cartStringfy = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringfy)
}

const addProductToLS = id => {
    const cart = getProductFromLS()
    cart.push(id)

    saveProductCart(cart)
}

const removeFromLS = (id) => {
    console.log(id)
    const cart = getProductFromLS()
    console.log(cart)
    // const saveId = [...cart, id]
    // const remaining = localStorage.removeItem(saveId)
    const remaining = cart.filter(idx => idx !== id)
    console.log(remaining)
    saveProductCart(remaining)
}

export { addProductToLS, getProductFromLS, removeFromLS }