import React from 'react'

const AvatarArray = () => {
    return (
        <div className="flex -space-x-4">
            <img
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                src="/docs/images/people/profile-picture-5.jpg"
                alt=""
            />            
            <a
                className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                href="#"
            >
                +99
            </a>
        </div>
    )
}

export default AvatarArray