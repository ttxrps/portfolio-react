import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa';
import { SiAirplayvideo } from "react-icons/si";
import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SiAirplayvideo />
            TTXRPS
          </SocialLogo>
          <WebsiteRights>TTXRPS © 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/'  aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/'  aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='/'   aria-label='Twitter'>
              <FaGithub />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
