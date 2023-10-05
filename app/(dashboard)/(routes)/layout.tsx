import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

type Props = {}

const DashboardLayout = ({
    children
}: { children: React.ReactNode }) => {
    return (
        <div className='h-full relative'>
            <div className='hidden h-full md:flex md:flex-col md:w-72 md:fixed md:inset-y-0 z-90 bg-gray-900'>
                <Sidebar />
            </div>
            <div className='md:pl-72 pb-10'>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout