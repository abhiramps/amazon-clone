export const initialState={
    cartItems:[],
    searchResults:[]
}

export const Reducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,cartItems:[...state.cartItems,action.payload]
            }
        case 'DELITEM':
           
            return {
                ...state,cartItems:[...state.cartItems.filter((itm)=>itm.prodId!==action.payload.prodId)]
            }
        case 'CART_ITEM_BTN_STATE':
            return {
                ...state,cartItemBtnState:!state.cartItemBtnState
            }    
        default: 
            return state    
    }
}