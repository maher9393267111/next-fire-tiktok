

import {  applyMiddleware } from "redux"
import { configureStore } from '@reduxjs/toolkit'
import { HYDRATE, createWrapper } from "next-redux-wrapper"
import thunk from "redux-thunk"
import reducers from "./reducer"


let   initialRootState


// const  middleware = getDefaultMiddleware => {
// getDefaultMiddleware({
//   serializableCheck: false,
// }),
// }


const combineMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension")
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    return nextState
  } else {
    return reducers(state, action)
  }
}

// const store = configureStore({ reducer: rootReducer })

const initStore = () => {

//  return 
  // configureStore({reducer, middleware:combineMiddleware([thunk])})

  const store = configureStore({
    reducer,
    devTools: true,
  });
  initialRootState = store.getState();
  return store;



}

export const wrapper = createWrapper(initStore)

