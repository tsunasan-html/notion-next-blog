import Link from 'next/link'
import React, { FC, ReactNode } from 'react'
import Navber from './Navber'
import Footer from './Footer'
import { LayoutProps } from '../types/types'

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col items-center max-w-2xl xl:max-w-6xl w-full mx-auto">
        <Navber />
        <main className="w-full pb-12 px-5 md:px-4">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout