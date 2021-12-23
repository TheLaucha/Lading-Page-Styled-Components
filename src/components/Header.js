import React from "react"
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled"
import { Button } from "./styles/Button.styled"
import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./images/logo.svg' alt=''></Logo>
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nibh lorem, tincidunt
              bibendum finibus nec, dignissim sed leo. Nunc pharetra vestibulum nisi sed pulvinar.
              Nulla eget orci eu eros fermentum viverra. Nulla mollis facilisis justo quis
              scelerisque. Nam eleifend, lacus vel elementum malesuada, dolor ligula aliquam nunc,
              sed sagittis odio purus in ipsum.
            </p>

            <Button bg='#ff0099' color='#fff'>
              Get Started For Free
            </Button>
          </div>

          <Image src='./images/illustration-mockups.svg' alt=''></Image>
        </Flex>
      </Container>
    </StyledHeader>
  )
}

export default Header
