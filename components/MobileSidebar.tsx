"use client"

import React, { useState, useEffect } from 'react'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Sidebar from './Sidebar'

import { Menu } from "lucide-react";
import { Button } from './ui/button';


type Props = {}

const MobileSidebar = () => {

    const [isMounted, setisMounted] = useState(false)

    useEffect(() => {
        setisMounted(true)
    }, [])

    if (!isMounted) return null;

    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon" className='md:hidden'>
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className='p-0'>
                <Sidebar />
            </SheetContent>
        </Sheet>

    )
}

export default MobileSidebar