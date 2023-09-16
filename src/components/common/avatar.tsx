import React from 'react'
import Avatar from 'react-avatar';

type AvatarWithFallback = {
    name: string,
    size?: string,
    src?: string,
}
const AvatarWithName = ({ name, size = "40", }: AvatarWithFallback) => {
    return (
        <Avatar name={name} />
    )
}

export default AvatarWithName