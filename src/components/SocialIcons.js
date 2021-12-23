import React from "react"
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa"
import { StyledSocialIcons } from "./styles/SocialIcons.styled"

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href='https://twitter.com'>
          <FaTwitter></FaTwitter>
        </a>
      </li>
      <li>
        <a href='https://facebook.com'>
          <FaFacebook></FaFacebook>
        </a>
      </li>
      <li>
        <a href='https://linkedin.com'>
          <FaLinkedin></FaLinkedin>
        </a>
      </li>
    </StyledSocialIcons>
  )
}

export default SocialIcons
