'use client'

import { combineReducers } from '@reduxjs/toolkit'
import { appReducer, themeReducer } from '../features'

type Reducers = {
  app: typeof appReducer
  theme: typeof themeReducer
}

export const reducers: Reducers = {
  app: appReducer,
  theme: themeReducer,
}

export const rootReducer = combineReducers({ ...reducers })
