import { configureStore } from '@reduxjs/toolkit'
import EtabSlice from './EtabSlice'
import EventSlice from './EventSlice'
import HotelSlice from './HotelSlice'
import RestoSlice from './RestoSlice'
import UserSlice from './UserSlice'

export const Store = configureStore({
  reducer: {user:UserSlice,
    resto:RestoSlice,
    event:EventSlice,
    hotel:HotelSlice,
    etab:EtabSlice
    
  },
})