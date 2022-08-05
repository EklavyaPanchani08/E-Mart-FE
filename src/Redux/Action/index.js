// ADD ITEM IN CART
export const addCart = (product)=>{
    return{
        type : 'ADDITEM',
        payload : product
    }
}

// REMOVE ITEM FROM CART
export const delCart = (product)=>{
    return{
        type : 'DELITEM',
        payload : product
    }
}