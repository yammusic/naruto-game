import React from 'react'
import '@/domain/polyfills'

import { StoreProvider } from '@/domain/store'

import '@/app/styles/globals.scss'
import type { AppLayoutProps } from './props-types'

export function AppLayout({ children }: Readonly<AppLayoutProps>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <StoreProvider>
          { children }
        </StoreProvider>
      </body>
    </html>
  )
}
