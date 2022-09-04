import React, { ReactNode } from 'react'
import Header from './Header'

function Layout({ children }: { children: ReactNode }) {
    return (
        <div className='bg-neutral-100 flex flex-col h-full'>
            <Header />
            <div className='flex-1 h-full overflow-y-auto'>
                {children}
            </div>
        </div>
    )
}

export default Layout