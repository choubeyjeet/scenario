import { configureStore } from '@reduxjs/toolkit'
import createScenarioSlice from './features/CreateScenario/CreateScenarioSlice';



export const store = configureStore({
     reducer: { 
      scenario: createScenarioSlice
      },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });