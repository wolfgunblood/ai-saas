"use client"
import Link from "next/link"
import Logo from "./logo"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

export default function NavbarLanding() {
    
    const router = useRouter()

    return (
        <header className="flex h-16 items-center justify-between bg-background px-4 md:px-6">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <Logo />
                <span className="text-lg font-semibold">Meow Inc</span>
            </Link>
            <nav className="flex items-center gap-4">
               
               <Button 
                onClick={() => router.push("/dashboard")}
               >
                Get Started
               </Button>
            </nav>
        </header>
    )
}

