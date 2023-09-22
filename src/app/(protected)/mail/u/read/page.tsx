import React from 'react'
import Info from './components/info'
import OptionsHeader from './components/optionsHeader'
import OptionsFooter from './components/optionsFooter'

const ReadPage = () => {

  return (
    <main className="h-screen max-w-full bg-gray-50 dark:bg-gray-900">
      <OptionsHeader />
      <Info />
      <OptionsFooter />
    </main>
  )
}

export default ReadPage