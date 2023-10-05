"use client"

import React, { use } from 'react'
import Link from "next/link"
import { Montserrat } from "next/font/google"
import { usePathname } from "next/navigation"
import Image from "next/image";

import { cn } from '@/lib/utils'
import { LayoutDashboard,MessageSquare,ImageIcon,VideoIcon,Music,Code,Settings } from 'lucide-react'

type Props = {}

const montserrat = Montserrat({ weight: "600", subsets: ['latin'] })
const routes = [
    {
        label : "Dashboard",
        href : "/dashboard",
        icon : LayoutDashboard,
        color: "text-sky-500"
    },
    {
        label : "Conversation",
        href : "/conversation",
        icon : MessageSquare,
        color: "text-violet-500"
    },
    {
        label : "Image Generation",
        href : "/image",
        icon : ImageIcon,
        color: "text-pink-500"
    },
    {
        label : "Video Generation",
        href : "/video",
        icon : VideoIcon,
        color: "text-orange-500"
    },
    {
        label : "Music Generation",
        href : "/music",
        icon : Music,
        color: "text-emerald-500"
    },
    {
        label : "Code Generation",
        href : "/code",
        icon : Code,
        color: "text-green-500"
    },
    {
        label : "Settings",
        href : "/settings",
        icon : Settings,
        // color: "text-sky-500"
    },
]
const Sidebar = (props: Props) => {

    const pathname = usePathname()
    return (
        <div className='space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
            <div className='px-3 py-2 flex-1'>
                <Link href="/dashboard" className='flex items-center pl-2 mb-14'>
                    <div className='relative h-8 w-8 mr-4'>
                        <Image fill alt='logo' src="/logo.svg" />
                    </div>
                    <h1 className={cn("text-2xl font-bold",montserrat.className)}>
                        Bundle
                    </h1>
                </Link>
                <div className='space-y-2'>
                    {routes.map((route, index) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer "
                            )}
                        >
                            <div className='flex items-center flex-1'>
                                <route.icon className={cn("h-5 w-5 mr-3",route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar