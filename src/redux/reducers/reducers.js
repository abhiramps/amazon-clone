export const initialState=[];

const addItemReducer = (state=initialState,action) => {
   switch(action.payload){
        case 'ADD_ITEMS':
            return state;
        case 'DEL_ITEMS':
            return state;
        case default:
            return state;
   }
}

export default addItemReducer;
