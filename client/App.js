import React, { useState } from 'react'
import Hello from './Components/Hello'

const AppComponent = () => {
  const [name] = useState('world')

  return <Hello name={name} />
}

export default AppComponent
