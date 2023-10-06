import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Props = {}

const BotAvatar = () => {
  return (
    <Avatar className='h-6 w-8'>
            <AvatarImage src="/logo.svg" className='p-1' />
        </Avatar>
  )
}

export default BotAvatar