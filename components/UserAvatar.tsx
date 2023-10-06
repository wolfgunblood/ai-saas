import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useUser } from '@clerk/nextjs'


type Props = {}

const UserAvatar = () => {

    const { user } = useUser();
    return (
        <Avatar className='h-6 w-8'>
            <AvatarImage src={user?.profileImageUrl} />
            <AvatarFallback>
                {user?.firstName?.charAt(0)}
                {user?.lastName?.charAt(0)}
;           </AvatarFallback>
        </Avatar>
    )
}

export default UserAvatar