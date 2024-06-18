'use client'

import { useSelector } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import merge from 'deepmerge'

import { useAppDispatch } from '../../shared/hooks'
import type { RootState } from '../../shared'
import {
  appStart,
  setCurrentUser,
  setReady,
} from './actions'
import { sidebarMenu } from './sidebar'

/* Selectors */
export const useAppState = () => (
  useSelector(({ app }: RootState) => app)
)

export const appCurrentUser = () => useAppState().currentUser
export const appIsReady = () => useAppState().isReady
// export const appSidebarMenu = () => useAppState().sidebarMenu
// export const appSidebarMenuActive = () => useAppState().sidebarMenuActive

/* Actions */
export const useAppActions = () => ({
  ...bindActionCreators({
    appStart,
    setCurrentUser,
    setReady,
    // setSidebarMenu,
    // setSidebarMenuActive,
  }, useAppDispatch())
})

/* Sidebar */
export const useSidebarMenu = (custom: typeof sidebarMenu) => (
  merge(custom, sidebarMenu)
)
