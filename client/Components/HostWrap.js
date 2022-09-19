import React from 'react'

import styled from 'styled-components'

const HelloWrap = styled.div`
 height: 150px;
 width: 100vw;
 background: lightpink;
 padding: 30px;
`

const HostWrap = ({ name }) => {
  return <HelloWrap>{name}!</HelloWrap>
}

export default HostWrap
