'use client'

import { createSlice } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'

import {
  setReady,
  // setSidebarMenu,
  // setSidebarMenuActive,
  setCurrentUser,
} from './actions'
import { sidebarMenu } from './sidebar'
import type { AppState } from './types'

const initialState: AppState = {
  cities: [],
  countries: [],
  currentUser: null,
  isReady: false,
  roles: [],
  sessions: [],
  sidebarMenu,
  sidebarMenuActive: [],
  states: [],
  users: [],
}

const persistConfig = {
  blacklist: [
    'isReady',
    'sidebarMenu',
    'sidebarMenuActive',
  ],
  key: 'app',
  storage,
  version: 1,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(setReady, (state, { payload }) => ({
      ...state,
      isReady: payload,
    }))

    addCase(setCurrentUser, (state, { payload }) => ({
      ...state,
      currentUser: payload,
    }))

    // addCase(setSidebarMenu, (state, { payload }) => ({
    //   ...state,
    //   sidebarMenu: payload,
    // }))

    // addCase(setSidebarMenuActive, (state, { payload }) => ({
    //   ...state,
    //   sidebarMenuActive: payload,
    // }))
  },
})

export const appReducer = persistReducer<AppState>(persistConfig, appSlice.reducer)
