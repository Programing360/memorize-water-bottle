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


const getProductFromLS = ()=>{
    const cartProducts = localStorage.getItem('cart')
    if(cartProducts){
        return JSON.parse(cartProducts)
    }
    return []
}

const saveProductCart = cart =>{
    const cartStringfy = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringfy)
}

const addProductToLS = id => {
    const cart = getProductFromLS()
    cart.push(id)

    saveProductCart(cart)
}

export {addProductToLS, getProductFromLS}