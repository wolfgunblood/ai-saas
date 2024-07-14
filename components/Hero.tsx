"use client"
import Link from "next/link"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

export default function Hero() {
    const router = useRouter()

    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore the power of AI</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Chat with the smaetest Ai - Experience th power of Ai
                </p>
                <Button
                    onClick={() => router.push("/dashboard")}
                >
                    Get Started
                </Button>
            </div>
        </section>
    )
}