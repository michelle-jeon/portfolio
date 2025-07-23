import { FooterContainer,ContactSection,Title,ContactInfo,Copyright } from "./Footer.styles";
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
  return (
    <FooterContainer>
      <ContactSection>
        <Title>CONTACT</Title>
        <ContactInfo>
          <a href="mailto:mkyng.jeon@gmail.com" className="email">
            <HiOutlineMail size={18} style={{ marginRight: '6px' }} />
            mkyng.jeon@gmail.com
          </a>
          <p>010-4936-6224</p>
        </ContactInfo>
      </ContactSection>
      <Copyright>
        ©2025 MikyeongJeon. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
}
