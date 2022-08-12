import React from 'react'
import { Main, Container, DivIcons } from './styled'
import codetyping from '../../assets/codetyping.svg'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import email from '../../assets/e-mail.png'

const Start = () => {
  return (
    <Main>
      <Container>
        <div>
          <h2>Oi, eu sou</h2>
          <h1>Matheus Castro</h1>
          <h3>Desenvolvedor Front-end.</h3>
        </div>
      <img src={codetyping} />
      </Container>
      <DivIcons>
      <img src={github} />
      <img src={linkedin} />
      <img src={email} />
      </DivIcons>
    </Main>
  )
}

export default Start 
