export const addItem=(item)=>{
    return{
        type:'ADD_ITEMS',
        payload:item
    }
}

export const delItem=(item)=>{
    return{
        type:'DEL_ITEMS',
        payload:item
    }
}
