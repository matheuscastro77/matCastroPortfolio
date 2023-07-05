import React from 'react'
import { BoxContact, BoxImg, Container, Main, Img, ImgPhone } from './styled'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import email from '../../assets/e-mail.png'
import phone from '../../assets/whatsapp.png'
import contact from '../../assets/contact.svg'

const Contact = () => {

  return (
    <Main>
    <Container>
    <ImgPhone src={contact} />
      <BoxContact>
        <h2>Contact</h2>
        <BoxImg>
        <a href="https://github.com/matheuscastro77" target="_blank"> <Img src={github} /> </a>
        <a href="https://www.linkedin.com/in/matheus-castro-541a57140/" target="_blank"> <Img src={linkedin} />  </a>
        <a href="mailto:matheustvcastro1997@gmail.com" target="_blank"> <Img src={email} /> </a>
        </BoxImg>
      </BoxContact>
    </Container>
  </Main>
  )
}

export default Contact 