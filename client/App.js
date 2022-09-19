import React, { useState } from 'react'
import HostWrap from './Components/HostWrap'
import ClientOnly from './Components/ClientOnly'

const Header = React.lazy(() => import('remoteComponents/Header'));

const AppComponent = () => {
  const [name] = useState('Im Host App')

  return (
    <>
    <ClientOnly>
      <React.Suspense fallback="Loading Header">
          <Header name="Im Remote"/>
      </React.Suspense>
      </ClientOnly>
    <HostWrap name='Im Host App' />
    </>
  )
}

export default AppComponent
