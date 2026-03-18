import { createSlice } from "@reduxjs/toolkit";

    const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        Additem: (state, action) => {

            let existitem = state.find(
                (item) => item.id === action.payload.id);
            if (existitem) {
                existitem.qty += 1;}
            else {
                state.push({ ...action.payload, qty: 1 });
            }
        },
        Removeitem: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },

        incrymentqty:(state,action)=>{
            return state.map((item)=>item.id===action.payload
        ?{...item,qty:item.qty+1}
        :item)
        },

        dikriment:(state,action)=>{
            return state.map((item)=>item.id===action.payload
        ?{...item,qty:item.qty-1}
        :item)
        }
    }
});
export const {Additem,Removeitem,incrymentqty,dikriment} = cartSlice.actions
export default cartSlice.reducer
