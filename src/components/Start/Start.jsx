import React from 'react'
import { Main, Container } from './styled'
import person from '../../assets/person.gif'

const Start = () => {
  return (
    <Main>
      <Container>
        <div>
          <h2>Olá, meu nome é</h2>
          <h1>Matheus Castro</h1>
          <h3>Desenvolvedor Front-end</h3>
        </div>
      <img src={person} />
      </Container>
    </Main>
  )
}

export default Start 
