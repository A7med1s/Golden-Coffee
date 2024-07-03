import {configureStore} from "@reduxjs/toolkit"
import productslice from "./slices/productslice"
import cartslice from "./slices/cartslice"

export const myStore = configureStore({
    reducer: {
        product : productslice,
        cart :cartslice
    }
})