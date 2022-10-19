import * as React from 'react'
import styled, { css } from 'styled-components'

const { useState, useEffect } = React

export const App: React.FC = () => {
  const [hexTime, setHexTime] = useState('')
  let myDate = new Date()
  let str = myDate.toTimeString()
  let timeStr = str.substring(0, 8)

  useEffect(() => {
    getHexTime()
    const interval = setInterval(() => {
      getHexTime()
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const getHexTime = () => {
    myDate = new Date()
    str = myDate.toTimeString()
    timeStr = str.substring(0, 8)
    setHexTime(timeStr.replace(new RegExp(/(:)/g), ''))
  }

  return (
    <Wrapper hexTime={hexTime}>
      <p>#{hexTime}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: ${props => `#${props.hexTime}`};
  color: #fff;
  > p {
    text-align: center;
    font-size: 4rem;
    font-weight: 100;
  }
`
