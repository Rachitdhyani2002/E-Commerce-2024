import {configureStore} from '@reduxjs/toolkit'
import productsSlice from './productsSlice'
import cartSlice from './cartSlice'

const store = configureStore({
    reducer:{
        product:productsSlice,
        cart:cartSlice
    }
})

export default store