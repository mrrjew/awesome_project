import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
    origin:null,
    destination:null,
    travelTimeInformation:null
}

export const navSlice = createSlice({
    name:"nav",
    initialState,
    reducers:{
        setOrigin: (state,action) => {
            state.origin = action.payload;
        },
        setDestinaiton: (state,action) => {
            state.origin = action.payload;
        },
        setTravelTimeInformation: (state,action) => {
            state.origin = action.payload;
        }
    }
})

export const {setOrigin,setDestinaiton,setTravelTimeInformation} = navSlice.actions

// selectors
export const selectOrigin = (state) => state.nav.origin
export const selectDestination = (state) => state.nav.destination
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation

export default navSlice.reducer