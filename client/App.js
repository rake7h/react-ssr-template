import React, { useState } from 'react'
import Hello from './Components/Hello'
import ClientOnly from './Components/ClientOnly'

const Header = React.lazy(() => import('remoteComponents/Header'));

const AppComponent = () => {
  const [name] = useState('world')

  return (
    <>
    <h1>Im Host</h1>
    <Hello name={name} />
    <ClientOnly>
    <React.Suspense fallback="Loading Header">
      <Header />
    </React.Suspense>
      hello
    </ClientOnly>
    </>
  )
}

export default AppComponent
