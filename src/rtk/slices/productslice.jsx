import data from "../../data"
import {createSlice} from "@reduxjs/toolkit"

export const productSlice = createSlice({
    initialState :data,
    name:"product-slice",
})

export default productSlice.reducer