import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const initialState ={
        products:[],
        loading:false,
        error:null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts',async()=>{
    try{
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/products/get-products`)
        return response.data

    }
    catch(error){
     console.log(error)
    }
})

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading=true
            state.error = null
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.products = action.payload
            state.loading =false
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default productSlice.reducer