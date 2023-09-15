import React from 'react'
import LeftSide from './optionsFooter/leftSide'
import RightSide from './optionsFooter/rightSide'

const OptionsFooter = () => {
    return (
        <div className="bottom-0  border-t border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 lg:fixed lg:pl-64">
            <div className="items-center dark:divide-gray-700 sm:flex sm:divide-x sm:divide-gray-100 lg:pl-4">
                <LeftSide />
                <RightSide />
            </div>
        </div>
    )
}

export default OptionsFooter