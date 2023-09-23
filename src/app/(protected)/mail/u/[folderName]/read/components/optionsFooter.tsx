import React from 'react'
import LeftSide from './optionsFooter/leftSide'
import RightSide from './optionsFooter/rightSide'

const OptionsFooter = () => {
    return (
        <div className="bottom-0 fixed inset-l-20 z-10    border-t border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800   mx-auto">
            <div className="items-center dark:divide-gray-700 sm:flex sm:divide-x sm:divide-gray-100 lg:pl-4 justify-between">
                <LeftSide />
                <RightSide />
            </div>
        </div>
    )
}

export default OptionsFooter