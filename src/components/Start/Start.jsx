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
      <a href="https://github.com/matheuscastro77" target="_blank"> <img src={github} /> </a>
      <a href="mailto:matheuscastro1997@hotmail.com" target="_blank"> <img src={email} /> </a>
      <a href="https://www.linkedin.com/in/matheus-castro-541a57140/" target="_blank"> <img src={linkedin} />  </a>
      </DivIcons>
    </Main>
  )
}

export default Start 
