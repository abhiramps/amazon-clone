export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}

export const delItem = (item) => {
    return {
        type: 'DELITEM',
        payload: item
    }
}
