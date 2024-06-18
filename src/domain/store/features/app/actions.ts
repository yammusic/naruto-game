'use client'

import { createAction } from '@reduxjs/toolkit'
import type { UserResource } from './types'

export const setReady = createAction<boolean>('@app/SET_READY')
export const setCurrentUser = createAction<UserResource | null>('@app/SET_CURRENT_USER')
// export const setSidebarMenu = createAction<SidebarMenuItem[]>('@app/SET_SIDEBAR_MENU')
// export const setSidebarMenuActive = createAction<string[]>('@app/SET_SIDEBAR_MENU_ACTIVE')
export const appStart = createAction('@app/START')
