import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { APP_NAME } from '@/domain/constants/app'
import type { AppState } from './types'

const initialState = {
  appName: APP_NAME,
  isReady: false,
  currentUser: null,
  // sidebarMenu: [],
  // sidebarMenuActive: [],
}

export const useAppStore = create<AppState>()(persist((set) => ({
  ...initialState,
  setAppName: (payload: AppState['appName']) => set({ appName: payload }),
  setReady: (payload: AppState['isReady']) => set({ isReady: payload }),
  setCurrentUser: (payload: AppState['currentUser']) => set({ currentUser: payload }),
}), {
  name: 'app',
}))
