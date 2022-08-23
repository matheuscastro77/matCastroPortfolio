import React from 'react'
import { Main } from './styled'

const Contact = () => {

  let a = 1
  let b = 1
  let count = 0

  while (count < 10) {
    console.log(a)
    count += 1
    const c = a + b
    a = b
    b = c
  }

  return (
    <Main>
      
    </Main>
  )
}

export default Contact 