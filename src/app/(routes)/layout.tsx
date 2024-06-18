import React from 'react'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'

import { AppLayout } from '@/app/layouts/app'

export const metadata: Metadata = {
  title: 'Naruto - Phaser Next.js Game',
  description: 'A Naruto game using Phaser 3 and Next.js',
}

interface Props {
  children: ReactNode
}

export default function MainLayout({ children }: Readonly<Props>) {
  return (
    <AppLayout>
      { children }
    </AppLayout>
  )
}
